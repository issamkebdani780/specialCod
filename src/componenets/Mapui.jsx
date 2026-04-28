import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';

const CITIES = [
  { name: 'Alger',       lat: 36.737, lng:  3.086,  rate: 74, delta: '+5%', orders: 1842, tier: 'high' },
  { name: 'Oran',        lat: 35.691, lng: -0.642,  rate: 65, delta: '+3%', orders: 1203, tier: 'mid'  },
  { name: 'Constantine', lat: 36.365, lng:  6.614,  rate: 58, delta: '+8%', orders:  876, tier: 'mid'  },
  { name: 'Blida',       lat: 36.47,  lng:  2.828,  rate: 70, delta: '+4%', orders:  720, tier: 'high' },
  { name: 'Tlemcen',     lat: 34.878, lng: -1.316,  rate: 61, delta: '+6%', orders:  412, tier: 'mid'  },
  { name: 'Sétif',       lat: 36.19,  lng:  5.408,  rate: 55, delta: '+7%', orders:  631, tier: 'mid'  },
  { name: 'Annaba',      lat: 36.9,   lng:  7.765,  rate: 52, delta: '+2%', orders:  543, tier: 'mid'  },
  { name: 'Batna',       lat: 35.556, lng:  6.174,  rate: 47, delta: '+3%', orders:  321, tier: 'low'  },
  { name: 'Adrar',       lat: 27.87,  lng: -0.294,  rate: 31, delta: '+2%', orders:   64, tier: 'low'  },
];

const TIER_COLORS = {
  high: { dot: '#22c55e', ring: 'rgba(34,197,94,.2)',  badge: 'bg-emerald-500/10 text-emerald-500' },
  mid:  { dot: '#f59e0b', ring: 'rgba(245,158,11,.2)', badge: 'bg-amber-500/10 text-amber-500'    },
  low:  { dot: '#6366f1', ring: 'rgba(99,102,241,.2)', badge: 'bg-primary/10 text-primary'         },
};

const MapUI = () => {
  const svgRef    = useRef(null);
  const wrapRef   = useRef(null);
  const [active, setActive]     = useState(null);
  const [tooltip, setTooltip]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const highlight = useCallback((idx) => setActive(idx), []);

  // Track sm breakpoint (< 640px)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const buildMap = useCallback(() => {
    let cancelled = false;

    Promise.all([
      import('https://cdn.jsdelivr.net/npm/d3@7/+esm'),
      import('https://cdn.jsdelivr.net/npm/topojson-client@3/+esm'),
    ]).then(([d3, topojson]) => {
      if (cancelled || !svgRef.current || !wrapRef.current) return;

      d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
        if (cancelled) return;

        const all     = topojson.feature(world, world.objects.countries);
        const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
        const algeria = all.features.find(f => +f.id === 12);

        const wrap = wrapRef.current;
        const W    = wrap.clientWidth  || 520;
        const H    = wrap.clientHeight || 400;

        const svg = d3.select(svgRef.current)
          .attr('width', W).attr('height', H)
          .attr('viewBox', `0 0 ${W} ${H}`);

        svg.selectAll('*').remove();

        const projection = d3.geoMercator()
          .fitExtent([[12, 12], [W - 12, H - 32]], algeria);

        const path   = d3.geoPath(projection);
        const isDark = matchMedia('(prefers-color-scheme:dark)').matches;

        svg.append('rect')
          .attr('width', W).attr('height', H)
          .attr('fill', isDark ? '#0f172a' : '#dbeafe')
          .attr('opacity', 0.4);

        svg.selectAll('.c').data(all.features).join('path')
          .attr('d', path)
          .attr('fill', d => +d.id === 12
            ? (isDark ? '#1e293b' : '#f1f5f9')
            : (isDark ? '#0f172a' : '#e2e8f0'))
          .attr('stroke', isDark ? 'rgba(255,255,255,.06)' : '#fff')
          .attr('stroke-width', 0.5);

        svg.append('path').datum(borders)
          .attr('d', path).attr('fill', 'none')
          .attr('stroke', isDark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.06)')
          .attr('stroke-width', 0.5);

        const maxR      = Math.min(18, W / 28);
        const labelSize = Math.max(8, Math.min(10, W / 52));
        const sizeScale = d3.scaleSqrt().domain([50, 1900]).range([4, maxR]);

        CITIES.forEach((city, i) => {
          const [x, y] = projection([city.lng, city.lat]);
          const r      = sizeScale(city.orders);
          const col    = TIER_COLORS[city.tier].dot;
          const ring   = TIER_COLORS[city.tier].ring;

          const g = svg.append('g').style('cursor', 'pointer');

          g.append('circle').attr('cx', x).attr('cy', y).attr('r', r + 3).attr('fill', ring);
          g.append('circle').attr('cx', x).attr('cy', y).attr('r', r).attr('fill', col).attr('opacity', 0.18);
          g.append('circle').attr('cx', x).attr('cy', y).attr('r', Math.max(2.5, r * 0.45)).attr('fill', col);

          if (r > 8) {
            g.append('text')
              .attr('x', x).attr('y', y - r - 4)
              .attr('text-anchor', 'middle')
              .attr('font-size', labelSize)
              .attr('font-weight', '500')
              .attr('fill', isDark ? '#e2e8f0' : '#1e293b')
              .text(city.name);
          }

          g.on('mouseenter', function (event) {
            setActive(i);
            const rect = wrapRef.current.getBoundingClientRect();
            setTooltip({
              x: event.clientX - rect.left + 12,
              y: event.clientY - rect.top  - 10,
              city,
            });
          }).on('mousemove', function (event) {
            const rect = wrapRef.current.getBoundingClientRect();
            setTooltip(t => t ? {
              ...t,
              x: event.clientX - rect.left + 12,
              y: event.clientY - rect.top  - 10,
            } : t);
          }).on('mouseleave', function () {
            setActive(null);
            setTooltip(null);
          });
        });
      });
    });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const cleanup = buildMap();
    return cleanup;
  }, [buildMap]);

  useEffect(() => {
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => buildMap(), 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, [buildMap]);

  const SidebarContent = () => (
    <>
      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 px-1">
        Régions actives
      </div>
      {/* Mobile: 2-col grid · Desktop: single scrollable column */}
      <div className={isMobile ? 'grid grid-cols-2 gap-1.5' : 'flex flex-col gap-1.5'}>
        {CITIES.map((city, i) => {
          const col = TIER_COLORS[city.tier];
          return (
            <div
              key={city.name}
              onMouseEnter={() => highlight(i)}
              onMouseLeave={() => highlight(null)}
              className={`rounded-xl p-2.5 border transition-all cursor-pointer
                ${active === i
                  ? 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'}
                ${active !== null && active !== i ? 'opacity-40' : ''}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black dark:text-white truncate pr-1">{city.name}</span>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full flex-shrink-0 ${col.badge}`}>
                  {city.rate}%
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-bold mb-1.5">
                {city.orders.toLocaleString()} cmd &middot; {city.delta}
              </div>
              <div className="h-[2px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${city.rate}%`, background: col.dot }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className={`w-full min-h-[400px] ${isMobile ? 'flex flex-col gap-3' : 'flex flex-row gap-4 h-full'}`}>

      {/* ── Desktop: sidebar LEFT ── Mobile: hidden here, shown below map ── */}
      {!isMobile && (
        <div className="w-48 flex-shrink-0 flex flex-col gap-1.5 overflow-y-auto pr-1">
          <SidebarContent />
        </div>
      )}

      {/* Map */}
      <div
        ref={wrapRef}
        className="relative flex-1 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
        style={isMobile ? { aspectRatio: '4/3', minHeight: 220 } : { minHeight: 400 }}
      >
        <svg ref={svgRef} className="w-full h-full block" />

        {tooltip && (
          <div
            className="absolute pointer-events-none z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-xl"
            style={{ left: tooltip.x, top: tooltip.y, maxWidth: 180 }}
          >
            <div className="text-sm font-black dark:text-white mb-0.5">{tooltip.city.name}</div>
            <div className="text-[11px] text-slate-400 font-bold">
              Taux: <span className="text-slate-700 dark:text-slate-200">{tooltip.city.rate}% ({tooltip.city.delta})</span>
            </div>
            <div className="text-[11px] text-slate-400 font-bold">
              Commandes: <span className="text-slate-700 dark:text-slate-200">{tooltip.city.orders.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-3 flex-wrap">
          {[
            { label: '≥70% confirmé', col: '#22c55e' },
            { label: '50–70%',        col: '#f59e0b' },
            { label: '<50%',          col: '#6366f1' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.col }} />
              <span className="text-[10px] font-bold text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <MapPin className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">
              58 Wilayas
            </span>
          </div>
        </div>
      </div>

      {/* ── Mobile only: sidebar BELOW map as 2-col grid ── */}
      {isMobile && (
        <div className="flex flex-col gap-1.5">
          <SidebarContent />
        </div>
      )}

    </div>
  );
};

export default MapUI;
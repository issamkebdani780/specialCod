import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PlayCircle, Rocket, ShieldCheck, Zap, Users, BarChart3, MapPin, Truck, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  

  const titleHtml = t('hero_title')
    .replace(/text-turquoise-400/g, 'text-primary');

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16`}>
          <div className={`flex-1 text-center lg:text-start`}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                <Zap className="w-3 h-3 fill-current" />
                {t('badge_new_version', 'NOUVELLE VERSION 2.0')}
              </div>
              
              <h1 
                className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-slate-900 dark:text-white ${isRTL ? 'font-arabic leading-[1.3]' : ''}`}
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />
              
              <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400`}>
                {t('hero_subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#register"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                >
                  <Rocket className={`w-5 h-5 ${isRTL ? 'rotate-[270deg]' : ''}`} />
                  {t('hero_cta_start')}
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo"
                  className={`w-full sm:w-auto px-8 py-4 border rounded-2xl flex items-center justify-center gap-2 transition-all font-bold bg-white border-slate-200 text-slate-900 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800`}
                >
                  <PlayCircle className="w-5 h-5 text-primary" />
                  {t('hero_cta_demo')}
                </motion.a>
              </div>

              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 dark:text-slate-500`}>
                <div className="flex items-center gap-2 group cursor-help">
                  <ShieldCheck className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_no_card')}</span>
                </div>
                <div className="flex items-center gap-2 group cursor-help">
                  <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_fast_setup')}</span>
                </div>
                <div className="flex items-center gap-2 group cursor-help">
                  <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_support')}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative px-4 sm:px-0"
            >
              <div className={`border rounded-[32px] p-6 shadow-2xl relative transition-all duration-500 hover:shadow-primary/10 group/card bg-white border-slate-100 shadow-slate-200/50 dark:bg-slate-900 dark:border-slate-800 dark:shadow-black/50`}>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <span className={`text-sm font-bold text-slate-700 dark:text-white/80`}>Dashboard Overview</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce [animation-delay:-0.1s]" />
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="border p-4 rounded-2xl transition-colors cursor-pointer bg-slate-50 border-slate-100 hover:bg-slate-200/50 dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <div className={`text-[10px] font-black uppercase mb-1 text-slate-400 dark:text-slate-500`}>{t('stat_confirm')}</div>
                    <div className="text-2xl font-black text-primary tracking-tight"><Counter target={74.2} duration={1.5} decimals={1} />%</div>
                    <div className="text-[10px] text-primary font-bold flex items-center gap-1">
                      <TrendingUpIcon className="w-3 h-3" />
                      +5.4%
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="border p-4 rounded-2xl transition-colors cursor-pointer bg-slate-50 border-slate-100 hover:bg-slate-200/50 dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <div className={`text-[10px] font-black uppercase mb-1 text-slate-400 dark:text-slate-500`}>{t('stat_returns')}</div>
                    <div className="text-2xl font-black text-rose-500 tracking-tight"><Counter target={18.5} duration={1.5} decimals={1} />%</div>
                    <div className="text-[10px] text-rose-500 font-bold flex items-center gap-1">
                      <TrendingDownIcon className="w-3 h-3" />
                      -2.1%
                    </div>
                  </motion.div>
                </div>

                <div className={`border p-6 rounded-2xl mb-2 transition-colors bg-slate-50 border-slate-100 dark:bg-slate-950 dark:border-slate-800`}>
                  <div className={`text-sm font-bold flex items-center justify-between mb-4 text-slate-700 dark:text-white/80`}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {t('stat_wilayas')}
                    </div>
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[10px] uppercase font-black text-emerald-500">Live</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Alger', count: 142, roi: '4.2x', progress: 85, color: 'bg-primary' },
                      { name: 'Oran', count: 89, roi: '3.8x', progress: 65, color: 'bg-blue-400' },
                      { name: 'Setif', count: 64, roi: '3.5x', progress: 50, color: 'bg-blue-300' },
                    ].map((w, idx) => (
                      <div key={w.name} className="space-y-1.5 group/item cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold transition-colors group-hover/item:text-primary text-slate-500 dark:text-slate-400`}>{w.name}</span>
                          <div className="flex items-center gap-4">
                            <span className={`text-xs font-black text-slate-700 dark:text-white/80`}>{w.count} cmds</span>
                            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md font-black">{w.roi}</span>
                          </div>
                        </div>
                        <div className={`h-1.5 w-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800`}>
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${w.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2) }}
                            className={`h-full ${w.color} rounded-full relative`}
                          >
                             <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Driver */}
                <motion.div 
                  animate={{ y: [0, -10, 0], x: isRTL ? 15 : -15 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, zIndex: 30 }}
                  className={`absolute top-1/3 p-4 rounded-2xl shadow-2xl border z-20 cursor-pointer transition-shadow hover:shadow-primary/30 bg-white border-slate-100 text-slate-900 shadow-slate-200/50 dark:bg-primary dark:border-white/20 dark:text-white dark:shadow-primary/40 ${
                    isRTL ? 'left-[-32px]' : 'right-[-32px]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 dark:bg-white/20 p-2 rounded-lg">
                      <Truck className={`w-4 h-4 text-primary dark:text-white`} />
                    </div>
                    <div className="whitespace-nowrap">
                      <div className="text-[10px] font-black uppercase opacity-70 tracking-wider">{t('stat_delivery')}</div>
                      <div className="text-sm font-black tracking-tight">Ahmed K. <span className="opacity-60 font-medium ml-1">(96%)</span></div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Orders */}
                <motion.div 
                  animate={{ y: [0, 10, 0], x: isRTL ? -15 : 15 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.1, zIndex: 30 }}
                  className={`absolute bottom-1/4 p-4 rounded-2xl shadow-2xl border z-20 cursor-pointer transition-shadow hover:shadow-black/20 bg-white border-slate-100 text-slate-900 shadow-slate-200/50 dark:bg-slate-800 dark:border-white/10 dark:text-white dark:shadow-black/40 ${
                    isRTL ? 'right-[-32px]' : 'left-[-32px]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="whitespace-nowrap">
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-wider">{t('stat_orders')}</div>
                      <div className="text-sm font-black tracking-tight"><Counter target={284} /> <span className="text-primary text-[10px] font-black ml-1">+12%</span></div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, duration = 2, decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    
    const timer = setInterval(() => {
      start += end / totalSteps;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>;
};

const TrendingUpIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendingDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
  </svg>
);

export default Hero;

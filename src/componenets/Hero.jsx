import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PlayCircle, Rocket, ShieldCheck, Zap, Users, BarChart3, MapPin, Truck, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Sync title text color based on theme
  const titleHtml = t('hero_title')
    .replace(/text-turquoise-400/g, 'text-primary')
    .replace(/text-white/g, theme === 'dark' ? 'text-white' : 'text-slate-900');

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16`}>
          
          {/* Left Content */}
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
                className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                } ${isRTL ? 'font-arabic leading-[1.3]' : ''}`}
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />
              
              <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t('hero_subtitle')}
              </p>

              {/* CTAs */}
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
                  className={`w-full sm:w-auto px-8 py-4 border rounded-2xl flex items-center justify-center gap-2 transition-all font-bold ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800' 
                      : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <PlayCircle className="w-5 h-5 text-primary" />
                  {t('hero_cta_demo')}
                </motion.a>
              </div>

              {/* Trust Badges */}
              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <div className="flex items-center gap-2 group">
                  <ShieldCheck className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_no_card')}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_fast_setup')}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{t('badge_support')}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="flex-1 w-full relative pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative px-4 sm:px-0"
            >
              {/* Main Card */}
              <div className={`border rounded-[32px] p-6 shadow-2xl relative transition-colors duration-500 ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-800 shadow-black/50' 
                  : 'bg-white border-slate-100 shadow-slate-200/50'
              }`}>
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>Dashboard Overview</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`border p-4 rounded-2xl ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className={`text-[10px] font-black uppercase mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('stat_confirm')}</div>
                    <div className="text-2xl font-black text-primary tracking-tight">74.2%</div>
                    <div className="text-[10px] text-primary font-bold">+5.4%</div>
                  </div>
                  <div className={`border p-4 rounded-2xl ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className={`text-[10px] font-black uppercase mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('stat_returns')}</div>
                    <div className="text-2xl font-black text-rose-500 tracking-tight">18.5%</div>
                    <div className="text-[10px] text-rose-500 font-bold">-2.1%</div>
                  </div>
                </div>

                {/* Wilayas list */}
                <div className={`border p-6 rounded-2xl mb-2 ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className={`text-sm font-bold flex items-center gap-2 mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
                    <MapPin className="w-4 h-4 text-primary" />
                    {t('stat_wilayas')}
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Alger', count: 142, roi: '4.2x', progress: 85 },
                      { name: 'Oran', count: 89, roi: '3.8x', progress: 65 },
                      { name: 'Setif', count: 64, roi: '3.5x', progress: 50 },
                    ].map((w) => (
                      <div key={w.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{w.name}</span>
                          <div className="flex items-center gap-4">
                            <span className={`text-xs font-black ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>{w.count} cmds</span>
                            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md font-black">{w.roi}</span>
                          </div>
                        </div>
                        <div className={`h-1 w-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}>
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${w.progress}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0], x: isRTL ? 15 : -15 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-1/3 p-4 rounded-2xl shadow-2xl border z-20 ${
                    isRTL ? 'left-[-32px]' : 'right-[-32px]'
                  } ${
                    theme === 'dark' 
                      ? 'bg-primary border-white/20 text-white shadow-primary/40' 
                      : 'bg-white border-slate-100 text-slate-900 shadow-slate-200/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 dark:bg-white/20 bg-primary/10 p-2 rounded-lg">
                      <Truck className={`w-4 h-4 ${theme === 'dark' ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div className="whitespace-nowrap">
                      <div className="text-[10px] font-black uppercase opacity-70 tracking-wider">{t('stat_delivery')}</div>
                      <div className="text-sm font-black tracking-tight">Ahmed K. <span className="opacity-60 font-medium ml-1">(96%)</span></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0], x: isRTL ? -15 : 15 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className={`absolute bottom-1/4 p-4 rounded-2xl shadow-2xl border z-20 ${
                    isRTL ? 'right-[-32px]' : 'left-[-32px]'
                  } ${
                    theme === 'dark' 
                      ? 'bg-slate-800 border-white/10 text-white shadow-black/40' 
                      : 'bg-white border-slate-100 text-slate-900 shadow-slate-200/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="whitespace-nowrap">
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-wider">{t('stat_orders')}</div>
                      <div className="text-sm font-black tracking-tight">284 <span className="text-primary text-[10px] font-black ml-1">+12%</span></div>
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

export default Hero;

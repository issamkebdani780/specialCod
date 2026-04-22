import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Moon, Sun, TrendingUp } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: t('nav_features'), href: '#features' },
    { name: t('nav_results'), href: '#results' },
    { name: t('nav_pricing'), href: '#pricing' },
    { name: t('nav_faq'), href: '#faq' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
        <div className={`container mx-auto max-w-7xl px-4 lg:px-6 py-3 rounded-[24px] border transition-all duration-300 flex items-center justify-between ${
          theme === 'dark' 
            ? 'bg-slate-950 border-white/10 shadow-black/20' 
            : 'bg-white border-slate-100 shadow-slate-200/50'
        } ${isScrolled ? 'shadow-lg translate-y-[-4px]' : ''}`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/ecosystem/risemanger.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className={`text-xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Rise<span className="text-primary">Manager</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all active:scale-95 ${
                theme === 'dark' ? 'bg-slate-900 border-white/10 text-amber-400' : 'bg-slate-50 border-slate-200 text-primary'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 animate-spin-slow" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:block relative group">
              <button className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full transition-all ${
                theme === 'dark' ? 'bg-slate-900 border-white/10 text-white/70' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                <span className="text-[10px] font-black text-primary">{i18n.language.toUpperCase().substring(0, 2)}</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className={`border shadow-xl rounded-2xl py-2 flex flex-col min-w-[120px] ${
                  theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-100'
                }`}>
                  {['fr', 'en', 'ar'].map((code) => (
                    <button
                      key={code}
                      onClick={() => i18n.changeLanguage(code)}
                      className={`px-4 py-2 text-xs font-bold text-left rtl:text-right transition-colors ${
                        i18n.language === code ? 'text-primary' : theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-primary'
                      }`}
                    >
                      {code === 'ar' ? 'العربية' : code === 'fr' ? 'Français' : 'English'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="#register" className="hidden sm:flex px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-black rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all">
              {t('cta_free_trial')}
            </a>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-transform active:scale-90 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            >
              <div className="flex flex-col gap-1.5 border-l rtl:border-l-0 rtl:border-r pl-3 rtl:pl-0 rtl:pr-3 border-slate-200 dark:border-white/10">
                <div className="w-6 h-0.5 bg-current rounded-full" />
                <div className="w-4 h-0.5 bg-current rounded-full self-end" />
                <div className="w-5 h-0.5 bg-current rounded-full self-end" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal - Risemanager Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-sm rounded-[32px] p-8 shadow-2xl border text-center ${
                theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-100'
              }`}
            >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full bg-slate-100 dark:bg-slate-900"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="flex flex-col items-center gap-3 mb-10">
                <img src="/ecosystem/risemanger.png" alt="Logo" className="w-16 h-16 object-contain mb-2" />
                <span className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>RiseManager</span>
              </div>

              <nav className="flex flex-col gap-6 mb-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-bold transition-colors ${
                      theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3">
                <div className={`flex flex-col gap-2 p-2 rounded-2xl border ${
                  theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-100'
                }`}>
                  {['fr', 'en', 'ar'].map(code => (
                    <button 
                      key={code}
                      onClick={() => i18n.changeLanguage(code)}
                      className={`py-2.5 text-xs font-bold rounded-xl transition-colors ${
                        i18n.language === code ? 'bg-primary text-white' : theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {code === 'ar' ? 'العربية' : code === 'fr' ? 'Français' : 'English'}
                    </button>
                  ))}
                </div>
                <a href="#register" className="w-full py-4 bg-primary text-white text-center font-black rounded-2xl shadow-xl shadow-primary/20">
                  {t('cta_free_trial')}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
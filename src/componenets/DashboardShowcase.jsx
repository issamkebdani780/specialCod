import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, CheckCircle, Truck, TrendingUp, Map } from 'lucide-react';

const DashboardShowcase = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'orders', name: t('tab_orders'), icon: ShoppingBag },
    { id: 'confirm', name: t('tab_confirm'), icon: CheckCircle },
    { id: 'delivery', name: t('tab_delivery'), icon: Truck },
    { id: 'profit', name: t('tab_profit'), icon: TrendingUp },
    { id: 'map', name: t('tab_map'), icon: Map },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900 leading-tight">
            {t('showcase_title')}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black transition-all ${
                activeTab === index 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 rounded-[48px] dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl relative overflow-hidden"
            >
              {/* Fake UI Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-8 border-b dark:border-white/5 border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      {React.createElement(tabs[activeTab].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-black dark:text-white text-slate-900">{tabs[activeTab].name}</h4>
                      <p className="text-sm dark:text-slate-500 text-slate-400">Real-time data visualization</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[300px] content-center">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 dark:bg-white/5 bg-slate-50 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 60 + 20}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-primary/40 rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-[12px] dark:border-white/5 border-slate-50 flex items-center justify-center relative">
                      <div className="text-4xl font-black text-primary">74%</div>
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="96" cy="96" r="84" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="527" strokeDashoffset="137" className="text-primary" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorative */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;

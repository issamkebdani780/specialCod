import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, CheckCircle, Truck, TrendingUp, Map as MapIcon, MoreHorizontal, User, MapPin } from 'lucide-react';
import MapUI from './Mapui';

const DashboardShowcase = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'orders', name: t('tab_orders'), icon: ShoppingBag },
    { id: 'confirm', name: t('tab_confirm'), icon: CheckCircle },
    { id: 'delivery', name: t('tab_delivery'), icon: Truck },
    { id: 'profit', name: t('tab_profit'), icon: TrendingUp },
    { id: 'map', name: t('tab_map'), icon: MapIcon },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900 leading-tight">
            {t('showcase_title')}
          </h2>
        </div>

        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-2 mb-12 pb-4 px-6 -mx-6 md:px-0 md:mx-0 snap-x">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 snap-center flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded-full font-black transition-all ${activeTab === index
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 md:scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-6 md:p-10 rounded-[48px] dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pb-6 border-b dark:border-white/5 border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      {React.createElement(tabs[activeTab].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-black dark:text-white text-slate-900">{tabs[activeTab].name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Live System</p>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="flex-1 overflow-hidden">
                  {activeTab === 0 && <OrdersUI />}
                  {activeTab === 1 && <ConfirmationUI />}
                  {activeTab === 2 && <DeliveryUI />}
                  {activeTab === 3 && <ProfitabilityUI />}
                  {activeTab === 4 && <MapUI />}
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// UI Components
const OrdersUI = () => (
  <div className="space-y-4">
    {[1, 2, 3, 4].map(i => (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1 }}
        key={i}
        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-sm font-black dark:text-white">Client #00{i * 12}</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Alger, Birkhadem</div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-xs font-black dark:text-white">4,200 DA</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Cuisine & Maison</div>
          </div>
          <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest">En attente</div>
        </div>
      </motion.div>
    ))}
  </div>
);

const ConfirmationUI = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
    <div className="space-y-6">
      {[
        { label: 'Total Appels', value: '452', color: 'bg-primary' },
        { label: 'Confirmé', value: '312', color: 'bg-emerald-500' },
        { label: 'Annulé', value: '48', color: 'bg-rose-500' },
      ].map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-xs font-black uppercase tracking-wider text-slate-400">
            <span>{item.label}</span>
            <span className="text-primary">{item.value}</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.random() * 50 + 40}%` }}
              className={`h-full ${item.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center relative">
      <svg className="w-48 h-48 -rotate-90">
        <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100 dark:text-slate-800" />
        <motion.circle
          initial={{ strokeDashoffset: 502 }}
          animate={{ strokeDashoffset: 150 }}
          transition={{ duration: 1.5 }}
          cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="502" className="text-primary" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-black dark:text-white">74%</span>
        <span className="text-[10px] font-black uppercase text-slate-400">Taux Global</span>
      </div>
    </div>
  </div>
);

const DeliveryUI = () => (
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: 'Kamel Express', status: 'En route', count: 24, color: 'emerald' },
      { name: 'Yassir Pro', status: 'Dépôt', count: 18, color: 'amber' },
      { name: 'Zaki Delivery', status: 'En route', count: 32, color: 'emerald' },
      { name: 'Amine Trans', status: 'Chargement', count: 12, color: 'blue' },
    ].map((driver, i) => (
      <div key={i} className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <Truck className="w-4 h-4 text-slate-500" />
          </div>
          <span className={`text-[10px] font-black uppercase text-${driver.color}-500`}>{driver.status}</span>
        </div>
        <div className="text-sm font-black dark:text-white mb-1">{driver.name}</div>
        <div className="text-xs text-slate-400 font-bold">{driver.count} colis scannés</div>
      </div>
    ))}
  </div>
);

const ProfitabilityUI = () => (
  <div className="h-full flex flex-col">
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="text-center">
        <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Chiffre d'affaires</div>
        <div className="text-xl font-black text-primary">850,000 DA</div>
      </div>
      <div className="text-center">
        <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Dépenses Pub</div>
        <div className="text-xl font-black text-rose-500">120,000 DA</div>
      </div>
      <div className="text-center">
        <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Bénéfice Net</div>
        <div className="text-xl font-black text-emerald-500">420,000 DA</div>
      </div>
    </div>
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 relative p-4 flex items-end">
      <div className="absolute inset-0 p-4 flex items-end justify-between">
        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.1 }}
            className="w-[10%] bg-primary/20 rounded-t-lg relative group cursor-pointer"
          >
            <div className="absolute inset-x-0 bottom-0 bg-primary h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default DashboardShowcase;

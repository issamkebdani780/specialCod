import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Banknote, PhoneOff, MapPinOff, Truck, BarChart2, Zap } from 'lucide-react';
import MapUI from './Mapui';

const LocalReality = () => {
  const { t } = useTranslation();

  const realities = [
    { text: t('local_1'), icon: Banknote },
    { text: t('local_2'), icon: PhoneOff },
    { text: t('local_3'), icon: MapPinOff },
    { text: t('local_4'), icon: Truck },
    { text: t('local_5'), icon: BarChart2 },
    { text: t('local_6'), icon: Zap },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-black mb-8 dark:text-white text-slate-900 leading-tight"
            >
              {t('local_title')}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {realities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold dark:text-white text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              className="relative rounded-[48px] overflow-hidden shadow-2xl border-8 dark:border-slate-800 border-white h-[500px]"
            >
              <div className="h-full w-full dark:bg-slate-950 bg-slate-100 p-4">
                <MapUI />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalReality;

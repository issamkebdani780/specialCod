import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Banknote, PhoneOff, MapPinOff, Truck, BarChart2, Zap, MapPin } from 'lucide-react';

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
                  <span className="font-bold dark:text-white/80 text-slate-700">{item.text}</span>
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
              <div className="aspect-square h-full w-full flex items-center justify-center dark:bg-slate-950 bg-slate-100 relative p-12 overflow-hidden">
                {/* Detailed SVG Map of Algeria */}
                <AlgeriaMap className="w-full h-full text-slate-200 dark:text-slate-800 transition-colors duration-500" />

                {/* Animated Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

                {/* Floating Pins with pulses */}
                <div className="absolute top-[20%] left-[65%]">
                  <MapPinPulse color="text-primary" delay={0} />
                </div>
                <div className="absolute top-[28%] left-[45%]">
                  <MapPinPulse color="text-blue-400" delay={1} size="w-6 h-6" />
                </div>
                <div className="absolute top-[35%] left-[75%]">
                  <MapPinPulse color="text-indigo-400" delay={2} size="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AlgeriaMap = ({ className }) => (
  <svg className={className} viewBox="0 0 500 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M358.5,108.5c-5.7-2.3-12.3-2.3-18.4,0c-4.1,1.5-7.1,5.3-9.5,9.1c-2.4,3.8-4.5,7.8-7.1,11.5c-3.1,4.5-7.1,8.3-11.8,11.1 c-4.7,2.8-10.1,4.4-15.6,4.4c-5.4,0-10.8-1.5-15.6-4.4c-4.8-2.8-8.8-6.7-11.9-11.2c-3.1-4.5-5.3-9.6-6.6-14.8 c-1.3-5.2-1.6-10.7-0.7-16.1c0.9-5.4,2.8-10.5,5.6-15.1c2.8-4.6,6.5-8.5,10.8-11.5c4.3-3,9.2-5,14.3-5.9c5.1-0.9,10.4-0.6,15.6,0.9 c5.2,1.5,10.1,4,14.4,7.4c4.3,3.4,7.8,7.7,10.3,12.6c2.5,4.9,4,10.2,4.3,15.6c0.3,5.4-0.4,10.9-2.1,16.1c-1.7,5.2-4.4,10-7.8,14.3 c-3.4,4.2-7.5,7.7-12.3,10.3c-4.7,2.5-10,4.1-15.4,4.5c-5.4,0.4-10.8-0.2-16-1.9c-5.2-1.7-9.9-4.3-14-7.8c-4.1-3.5-7.4-7.8-9.8-12.6 c-2.4-4.8-3.8-10.1-4.2-15.4c-0.4-5.4,0.1-10.8,1.7-16c1.6-5.2,4.1-10.1,7.4-14.4c3.3-4.3,7.4-7.9,12.1-10.5 c4.7-2.6,9.9-4.3,15.2-4.9c5.3-0.6,10.7-0.1,15.9,1.4c5.2,1.5,10.1,4,14.3,7.3c4.2,3.3,7.6,7.4,10.1,12.2c2.5,4.8,3.9,10,4.2,15.3 c0.3,5.3-0.5,10.7-2.1,15.8c-1.6,5.1-4.2,9.9-7.5,14.1c-3.3,4.2-7.4,7.7-12,10.2c-4.6,2.5-9.8,4.1-15.1,4.5c-5.3,0.4-10.7-0.1-15.8-1.7 c-5.2-1.6-9.9-4.2-14-7.6c-4.1-3.4-7.4-7.6-9.7-12.3c-2.3-4.7-3.7-9.8-4.1-15.1c-0.4-5.2,0-10.6,1.5-15.7 c1.5-5.1,4-9.9,7.2-14.1c3.2-4.2,7.2-7.7,11.8-10.3c4.6-2.5,9.6-4.1,14.8-4.6c5.2-0.5,10.5-0.1,15.6,1.2c5.1,1.3,9.9,3.6,14.1,6.8 c4.2,3.2,7.6,7.2,10.1,11.8c2.5,4.6,3.9,9.7,4.3,14.9c0.4,5.2-0.4,10.5-2,15.5 c-1.6,5-4.1,9.7-7.3,13.8 c-3.2,4.1-7.1,7.5-11.6,10 c-4.5,2.5-9.4,4-14.5,4.4 c-5.1,0.4-10.3-0.2-15.3-1.6 c-5-1.4-9.6-3.8-13.6-7 c-4-3.2-7.3-7.2-9.6-11.7 c-2.3-4.5-3.7-9.4-4.1-14.5 c-0.4-5.1-0.1-10.3,1.3-15.3 c1.4-5,3.7-9.7,6.8-13.8 c3.1-4.1,7-7.5,11.4-10 c4.4-2.5,9.2-4,14.2-4.5 c5-0.5,10.1-0.2,15,1.1 c4.9,1.3,9.5,3.5,13.6,6.6 c4.1,3.1,7.4,6.9,9.8,11.3 c2.4,4.4,3.9,9.3,4.4,14.3 c0.5,5-0.2,10.1-1.7,14.9 c-1.5,4.8-3.9,9.3-7,13.3 c-3.1,4-6.8,7.3-11.1,9.8 c-4.3,2.5-9,3.9-13.9,4.4 c-4.9,0.5-9.9,0-14.7-1.4 c-4.8-1.4-9.2-3.7-13.1-6.8 c-3.9-3.1-7.1-6.8-9.4-11 c-2.3-4.2-3.8-8.9-4.4-13.8 c-0.6-4.9-0.3-9.8,0.9-14.6 c1.2-4.8,3.4-9.3,6.3-13.3 c2.9-4,6.5-7.4,10.7-9.9 c4.2-2.5,8.8-4.1,13.6-4.7 c4.8-0.6,9.7-0.3,14.4,0.9 c4.7,1.2,9.1,3.3,13,6.3 c3.9,3,7,6.7,9.3,10.9 c2.3,4.2,3.8,8.8,4.5,13.5 c0.7,4.7,0.4,9.5-0.7,14.2 c-1.1,4.7-3.1,9.1-5.9,13.1 c-2.8,4-6.3,7.4-10.3,10 c-4.1,2.6-8.6,4.3-13.3,5.1 c-4.7,0.8-9.6,0.6-14.3-0.4 c-4.7-1-9.2-3-13.1-5.8 c-3.9-2.8-7.3-6.4-9.7-10.5 c-2.4-4.1-4.1-8.6-4.9-13.3 c-0.8-4.7-0.7-9.5,0.2-14.2 c0.9-4.7,2.7-9.2,5.3-13.3 c2.6-4.1,5.9-7.7,9.8-10.5 c3.9-2.8,8.3-4.8,13-5.9 c4.7-1.1,9.6-1.3,14.4-0.6 c4.8,0.7,9.5,2.2,13.7,4.7 c4.2,2.5,7.9,5.7,10.9,9.6 c3,3.9,5.3,8.4,6.8,13.2 c1.5,4.8,2.1,9.8,2,14.8 c-0.1,5-1.1,10-2.8,14.7 c-1.7,4.7-4.2,9.2-7.4,13.1 c-3.2,3.9-7,7.2-11.4,9.7 c-4.4,2.5-9.2,4.1-14.1,4.9 c-4.9,0.8-10,0.7-14.9-0.2 c-4.9-0.9-9.6-2.7-13.8-5.3 c-4.2-2.6-7.8-5.9-10.7-9.9 c-2.9-4-5.1-8.5-6.4-13.4 c-1.3-4.9-1.8-10-1.5-15 c0.3-5,1.5-10,3.5-14.6 c2-4.6,4.8-8.9,8.4-12.6 c3.6-3.7,7.9-6.8,12.7-9 c4.8-2.2,10-3.6,15.3-4.1 c5.3-0.5,10.7-0.1,16,1.2 c5.3,1.3,10.3,3.5,14.9,6.7 c4.6,3.2,8.6,7.2,11.7,11.9 c3.1,4.7,5.4,10,6.7,15.5 c1.3,5.5,1.7,11.2,1,16.8 c-0.7,5.6-2.3,11.1-4.8,16.2 c-2.5,5.1-5.9,9.8-10.1,13.8 c-4.2,4-9.1,7.2-14.5,9.6 c-5.4,2.4-11.2,3.8-17.1,4.3 c-5.9,0.5-11.9-0.1-17.7-1.7 c-5.8-1.6-11.3-4.2-16.3-7.7 c-5-3.5-9.4-7.9-12.9-13 c-3.5-5.1-6.1-10.8-7.7-16.8 c-1.6-6-2.2-12.3-1.8-18.6 c0.4-6.3,1.8-12.5,4.1-18.4 c2.3-5.9,5.5-11.5,9.6-16.5 c4.1-5,8.9-9.3,14.5-12.7 c5.6-3.4,11.8-5.8,18.4-7.2 c6.6-1.4,13.5-1.9,20.4-1.3 c6.9,0.6,13.7,2.2,20.1,4.9 c6.4,2.7,12.4,6.4,17.7,10.9 c5.3,4.5,9.9,9.9,13.5,15.9 c3.6,6,6.3,12.7,8,19.8 c1.7,7.1,2.4,14.5,2,21.9 c-0.4,7.4-1.8,14.8-4.1,21.9 c-2.3,7.1-5.6,13.9-9.8,20.2 c-4.2,6.3-9.3,12.1-15.1,17.2 c-5.8,5.1-12.3,9.5-19.4,13.1 c-7.1,3.6-14.7,6.3-22.7,8.2 c-8,1.9-16.4,2.9-24.9,3 c-8.5,0.1-17.1-0.7-25.5-2.5 c-8.4-1.8-16.6-4.5-24.5-8.1 c-7.9-3.6-15.3-8.1-22-13.4 c-6.7-5.3-12.6-11.5-17.7-18.4 c-5.1-6.9-9.3-14.5-12.4-22.7 c-3.1-8.2-5.3-16.9-6.3-25.9c-1-9-0.8-18.2,0.6-27.3" fill="currentColor" opacity="0.8" />
    {/* Northern parts silhouette (simplified but accurate) */}
    <path d="M120,40 L150,35 L180,32 L220,35 L260,30 L290,35 L330,45 L360,60 L380,85 L370,120 L350,160 L320,200 L280,250 L240,300 L200,380 L160,320 L130,250 L110,180 L105,120 L110,80 Z" />
  </svg>
);

const MapPinPulse = ({ color = "text-primary", delay = 0, size = "w-8 h-8" }) => (
  <div className="relative group cursor-pointer">
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      className={`absolute inset-0 rounded-full bg-current ${color}`}
    />
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className={`relative z-10 ${color} drop-shadow-xl`}
    >
      <MapPin className={size} />
    </motion.div>
  </div>
);

export default LocalReality;

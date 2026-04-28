import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Rocket, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    { name: t('price_starter'), desc: t('price_starter_desc'), price: '29', icon: Zap, popular: false },
    { name: t('price_growth'), desc: t('price_growth_desc'), price: '79', icon: Rocket, popular: true },
    { name: t('price_empire'), desc: t('price_empire_desc'), price: '199', icon: Shield, popular: false },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900">
            {t('pricing_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[48px] border relative flex flex-col ${
                plan.popular 
                  ? 'dark:bg-slate-900 bg-white border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                  : 'dark:bg-slate-900/50 bg-slate-50 border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  {t('price_popular')}
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black dark:text-white text-slate-900">{plan.name}</h3>
                  <p className="text-sm dark:text-slate-400 text-slate-500 font-bold">{plan.desc}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black dark:text-white text-slate-900">${plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">{t('price_month')}</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm dark:text-slate-300 text-slate-600 font-bold">{t('price_feature')}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black transition-all ${
                plan.popular 
                  ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30' 
                  : 'bg-slate-200 dark:bg-slate-800 dark:text-white text-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}>
                {t('price_cta')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

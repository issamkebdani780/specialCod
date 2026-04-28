import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AlertCircle, ArrowRight } from 'lucide-react';

const PainPoints = () => {
  const { t } = useTranslation();

  const points = [
    t('pain_item_1'),
    t('pain_item_2'),
    t('pain_item_3'),
    t('pain_item_4')
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900 leading-tight">
            {t('pain_title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 group transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all text-rose-500">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-lg font-bold dark:text-white text-slate-700 leading-snug">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#solution"
            className="inline-flex items-center gap-2 text-primary font-black text-lg hover:gap-4 transition-all"
          >
            {t('pain_cta')}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;

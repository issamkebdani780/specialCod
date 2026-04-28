import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    { text: t('testi_1'), author: 'Sami B.', role: 'E-com Manager' },
    { text: t('testi_2'), author: 'Karim L.', role: 'Founder' },
    { text: t('testi_3'), author: 'Amel D.', role: 'Operations' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900">
            {t('testi_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-100 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl font-bold dark:text-white text-slate-900 mb-8 leading-relaxed">
                {rev.text}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t dark:border-white/5 border-slate-100">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm">
                  {rev.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-black dark:text-white text-slate-900">{rev.author}</div>
                  <div className="text-xs dark:text-slate-400 text-slate-400">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

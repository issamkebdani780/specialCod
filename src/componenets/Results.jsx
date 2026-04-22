import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Package, Clock, Users, DollarSign, Zap } from 'lucide-react';

const Results = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t('results_card_1'), icon: CheckCircle2, color: 'text-emerald-500' },
    { title: t('results_card_2'), icon: Package, color: 'text-rose-500' },
    { title: t('results_card_3'), icon: Clock, color: 'text-amber-500' },
    { title: t('results_card_4'), icon: Users, color: 'text-primary' },
    { title: t('results_card_5'), icon: DollarSign, color: 'text-emerald-400' },
    { title: t('results_card_6'), icon: Zap, color: 'text-primary' },
  ];

  return (
    <section id="results" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900 leading-tight">
            {t('results_title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-100 flex items-start gap-6 shadow-xl shadow-black/5"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center shrink-0 ${card.color}`}>
                <card.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-black dark:text-white text-slate-900 mb-2">{card.title}</h3>
                <div className="text-3xl font-black text-primary flex items-baseline gap-1">
                  <Counter target={Math.floor(Math.random() * 30) + 70} />
                  <span className="text-lg">%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, duration / end);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

export default Results;

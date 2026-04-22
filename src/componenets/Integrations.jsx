import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, FileText, Share2, Layers, ShoppingCart, CheckCircle2, Globe } from 'lucide-react';

const Integrations = () => {
  const { t } = useTranslation();

  const partners = [
    { name: 'Meta Ads', icon: Globe, color: 'text-blue-600' },
    { name: 'TikTok Ads', icon: Share2, color: 'text-rose-500' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-emerald-500' },
    { name: 'Google Sheets', icon: FileText, color: 'text-green-600' },
    { name: 'API Transport', icon: Layers, color: 'text-primary' },
    { name: 'RiseConfirm', icon: CheckCircle2, color: 'text-primary' },
    { name: 'RiseCart', icon: ShoppingCart, color: 'text-primary' },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900">
            {t('integ_title')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {partners.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className={`w-20 h-20 rounded-[24px] dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-100 flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all ${p.color}`}>
                <p.icon className="w-10 h-10" />
              </div>
              <span className="text-sm font-black dark:text-slate-400 text-slate-500">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;

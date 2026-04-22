import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, User, Phone, Globe, ShoppingCart, Store, MessageSquare } from 'lucide-react';

const LeadForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    orders: '',
    store: '',
    need: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    alert('Merci ! Nous vous contacterons bientôt.');
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black mb-6 dark:text-white text-slate-900 leading-tight"
            >
              {t('lead_form_title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg dark:text-slate-400 text-slate-500"
            >
              {t('lead_form_subtitle')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 rounded-[48px] dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-100 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_name')}</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_phone')}</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="tel" 
                    required
                    placeholder="+213 5XX XX XX XX"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_country')}</label>
                <div className="relative group">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <select 
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium appearance-none"
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    <option value="">{t('select_country', 'Choisir...')}</option>
                    <option value="DZ">Algeria</option>
                    <option value="MA">Morocco</option>
                    <option value="TN">Tunisia</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="SN">Senegal</option>
                    <option value="OTHER">Autre</option>
                  </select>
                </div>
              </div>

              {/* Orders */}
              <div className="space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_orders')}</label>
                <div className="relative group">
                  <ShoppingCart className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="number" 
                    placeholder="0 - 5000"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium"
                    onChange={(e) => setFormData({...formData, orders: e.target.value})}
                  />
                </div>
              </div>

              {/* Store */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_store')}</label>
                <div className="relative group">
                  <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Shopify, WooCommerce, Custom..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium"
                    onChange={(e) => setFormData({...formData, store: e.target.value})}
                  />
                </div>
              </div>

              {/* Need */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm font-black dark:text-white/70 text-slate-600 px-1">{t('field_need')}</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <textarea 
                    rows="3"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-100 dark:text-white text-slate-900 outline-none focus:border-primary transition-all font-medium resize-none"
                    onChange={(e) => setFormData({...formData, need: e.target.value})}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-primary hover:bg-primary-hover text-white font-black rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transition-all"
                >
                  <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  {t('cta_receive_demo')}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

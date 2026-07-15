import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialIcons = [
    { name: 'Facebook', path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { name: 'Instagram', path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
    { name: 'Twitter', path: "M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.598 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" },
  ];

  return (
    <footer className="py-20 border-t dark:border-white/5 border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/ecosystem/risemanger.png" alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-2xl font-black dark:text-white text-slate-900">
                Rise<span className="text-primary">Manager</span>
              </span>
            </Link>
            <p className="max-w-xs dark:text-slate-500 text-slate-500 text-sm font-bold leading-relaxed mb-8">
              {t('footer_tagline')}
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full dark:bg-white/5 bg-slate-50 flex items-center justify-center dark:text-white/40 text-slate-400 hover:text-primary transition-colors border border-transparent hover:border-primary/20">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-black dark:text-white text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer_legal_title')}</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm dark:text-slate-500 text-slate-500 hover:text-primary transition-colors font-bold">{t('footer_legals')}</a></li>
              <li><a href="#" className="text-sm dark:text-slate-500 text-slate-500 hover:text-primary transition-colors font-bold">{t('footer_cgv')}</a></li>
              <li><a href="#" className="text-sm dark:text-slate-500 text-slate-500 hover:text-primary transition-colors font-bold">{t('footer_privacy')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black dark:text-white text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer_contact_title')}</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm dark:text-slate-500 text-slate-500 hover:text-primary transition-colors font-bold flex items-center gap-2"><Mail className="w-4 h-4" /> {t('footer_contact')}</a></li>
              <li className="text-sm dark:text-slate-500 text-slate-500 font-bold flex items-center gap-2"><Phone className="w-4 h-4" /> 0665584456</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-white/5 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs dark:text-slate-600 text-slate-400 font-bold">
            © 2026 RiseManager. {t('footer_eco')}
          </p>
          <div className="flex gap-8">
             <span className="text-xs dark:text-slate-600 text-slate-400 font-black uppercase tracking-tighter">Algeria</span>
             <span className="text-xs dark:text-slate-600 text-slate-400 font-black uppercase tracking-tighter">Morocco</span>
             <span className="text-xs dark:text-slate-600 text-slate-400 font-black uppercase tracking-tighter">Senegal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

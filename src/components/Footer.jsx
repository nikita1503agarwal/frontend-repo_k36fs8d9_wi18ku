import React from 'react';
import { useLang } from './LanguageProvider';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="relative py-10 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <div className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400">FLUXY</div>
            <div className="text-white/70 mt-2">{t('footer_made')} 🇧🇷 | {t('footer_for')}</div>
            <div className="text-white/50 mt-1">{t('footer_payments')}</div>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <Facebook className="hover:text-white" />
            <Instagram className="hover:text-white" />
            <Linkedin className="hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

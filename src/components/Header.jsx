import React from 'react';
import { useLang } from './LanguageProvider';
import { Globe, Menu } from 'lucide-react';

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);

  const nav = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_services', href: '#services' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_pricing', href: '#pricing' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400">FLUXY</a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(item => (
              <a key={item.key} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">{t(item.key)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="flex items-center gap-2 text-white/80 hover:text-white px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Globe size={16} /> {lang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
            </button>
            <a href="#pricing" className="hidden sm:inline-flex bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold px-4 py-2 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition-all">
              {t('cta_trial')}
            </a>
            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}><Menu /></button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {nav.map(item => (
            <a key={item.key} href={item.href} className="block text-white/80 hover:text-white">{t(item.key)}</a>
          ))}
        </div>
      )}
    </header>
  );
}

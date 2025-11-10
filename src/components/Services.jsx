import React from 'react';
import { useLang } from './LanguageProvider';
import { MessageCircle, PhoneCall, Mail, Rocket } from 'lucide-react';

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:via-fuchsia-500/20 transition-all duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-4">
          <Icon className="text-black" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLang();
  const items = [
    { icon: MessageCircle, title: t('s_whatsapp_title'), desc: t('s_whatsapp_desc') },
    { icon: PhoneCall, title: t('s_calls_title'), desc: t('s_calls_desc') },
    { icon: Mail, title: t('s_email_title'), desc: t('s_email_desc') },
    { icon: Rocket, title: t('s_future_title'), desc: t('s_future_desc') },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">{t('services_title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <ServiceCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

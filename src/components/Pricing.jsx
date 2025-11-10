import React from 'react';
import { useLang } from './LanguageProvider';

function Card({ title, price, popular, benefits }) {
  return (
    <div className={`relative rounded-3xl p-6 bg-white/5 border ${popular ? 'border-cyan-400' : 'border-white/10'} backdrop-blur-xl hover:scale-[1.02] transition-transform`}> 
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-cyan-400 text-black font-semibold">MAIS POPULAR</span>
      )}
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{price}</div>
      <ul className="mt-4 space-y-2 text-white/75">
        {benefits.map((b, i) => (<li key={i}>• {b}</li>))}
      </ul>
      <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold">Escolher Plano</button>
    </div>
  );
}

export default function Pricing() {
  const { t, lang } = useLang();

  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">{t('pricing_title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card 
            title={`${t('plan_starter')} - R$149/${t('per_month')}`} 
            price="R$149" 
            benefits={t('starter_benefits')} 
          />
          <Card 
            title={`${t('plan_pro')} - R$299/${t('per_month')}`} 
            price="R$299" 
            benefits={t('pro_benefits')} 
            popular
          />
          <Card 
            title={`${t('plan_enterprise')} - R$499/${t('per_month')}`} 
            price="R$499" 
            benefits={t('ent_benefits')} 
          />
        </div>
      </div>
    </section>
  );
}

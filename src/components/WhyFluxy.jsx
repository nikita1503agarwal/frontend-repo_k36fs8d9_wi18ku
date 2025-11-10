import React from 'react';
import { useLang } from './LanguageProvider';

export default function WhyFluxy() {
  const { t } = useLang();
  const bullets = [t('why_1'), t('why_2'), t('why_3'), t('why_4'), t('why_5')];

  return (
    <section id="about" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-white mb-6">{t('why_title')}</h2>
          <ul className="space-y-3 text-white/80">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

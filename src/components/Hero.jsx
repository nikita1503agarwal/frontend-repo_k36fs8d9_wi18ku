import React from 'react';
import Spline from '@splinetool/react-spline';
import { useLang } from './LanguageProvider';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
              {t('hero_title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('hero_sub')}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">{t('hero_demo')}</a>
              <a href="#pricing" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold hover:scale-105 transition-transform">{t('hero_plans')}</a>
              <span className="px-5 py-3 rounded-full bg-white/10 text-white/80 border border-white/20 backdrop-blur-lg">{t('hero_free')}</span>
            </div>
          </div>
          <div className="h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

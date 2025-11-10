import React from 'react';
import NeonBackground from './components/NeonBackground';
import { LanguageProvider } from './components/LanguageProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyFluxy from './components/WhyFluxy';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ROICalculator, SectorSelector, DemoScheduler, ChatWidget } from './components/Interactive';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white relative">
        <NeonBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Services />
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ROICalculator />
              <SectorSelector />
              <DemoScheduler />
              <ChatWidget />
            </div>
          </section>
          <WhyFluxy />
          <Pricing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

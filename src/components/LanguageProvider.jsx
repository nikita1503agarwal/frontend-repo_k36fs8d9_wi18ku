import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LangContext = createContext({ lang: 'pt', setLang: () => {}, t: (k) => k });

const dictionary = {
  pt: {
    nav_home: 'Início',
    nav_services: 'Serviços',
    nav_about: 'Sobre',
    nav_pricing: 'Planos',
    nav_contact: 'Contato',
    cta_trial: 'Começar Teste Grátis',
    hero_title: 'Automatize suas Interações com Clientes usando IA',
    hero_sub: 'Transforme WhatsApp, ligações e emails em máquinas de gerar receita para seu negócio brasileiro',
    hero_demo: 'Agendar Demo',
    hero_plans: 'Ver Planos',
    hero_free: '7 Dias Grátis',
    services_title: 'Serviços',
    s_whatsapp_title: 'Automação WhatsApp',
    s_whatsapp_desc: 'Atendimento 24/7, qualificação de leads e agendamentos automáticos.',
    s_calls_title: 'IA para Ligações',
    s_calls_desc: 'Roteamento inteligente, assistentes de voz e análise de chamadas.',
    s_email_title: 'Automação de Email',
    s_email_desc: 'Respostas inteligentes, nutrição de leads e onboarding.',
    s_future_title: 'Serviços Futuros',
    s_future_desc: 'Dashboards avançados e soluções de IA personalizadas.',
    why_title: 'Por que escolher a FLUXY',
    why_1: 'Experiência Enterprise: Expertise em IA da Dell para orçamentos de pequenos negócios',
    why_2: 'Time Completo: Estratégia de negócios + desenvolvedores de IA + cientistas de dados',
    why_3: 'Resultados Comprovados: ROI real com parceiro do setor de lava-rápidos',
    why_4: 'Foco no Brasil: Entendemos o mercado brasileiro e suas necessidades específicas',
    why_5: 'Solução Completa: Automação de toda a jornada do cliente brasileiro',
    pricing_title: 'Planos',
    plan_starter: 'STARTER',
    plan_pro: 'PROFISSIONAL',
    plan_enterprise: 'ENTERPRISE',
    per_month: 'mês',
    starter_benefits: ['Até 100 agendamentos/mês', 'Integração com WhatsApp', '1 calendário sincronizado', 'Relatórios básicos', '7 dias GRÁTIS para teste'],
    pro_benefits: ['Até 300 agendamentos/mês', 'Integração com WhatsApp', '3 calendários sincronizados', 'Relatórios completos', 'Lembretes automáticos'],
    ent_benefits: ['Agendamentos ilimitados', 'Integração com WhatsApp', 'Calendários ilimitados', 'Relatórios completos', 'Lembretes automáticos', 'Painel avançado'],
    choose_plan: 'Escolher Plano',
    team_title: 'Sobre o Time',
    team_founder: 'Fundador: Engenheiro de Software na Dell, especialista em IA Generativa',
    team_co1: 'Co-fundador: Especialista em Administração de Empresas e Marketing',
    team_co2: 'Co-fundador: Especialista em Ciência de Dados para análises avançadas',
    team_quote: 'Verdadeira expertise em IA encontra conhecimento de negócios brasileiros',
    roi_title: 'Calculadora de ROI',
    roi_size: 'Tamanho do negócio',
    roi_small: 'Pequeno',
    roi_medium: 'Médio',
    roi_large: 'Grande',
    roi_estimate: 'Estimativa de ROI mensal',
    roi_currency: 'R$',
    sector_title: 'Sugestões por Setor',
    sector_select: 'Escolha seu setor',
    sector_result: 'Sugestões de automação',
    demo_title: 'Agende uma Demo',
    demo_date: 'Data',
    demo_time: 'Horário',
    demo_schedule: 'Agendar',
    demo_success: 'Demo agendada! Em breve entraremos em contato por WhatsApp.',
    chat_title: 'Converse com nossa IA',
    chat_placeholder: 'Digite sua pergunta...',
    chat_send: 'Enviar',
    footer_made: 'Feito no Brasil',
    footer_for: 'Para empresas brasileiras',
    footer_payments: 'Formas de pagamento: Cartão de Crédito, PIX, Boleto',
    lang_pt: 'PT',
    lang_en: 'EN',
  },
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_about: 'About',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    cta_trial: 'Start Free Trial',
    hero_title: 'Automate Your Customer Interactions with AI',
    hero_sub: "Turn WhatsApp, calls and emails into revenue machines for your Brazilian business",
    hero_demo: 'Book a Demo',
    hero_plans: 'View Plans',
    hero_free: '7 Days Free',
    services_title: 'Services',
    s_whatsapp_title: 'WhatsApp Automation',
    s_whatsapp_desc: '24/7 support, lead qualification and auto-bookings.',
    s_calls_title: 'AI for Calls',
    s_calls_desc: 'Smart routing, voice assistants and call analytics.',
    s_email_title: 'Email Automation',
    s_email_desc: 'Smart replies, lead nurturing and onboarding.',
    s_future_title: 'Upcoming Services',
    s_future_desc: 'Advanced dashboards and custom AI solutions.',
    why_title: 'Why choose FLUXY',
    why_1: 'Enterprise Experience: Dell-grade AI expertise at small business budgets',
    why_2: 'Full Team: Business strategists + AI developers + data scientists',
    why_3: 'Proven Results: Real ROI with a car-wash industry partner',
    why_4: 'Brazil Focus: We understand the Brazilian market and its specifics',
    why_5: 'End-to-End: Automation across the entire customer journey',
    pricing_title: 'Pricing',
    plan_starter: 'STARTER',
    plan_pro: 'PROFESSIONAL',
    plan_enterprise: 'ENTERPRISE',
    per_month: 'month',
    starter_benefits: ['Up to 100 bookings/mo', 'WhatsApp integration', '1 synced calendar', 'Basic reports', '7 days FREE trial'],
    pro_benefits: ['Up to 300 bookings/mo', 'WhatsApp integration', '3 synced calendars', 'Full reports', 'Auto reminders'],
    ent_benefits: ['Unlimited bookings', 'WhatsApp integration', 'Unlimited calendars', 'Full reports', 'Auto reminders', 'Advanced dashboard'],
    choose_plan: 'Choose Plan',
    team_title: 'The Team',
    team_founder: 'Founder: Dell Software Engineer, Generative AI specialist',
    team_co1: 'Co-founder: Business Administration & Marketing specialist',
    team_co2: 'Co-founder: Data Science specialist for advanced analytics',
    team_quote: 'True AI expertise meets Brazilian business know-how',
    roi_title: 'ROI Calculator',
    roi_size: 'Business size',
    roi_small: 'Small',
    roi_medium: 'Medium',
    roi_large: 'Large',
    roi_estimate: 'Estimated monthly ROI',
    roi_currency: '$',
    sector_title: 'Sector Suggestions',
    sector_select: 'Choose your sector',
    sector_result: 'Automation suggestions',
    demo_title: 'Book a Demo',
    demo_date: 'Date',
    demo_time: 'Time',
    demo_schedule: 'Schedule',
    demo_success: 'Demo scheduled! We will reach you on WhatsApp soon.',
    chat_title: 'Chat with our AI',
    chat_placeholder: 'Type your question...',
    chat_send: 'Send',
    footer_made: 'Made in Brazil',
    footer_for: 'For Brazilian businesses',
    footer_payments: 'Payment methods: Credit Card, PIX, Boleto',
    lang_pt: 'PT',
    lang_en: 'EN',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const nav = navigator.language || navigator.userLanguage || 'pt';
    if (nav.toLowerCase().startsWith('pt')) setLang('pt');
    else setLang('en');
  }, []);

  const t = useMemo(() => (key) => {
    const d = dictionary[lang] || dictionary.pt;
    const val = d[key];
    return Array.isArray(val) || typeof val === 'undefined' ? val : String(val);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

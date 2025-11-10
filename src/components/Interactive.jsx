import React from 'react';
import { useLang } from './LanguageProvider';

export function ROICalculator() {
  const { t, lang } = useLang();
  const [size, setSize] = React.useState('small');

  const estimate = React.useMemo(() => {
    const base = size === 'small' ? 800 : size === 'medium' ? 2200 : 5200;
    return base;
  }, [size]);

  return (
    <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="text-white text-xl font-semibold mb-4">{t('roi_title')}</h3>
      <label className="block text-white/70 mb-2">{t('roi_size')}</label>
      <select value={size} onChange={(e)=>setSize(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3">
        <option value="small">{t('roi_small')}</option>
        <option value="medium">{t('roi_medium')}</option>
        <option value="large">{t('roi_large')}</option>
      </select>
      <div className="mt-4 text-white/80">{t('roi_estimate')}</div>
      <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 mt-1">{t('roi_currency')}{estimate.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US')}</div>
    </div>
  );
}

export function SectorSelector() {
  const { t } = useLang();
  const [sector, setSector] = React.useState('carwash');

  const suggestions = {
    carwash: ['Agendamento automático via WhatsApp', 'Lembretes de horário', 'Upsell de serviços premium'],
    clinic: ['Pré-triagem com IA', 'Confirmação de consultas', 'Pós-atendimento com NPS'],
    restaurant: ['Reserva por WhatsApp', 'Recompra automatizada', 'Feedback pós-visita'],
  };

  return (
    <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="text-white text-xl font-semibold mb-4">{t('sector_title')}</h3>
      <label className="block text-white/70 mb-2">{t('sector_select')}</label>
      <select value={sector} onChange={(e)=>setSector(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3">
        <option value="carwash">Lava-rápido</option>
        <option value="clinic">Clínica</option>
        <option value="restaurant">Restaurante</option>
      </select>
      <div className="mt-4 text-white/80">{t('sector_result')}</div>
      <ul className="mt-2 space-y-2 text-white/80">
        {suggestions[sector].map((s, i)=>(<li key={i}>• {s}</li>))}
      </ul>
    </div>
  );
}

export function DemoScheduler() {
  const { t } = useLang();
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [ok, setOk] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!date || !time) return;
    setOk(true);
  };

  return (
    <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="text-white text-xl font-semibold mb-4">{t('demo_title')}</h3>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-white/70 mb-1">{t('demo_date')}</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3" />
        </div>
        <div>
          <label className="block text-white/70 mb-1">{t('demo_time')}</label>
          <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg text-white p-3" />
        </div>
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold">{t('demo_schedule')}</button>
      </form>
      {ok && <div className="mt-3 text-emerald-300">{t('demo_success')}</div>}
    </div>
  );
}

export function ChatWidget() {
  const { t } = useLang();
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([
    { from: 'bot', text: 'Olá! Sou a IA da FLUXY. Como posso ajudar?' }
  ]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input.trim() };
    const botMsg = { from: 'bot', text: 'Simulação: nossa IA responde automaticamente dúvidas comuns e coleta dados de contato.' };
    setMessages((m)=>[...m, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col h-[360px]">
      <h3 className="text-white text-xl font-semibold mb-3">{t('chat_title')}</h3>
      <div className="flex-1 overflow-auto space-y-2 pr-2">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[80%] px-3 py-2 rounded-2xl ${m.from==='bot' ? 'bg-white/10 text-white self-start' : 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black self-end ml-auto'}`}>{m.text}</div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={t('chat_placeholder')} className="flex-1 bg-black/40 border border-white/10 rounded-lg text-white px-3" />
        <button onClick={send} className="px-4 rounded-xl bg-white text-black font-semibold">{t('chat_send')}</button>
      </div>
    </div>
  );
}

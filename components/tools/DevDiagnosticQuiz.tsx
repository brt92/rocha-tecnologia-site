
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { 
  Globe, Rocket, Target, Zap, BarChart3, ChevronRight, 
  ShieldCheck, MessageSquare, Database, Layout, 
  AlertCircle, LayoutDashboard, Lock, ArrowRight,
  TrendingUp, Monitor, Smartphone, Workflow, Search
} from 'lucide-react';

type DevDimension = 'Presença Digital' | 'Geração de Oportunidades' | 'Estrutura Tecnológica' | 'Posicionamento Digital';

interface DevQuestion {
  id: number;
  dimension: DevDimension;
  question: string;
  options: { text: string; score: number }[];
}

const DEV_QUESTIONS: DevQuestion[] = [
  // SITUAÇÃO ATUAL
  { id: 1, dimension: 'Presença Digital', question: 'Sua empresa possui site?', options: [{ text: 'Sim', score: 10 }, { text: 'Não', score: 0 }, { text: 'Está em construção', score: 4 }] },
  { id: 2, dimension: 'Presença Digital', question: 'Se possui site, ele é atualizado com frequência?', options: [{ text: 'Sim', score: 10 }, { text: 'Raramente', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 3, dimension: 'Geração de Oportunidades', question: 'O site gera contatos ou oportunidades?', options: [{ text: 'Sim', score: 10 }, { text: 'Pouco', score: 4 }, { text: 'Não', score: 0 }] },
  { id: 4, dimension: 'Presença Digital', question: 'Sua empresa depende apenas de redes sociais?', options: [{ text: 'Não', score: 10 }, { text: 'Parcialmente', score: 5 }, { text: 'Sim', score: 0 }] },
  { id: 5, dimension: 'Posicionamento Digital', question: 'Onde seus clientes encontram sua empresa hoje?', options: [{ text: 'Google', score: 10 }, { text: 'Instagram', score: 7 }, { text: 'Indicação', score: 4 }, { text: 'Não sei', score: 0 }] },
  
  // MATURIDADE DIGITAL
  { id: 6, dimension: 'Geração de Oportunidades', question: 'Sua empresa capta leads digitalmente?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 7, dimension: 'Geração de Oportunidades', question: 'Existe formulário estruturado de contato?', options: [{ text: 'Sim', score: 10 }, { text: 'Não', score: 0 }] },
  { id: 8, dimension: 'Estrutura Tecnológica', question: 'Existe integração com WhatsApp?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 6 }, { text: 'Não', score: 0 }] },
  { id: 9, dimension: 'Estrutura Tecnológica', question: 'Existe integração com CRM?', options: [{ text: 'Sim', score: 10 }, { text: 'Não', score: 0 }, { text: 'Não sei', score: 2 }] },
  { id: 10, dimension: 'Estrutura Tecnológica', question: 'Existe automação de atendimento?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },

  // DESENVOLVIMENTO E SISTEMAS
  { id: 11, dimension: 'Estrutura Tecnológica', question: 'A empresa utiliza algum sistema próprio?', options: [{ text: 'Sim', score: 10 }, { text: 'Não', score: 0 }] },
  { id: 12, dimension: 'Estrutura Tecnológica', question: 'Processos ainda são feitos manualmente?', options: [{ text: 'Poucos', score: 10 }, { text: 'Alguns', score: 5 }, { text: 'Muitos', score: 0 }] },
  { id: 13, dimension: 'Estrutura Tecnológica', question: 'Existe necessidade de sistema interno?', options: [{ text: 'Não', score: 10 }, { text: 'Talvez', score: 5 }, { text: 'Sim', score: 0 }] },
  { id: 14, dimension: 'Posicionamento Digital', question: 'Existe dashboard ou relatórios digitais?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },

  // POSICIONAMENTO DIGITAL
  { id: 15, dimension: 'Posicionamento Digital', question: 'Sua empresa transmite profissionalismo online?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 16, dimension: 'Posicionamento Digital', question: 'O site representa bem os serviços?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 17, dimension: 'Posicionamento Digital', question: 'Sua presença digital ajuda nas vendas?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },

  // OBJETIVOS
  { id: 18, dimension: 'Geração de Oportunidades', question: 'O que você busca hoje?', options: [{ text: 'Ter um site profissional', score: 8 }, { text: 'Gerar leads', score: 10 }, { text: 'Automatizar processos', score: 10 }, { text: 'Melhorar presença digital', score: 7 }, { text: 'Criar sistemas', score: 10 }] },
  { id: 19, dimension: 'Presença Digital', question: 'Qual a urgência?', options: [{ text: 'Imediata', score: 10 }, { text: 'Em breve', score: 6 }, { text: 'Explorando', score: 3 }] }
];

export const DevDiagnosticQuiz = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<DevDimension, number>>({
    'Presença Digital': 0,
    'Geração de Oportunidades': 0,
    'Estrutura Tecnológica': 0,
    'Posicionamento Digital': 0
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', company: '', whatsapp: '', email: '' });

  const handleOption = (score: number, dimension: DevDimension) => {
    setScores(prev => ({ ...prev, [dimension]: prev[dimension] + score }));
    if (step < DEV_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const getResults = () => {
    const totalPossible = DEV_QUESTIONS.length * 10;
    const currentTotal = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentage = (currentTotal / totalPossible) * 100;

    let classification = { 
      label: 'Presença Digital Inexistente', 
      color: 'text-red-500', 
      bg: 'bg-red-500/10', 
      border: 'border-red-500/20',
      icon: <AlertCircle />,
      desc: 'Sua empresa está invisível no ambiente digital ou dependente de plataformas de terceiros.'
    };

    if (percentage >= 85) classification = { 
      label: 'Presença Estratégica', 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-400/10', 
      border: 'border-emerald-400/20',
      icon: <ShieldCheck />,
      desc: 'Sua empresa utiliza a tecnologia como motor de escala e autoridade máxima.'
    };
    else if (percentage >= 60) classification = { 
      label: 'Presença Profissional', 
      color: 'text-blue-400', 
      bg: 'bg-blue-400/10', 
      border: 'border-blue-400/20',
      icon: <Layout />,
      desc: 'Você possui uma base sólida, mas ainda há gargalos de automação e conversão.'
    };
    else if (percentage >= 35) classification = { 
      label: 'Presença Básica', 
      color: 'text-amber-400', 
      bg: 'bg-amber-400/10', 
      border: 'border-amber-400/20',
      icon: <Monitor />,
      desc: 'Sua presença existe, mas não é eficiente para gerar negócios de forma previsível.'
    };

    const recs = [];
    if (scores['Presença Digital'] < 25) recs.push({ t: 'Autoridade', r: 'Desenvolver um Portal Corporativo focado em conversão e SEO.' });
    if (scores['Geração de Oportunidades'] < 25) recs.push({ t: 'Comercial', r: 'Implementar Landing Pages e fluxos de captação de leads.' });
    if (scores['Estrutura Tecnológica'] < 30) recs.push({ t: 'Eficiência', r: 'Integrar o site com CRM e automatizar o atendimento inicial.' });
    if (scores['Posicionamento Digital'] < 25) recs.push({ t: 'Marca', r: 'Redesign de UX/UI para transmitir profissionalismo de alto nível.' });

    return { percentage, classification, recommendations: recs, totalScore: currentTotal };
  };

  if (completed) {
    const { classification, recommendations, totalScore, percentage } = getResults();
    return (
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 max-w-5xl mx-auto overflow-hidden relative text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 text-left">
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${classification.bg} ${classification.color} text-[10px] font-black uppercase tracking-widest mb-6 border ${classification.border}`}>
                Diagnóstico Digital Concluído
              </span>
              <div className="flex items-center gap-6 mb-4">
                <div className="p-4 bg-white/5 rounded-3xl border border-white/10">{classification.icon}</div>
                <div>
                  <h3 className={`text-4xl font-black ${classification.color}`}>{classification.label}</h3>
                  <p className="text-slate-400 font-medium mt-1">{classification.desc}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap size={20} className="text-blue-500" /> Próximos Passos Recomendados:
              </h4>
              <div className="grid gap-3">
                {recommendations.map((rec, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-600/30">
                      <ArrowRight size={14} className="text-blue-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-blue-400 block mb-1">{rec.t}</span>
                      <p className="text-sm text-slate-300 font-semibold">{rec.r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Score por Dimensão</h5>
              <div className="space-y-6">
                {[
                  { l: 'Presença', v: scores['Presença Digital'], m: 40 },
                  { l: 'Oportunidades', v: scores['Geração de Oportunidades'], m: 40 },
                  { l: 'Tecnologia', v: scores['Estrutura Tecnológica'], m: 60 },
                  { l: 'Posicionamento', v: scores['Posicionamento Digital'], m: 50 }
                ].map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] font-black uppercase mb-2">
                      <span className="text-slate-400">{d.l}</span>
                      <span className="text-blue-400">{Math.round((d.v/d.m)*100)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000" style={{ width: `${(d.v/d.m)*100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <div className="text-4xl font-black text-white">{Math.round(percentage)}<span className="text-sm text-slate-500 font-normal">%</span></div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Maturidade Digital Geral</div>
              </div>
            </div>
            <Button variant="primary" className="w-full py-6 rounded-3xl shadow-xl shadow-blue-500/10" onClick={() => window.scrollTo(0, 0)}>
              Quero Modernizar minha Presença
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (showLeadForm) {
    return (
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 text-center animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600">
           <LayoutDashboard size={40} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Relatório Quase Pronto!</h3>
        <p className="text-slate-500 mb-10 leading-relaxed font-medium">Para desbloquear o diagnóstico detalhado e as recomendações de tecnologia, preencha os dados da sua empresa.</p>
        <form onSubmit={(e) => { e.preventDefault(); setCompleted(true); setShowLeadForm(false); }} className="space-y-4">
          <input required type="text" placeholder="Nome do Responsável" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input required type="text" placeholder="Nome da Empresa" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.company} onChange={e => setLeadData({...leadData, company: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="tel" placeholder="WhatsApp" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.whatsapp} onChange={e => setLeadData({...leadData, whatsapp: e.target.value})} />
            <input required type="email" placeholder="E-mail Corporativo" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
          </div>
          <Button variant="primary" size="lg" className="w-full py-6 mt-6 shadow-xl shadow-blue-500/20">Ver Diagnóstico Completo</Button>
          <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Lock size={12} /> Dados seguros seguindo a LGPD
          </div>
        </form>
      </div>
    );
  }

  const current = DEV_QUESTIONS[step];
  const progress = ((step) / DEV_QUESTIONS.length) * 100;

  return (
    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl text-white relative overflow-hidden max-w-4xl mx-auto border border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-400 to-emerald-500"></div>
      
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white"><BarChart3 size={20} /></div>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Diagnóstico de Presença Digital</span>
            </div>
            <span className="text-xs text-slate-500 font-black">{step + 1} / {DEV_QUESTIONS.length}</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="mb-12">
           <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-blue-400 tracking-widest mb-6 inline-block">
             Dimensão: {current.dimension}
           </span>
           <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">{current.question}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(opt.score, current.dimension)}
              className="w-full p-6 text-left rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors text-lg">{opt.text}</span>
                <ChevronRight size={20} className="text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

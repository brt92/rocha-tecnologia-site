
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { 
  Brain, Bot, ShieldCheck, Zap, BarChart3, ChevronRight, 
  Lock, ArrowRight, Sparkles, AlertTriangle, 
  ShieldAlert, ClipboardCheck, Network, Cpu,
  Search, Users, MessageSquare, Target, Settings,
  Eye, Info, LayoutDashboard
} from 'lucide-react';

type AIDimension = 'Uso Atual' | 'Governança' | 'Segurança' | 'Maturidade';

interface AIQuestion {
  id: number;
  dimension: AIDimension;
  question: string;
  options: { text: string; score: number }[];
}

const AI_QUESTIONS: AIQuestion[] = [
  // USO ATUAL
  { id: 1, dimension: 'Uso Atual', question: 'Sua empresa utiliza alguma ferramenta de IA?', options: [{ text: 'Sim, amplamente', score: 10 }, { text: 'Sim, pontualmente', score: 6 }, { text: 'Não utilizo', score: 0 }, { text: 'Não sei informar', score: 2 }] },
  { id: 2, dimension: 'Uso Atual', question: 'Quais ferramentas são mais comuns no dia a dia?', options: [{ text: 'ChatGPT / Gemini / Copilot', score: 8 }, { text: 'Midjourney / Canais Criativos', score: 6 }, { text: 'Ferramentas Próprias', score: 10 }, { text: 'Nenhuma', score: 0 }] },
  { id: 3, dimension: 'Uso Atual', question: 'Quem mais utiliza IA na organização?', options: [{ text: 'Toda a empresa', score: 10 }, { text: 'Diretoria e Gestão', score: 7 }, { text: 'Setores Específicos (TI/MKT)', score: 5 }, { text: 'Ninguém', score: 0 }] },
  { id: 4, dimension: 'Uso Atual', question: 'Para qual finalidade a IA é mais aplicada?', options: [{ text: 'Automação de Processos', score: 10 }, { text: 'Criação de Conteúdo', score: 6 }, { text: 'Análise de Dados', score: 9 }, { text: 'Testes apenas', score: 4 }] },

  // GOVERNANÇA
  { id: 5, dimension: 'Governança', question: 'Existe uma política interna formal para o uso de IA?', options: [{ text: 'Sim, estruturada', score: 10 }, { text: 'Parcial / Informal', score: 5 }, { text: 'Não existe', score: 0 }] },
  { id: 6, dimension: 'Governança', question: 'Há orientação clara sobre o que não pode ser enviado para IAs?', options: [{ text: 'Sim, treinamento regular', score: 10 }, { text: 'Apenas aviso verbal', score: 4 }, { text: 'Nenhuma orientação', score: 0 }] },
  { id: 7, dimension: 'Governança', question: 'A empresa controla as contas e licenças de IA?', options: [{ text: 'Sim, centralizado pela TI', score: 10 }, { text: 'Controle parcial', score: 5 }, { text: 'Cada um usa a sua', score: 0 }] },
  { id: 8, dimension: 'Governança', question: 'Existe um responsável ou comitê para o tema IA?', options: [{ text: 'Sim, definido', score: 10 }, { text: 'Não existe', score: 0 }] },

  // SEGURANÇA E RISCOS
  { id: 9, dimension: 'Segurança', question: 'Já houve envio de dados sensíveis para ferramentas públicas?', options: [{ text: 'Nunca (bloqueio ativo)', score: 10 }, { text: 'Não sei informar', score: 2 }, { text: 'Sim, já ocorreu', score: 0 }] },
  { id: 10, dimension: 'Segurança', question: 'Existe preocupação ativa com vazamento de dados via IA?', options: [{ text: 'Alta prioridade', score: 10 }, { text: 'Preocupação moderada', score: 5 }, { text: 'Não é pauta', score: 0 }] },
  { id: 11, dimension: 'Segurança', question: 'Existe validação humana obrigatória para resultados de IA?', options: [{ text: 'Sim, em todos os processos', score: 10 }, { text: 'Às vezes', score: 5 }, { text: 'Confiamos no output', score: 2 }] },
  { id: 12, dimension: 'Segurança', question: 'A empresa utiliza IAs em modo "Private/Enterprise"?', options: [{ text: 'Sim, para tudo', score: 10 }, { text: 'Para alguns processos', score: 6 }, { text: 'Não (apenas públicas)', score: 0 }] },

  // PROCESSOS E MATURIDADE
  { id: 13, dimension: 'Maturidade', question: 'A IA já automatiza alguma tarefa crítica hoje?', options: [{ text: 'Sim, processos core', score: 10 }, { text: 'Em fase de testes', score: 6 }, { text: 'Não automatiza', score: 0 }] },
  { id: 14, dimension: 'Maturidade', question: 'Já substituiu algum processo manual por IA?', options: [{ text: 'Sim, vários', score: 10 }, { text: 'Parcialmente', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 15, dimension: 'Maturidade', question: 'Como a empresa enxerga a Inteligência Artificial?', options: [{ text: 'Ferramenta Estratégica', score: 10 }, { text: 'Apoio Operacional', score: 7 }, { text: 'Risco Tecnológico', score: 3 }, { text: 'Curiosidade', score: 4 }] },
  { id: 16, dimension: 'Maturidade', question: 'Existe um plano/roadmap de adoção de IA para 12 meses?', options: [{ text: 'Sim, definido', score: 10 }, { text: 'Em estudo', score: 5 }, { text: 'Não existe', score: 0 }] },

  // TREINAMENTO E OPORTUNIDADES
  { id: 17, dimension: 'Maturidade', question: 'A equipe recebeu treinamento sobre "Engenharia de Prompt"?', options: [{ text: 'Sim, treinamento formal', score: 10 }, { text: 'Alguns aprenderam sós', score: 4 }, { text: 'Não', score: 0 }] },
  { id: 18, dimension: 'Governança', question: 'Existe auditoria sobre o que a IA está produzindo?', options: [{ text: 'Sim, periódica', score: 10 }, { text: 'Não', score: 0 }] },
  { id: 19, dimension: 'Maturidade', question: 'Onde você mais gostaria de aplicar IA agora?', options: [{ text: 'Atendimento e Vendas', score: 8 }, { text: 'Financeiro e Operacional', score: 10 }, { text: 'Análise de Dados Estratégicos', score: 10 }, { text: 'Marketing e Criativo', score: 7 }] },
  { id: 20, dimension: 'Maturidade', question: 'Busca suporte especializado para implantar IA?', options: [{ text: 'Sim, imediato', score: 10 }, { text: 'Futuramente', score: 6 }, { text: 'Apenas explorando', score: 3 }] }
];

export const AIDiagnosticQuiz = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<AIDimension, number>>({
    'Uso Atual': 0,
    'Governança': 0,
    'Segurança': 0,
    'Maturidade': 0
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', company: '', whatsapp: '', email: '' });

  const handleOption = (score: number, dimension: AIDimension) => {
    setScores(prev => ({ ...prev, [dimension]: prev[dimension] + score }));
    if (step < AI_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const getResults = () => {
    const totalPossible = AI_QUESTIONS.length * 10;
    const currentTotal = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentage = (currentTotal / totalPossible) * 100;

    let classification = { 
      label: 'Uso Desorganizado', 
      color: 'text-amber-400', 
      bg: 'bg-amber-400/10', 
      border: 'border-amber-400/20',
      icon: <AlertTriangle />,
      desc: 'A empresa usa IA de forma "shadow", sem controle centralizado ou segurança de dados.'
    };

    if (percentage >= 85) classification = { 
      label: 'IA Estratégica', 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-400/10', 
      border: 'border-emerald-400/20',
      icon: <Brain />,
      desc: 'A IA é um motor de crescimento e vantagem competitiva, com governança absoluta.'
    };
    else if (percentage >= 60) classification = { 
      label: 'Uso Inicial Estruturado', 
      color: 'text-blue-400', 
      bg: 'bg-blue-400/10', 
      border: 'border-blue-400/20',
      icon: <Cpu />,
      desc: 'Sua empresa já entende o valor, mas precisa refinar a governança e escala.'
    };
    else if (percentage < 30) classification = { 
      label: 'Nível Inexistente', 
      color: 'text-red-500', 
      bg: 'bg-red-500/10', 
      border: 'border-red-500/20',
      icon: <ShieldAlert />,
      desc: 'A organização ainda não iniciou a jornada de IA, correndo risco de obsolescência.'
    };

    const recs = [];
    if (scores['Segurança'] < 25) recs.push({ t: 'Segurança', r: 'Implementar Firewall de IA e políticas de DLP (Data Loss Prevention).' });
    if (scores['Governança'] < 25) recs.push({ t: 'Cultura', r: 'Criar Comitê de Ética e Guia de Uso de IA Generativa.' });
    if (scores['Maturidade'] < 30) recs.push({ t: 'Escala', r: 'Mapear processos repetitivos para automação via Agentes Inteligentes.' });
    if (scores['Uso Atual'] < 25) recs.push({ t: 'Capacitação', r: 'Workshop de Engenharia de Prompt para aumentar produtividade em 40%.' });

    return { percentage, classification, recommendations: recs };
  };

  if (completed) {
    const { classification, recommendations, percentage } = getResults();
    return (
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 max-w-5xl mx-auto overflow-hidden relative text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 text-left">
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${classification.bg} ${classification.color} text-[10px] font-black uppercase tracking-widest mb-6 border ${classification.border}`}>
                Diagnóstico de IA Concluído
              </span>
              <div className="flex items-center gap-6 mb-4">
                <div className="p-4 bg-white/5 rounded-3xl border border-white/10 shadow-emerald-500/5">{classification.icon}</div>
                <div>
                  <h3 className={`text-4xl font-black ${classification.color}`}>{classification.label}</h3>
                  <p className="text-slate-400 font-medium mt-1">{classification.desc}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles size={20} className="text-emerald-400" /> Oportunidades Identificadas:
              </h4>
              <div className="grid gap-3">
                {recommendations.map((rec, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 border border-emerald-600/30">
                      <ArrowRight size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-emerald-400 block mb-1">{rec.t}</span>
                      <p className="text-sm text-slate-300 font-semibold">{rec.r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Score de IA por Vetor</h5>
              <div className="space-y-6">
                {[
                  { l: 'Uso Atual', v: scores['Uso Atual'], m: 40 },
                  { l: 'Governança', v: scores['Governança'], m: 40 },
                  { l: 'Segurança', v: scores['Segurança'], m: 40 },
                  { l: 'Maturidade', v: scores['Maturidade'], m: 80 }
                ].map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] font-black uppercase mb-2">
                      <span className="text-slate-400">{d.l}</span>
                      <span className="text-emerald-400">{Math.round((d.v/d.m)*100)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-1000" style={{ width: `${(d.v/d.m)*100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <div className="text-4xl font-black text-white">{Math.round(percentage)}<span className="text-sm text-slate-500 font-normal">%</span></div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Nível de Prontidão para IA</div>
              </div>
            </div>
            <Button variant="primary" className="w-full py-6 rounded-3xl shadow-xl bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/10 border-none" onClick={() => window.scrollTo(0, 0)}>
              Quero Implementar Estratégia de IA
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (showLeadForm) {
    return (
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 text-center animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600">
           <LayoutDashboard size={40} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Análise Gerada!</h3>
        <p className="text-slate-500 mb-10 leading-relaxed font-medium">Processamos suas respostas. Identificamos pontos de risco e oportunidades imediatas. Preencha os dados abaixo para desbloquear seu diagnóstico.</p>
        <form onSubmit={(e) => { e.preventDefault(); setCompleted(true); setShowLeadForm(false); }} className="space-y-4">
          <input required type="text" placeholder="Seu Nome" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input required type="text" placeholder="Empresa" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" value={leadData.company} onChange={e => setLeadData({...leadData, company: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="tel" placeholder="WhatsApp" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" value={leadData.whatsapp} onChange={e => setLeadData({...leadData, whatsapp: e.target.value})} />
            <input required type="email" placeholder="E-mail Corporativo" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
          </div>
          <Button variant="primary" size="lg" className="w-full py-6 mt-6 bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 border-none">Ver Diagnóstico Completo</Button>
          <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Lock size={12} /> Consultoria Ética e Segura (LGPD)
          </div>
        </form>
      </div>
    );
  }

  const current = AI_QUESTIONS[step];
  const progress = ((step) / AI_QUESTIONS.length) * 100;

  return (
    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl text-white relative overflow-hidden max-w-4xl mx-auto border border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-400 to-blue-500"></div>
      
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20"><Brain size={20} /></div>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">AI Maturity Diagnostic v2.5</span>
            </div>
            <span className="text-xs text-slate-500 font-black">{step + 1} de {AI_QUESTIONS.length}</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="mb-12">
           <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase text-emerald-400 tracking-widest mb-6 inline-block">
             Dimensão: {current.dimension}
           </span>
           <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">{current.question}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(opt.score, current.dimension)}
              className="w-full p-6 text-left rounded-3xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500 transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors text-lg">{opt.text}</span>
                <ChevronRight size={20} className="text-slate-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="absolute left-0 top-0 h-full w-1.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

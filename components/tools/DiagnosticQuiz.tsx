
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { 
  CheckCircle2, ChevronRight, AlertCircle, ShieldAlert, 
  ArrowRight, Shield, Database, Cpu, Headphones, Lock, Zap,
  AlertTriangle, ClipboardList, Info, BarChart3, Globe,
  Users, UserPlus, Save, MousePointer2, Mail, ShieldCheck,
  LayoutDashboard, Server
} from 'lucide-react';

type Dimension = 'Segurança' | 'Infraestrutura' | 'Ativos' | 'Suporte' | 'Digital';

interface Question {
  id: number;
  dimension: Dimension;
  question: string;
  options: { text: string; score: number }[];
}

const QUESTIONS: Question[] = [
  // GERAL (1-10)
  { id: 1, dimension: 'Segurança', question: 'Sua empresa possui backup automatizado?', options: [{ text: 'Sim, diário', score: 10 }, { text: 'Sim, ocasional', score: 5 }, { text: 'Não sei', score: 2 }, { text: 'Não', score: 0 }] },
  { id: 2, dimension: 'Digital', question: 'Existe controle de acesso por usuário?', options: [{ text: 'Sim, individual', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Compartilhado', score: 2 }, { text: 'Não', score: 0 }] },
  { id: 3, dimension: 'Segurança', question: 'Há firewall corporativo ativo?', options: [{ text: 'Sim, gerenciado', score: 10 }, { text: 'Sim, básico', score: 5 }, { text: 'Não sei', score: 2 }, { text: 'Não', score: 0 }] },
  { id: 4, dimension: 'Segurança', question: 'Os computadores são monitorados?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcialmente', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 5, dimension: 'Infraestrutura', question: 'A rede Wi-Fi é corporativa e segmentada?', options: [{ text: 'Sim', score: 10 }, { text: 'Não sei', score: 3 }, { text: 'Não', score: 0 }] },
  { id: 6, dimension: 'Segurança', question: 'Existe política de segurança interna?', options: [{ text: 'Sim', score: 10 }, { text: 'Em desenvolvimento', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 7, dimension: 'Suporte', question: 'Quem cuida da TI hoje?', options: [{ text: 'Empresa especializada', score: 10 }, { text: 'Profissional interno', score: 8 }, { text: 'Pessoa eventual', score: 3 }, { text: 'Ninguém', score: 0 }] },
  { id: 8, dimension: 'Segurança', question: 'Já houve perda de dados?', options: [{ text: 'Nunca', score: 10 }, { text: 'Uma vez', score: 4 }, { text: 'Algumas vezes', score: 0 }] },
  { id: 9, dimension: 'Segurança', question: 'Existe plano de continuidade?', options: [{ text: 'Sim', score: 10 }, { text: 'Não sei', score: 3 }, { text: 'Não', score: 0 }] },
  { id: 10, dimension: 'Infraestrutura', question: 'A empresa depende fortemente de sistemas?', options: [{ text: 'Sim, totalmente', score: 10 }, { text: 'Moderadamente', score: 6 }, { text: 'Pouco', score: 3 }] },
  
  // ATIVOS (11-14)
  { id: 11, dimension: 'Ativos', question: 'Sua empresa possui inventário atualizado de equipamentos?', options: [{ text: 'Sim, completo e atualizado', score: 10 }, { text: 'Sim, mas incompleto', score: 5 }, { text: 'Não sei', score: 2 }, { text: 'Não', score: 0 }] },
  { id: 12, dimension: 'Ativos', question: 'Existe controle de quem utiliza cada computador?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 13, dimension: 'Ativos', question: 'Equipamentos são padronizados ou variados?', options: [{ text: 'Padronizados', score: 10 }, { text: 'Parcialmente', score: 5 }, { text: 'Totalmente diferentes', score: 2 }] },
  { id: 14, dimension: 'Ativos', question: 'Há manutenção preventiva dos equipamentos?', options: [{ text: 'Sim, periódica', score: 10 }, { text: 'Ocasional', score: 4 }, { text: 'Não', score: 0 }] },

  // SUPORTE (15-20)
  { id: 15, dimension: 'Suporte', question: 'Quando um colaborador tem problema, quem resolve?', options: [{ text: 'Empresa especializada', score: 10 }, { text: 'Profissional interno', score: 8 }, { text: 'Pessoa eventual', score: 3 }, { text: 'Ninguém', score: 0 }] },
  { id: 16, dimension: 'Suporte', question: 'Existe canal definido para solicitar suporte?', options: [{ text: 'Sim, estruturado', score: 10 }, { text: 'Informal', score: 3 }, { text: 'Não', score: 0 }] },
  { id: 17, dimension: 'Suporte', question: 'Tempo médio para resolver problemas:', options: [{ text: 'Imediato', score: 10 }, { text: 'Algumas horas', score: 6 }, { text: 'Dias', score: 2 }, { text: 'Indefinido', score: 0 }] },
  { id: 18, dimension: 'Suporte', question: 'Problemas técnicos costumam impactar o trabalho?', options: [{ text: 'Raramente', score: 10 }, { text: 'Às vezes', score: 5 }, { text: 'Frequentemente', score: 0 }] },
  { id: 19, dimension: 'Suporte', question: 'Existe histórico de atendimentos técnicos?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 20, dimension: 'Suporte', question: 'O suporte atua preventivamente ou apenas reativa?', options: [{ text: 'Atua preventivamente', score: 10 }, { text: 'Apenas quando dá problema', score: 2 }] },

  // DIGITAL (21-25)
  { id: 21, dimension: 'Digital', question: 'A empresa possui controle centralizado de e-mails corporativos?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 4 }, { text: 'Não', score: 0 }] },
  { id: 22, dimension: 'Digital', question: 'Contas e acessos são individuais ou compartilhados?', options: [{ text: 'Individuais', score: 10 }, { text: 'Mistos', score: 5 }, { text: 'Compartilhados', score: 0 }] },
  { id: 23, dimension: 'Digital', question: 'Existe política de criação e remoção de acessos?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 24, dimension: 'Digital', question: 'Quem administra contas e permissões hoje?', options: [{ text: 'Empresa especializada', score: 10 }, { text: 'Profissional interno', score: 7 }, { text: 'Usuários gerenciam', score: 3 }, { text: 'Ninguém controla', score: 0 }] },
  { id: 25, dimension: 'Digital', question: 'Existe controle sobre acessos a sistemas e drives?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },

  // INTEGRAÇÃO (26-29)
  { id: 26, dimension: 'Digital', question: 'Existe processo estruturado de TI no onboarding?', options: [{ text: 'Sim, completo', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 27, dimension: 'Digital', question: 'E-mail, acessos e equipamentos são configurados antes da entrada?', options: [{ text: 'Sim, sempre', score: 10 }, { text: 'Parcialmente', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 28, dimension: 'Digital', question: 'O desligamento inclui remoção imediata de todos os acessos?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] },
  { id: 29, dimension: 'Segurança', question: 'Dados e arquivos de colaboradores desligados são protegidos?', options: [{ text: 'Sim', score: 10 }, { text: 'Parcial', score: 5 }, { text: 'Não', score: 0 }] }
];

export const DiagnosticQuiz = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Dimension, number>>({
    Segurança: 0,
    Infraestrutura: 0,
    Ativos: 0,
    Suporte: 0,
    Digital: 0
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', company: '', whatsapp: '', email: '' });

  const handleOption = (score: number, dimension: Dimension) => {
    setScores(prev => ({ ...prev, [dimension]: prev[dimension] + score }));
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const getResults = () => {
    const totalPossible = QUESTIONS.length * 10;
    const currentTotal = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentage = (currentTotal / totalPossible) * 100;

    let classification = { label: 'TI Crítica', color: 'text-red-600', bg: 'bg-red-50', risk: 'Altíssimo', icon: <ShieldAlert className="text-red-600" /> };
    if (percentage >= 85) classification = { label: 'TI Estruturada', color: 'text-emerald-600', bg: 'bg-emerald-50', risk: 'Baixo', icon: <ShieldCheck className="text-emerald-600" /> };
    else if (percentage >= 65) classification = { label: 'TI em Evolução', color: 'text-blue-600', bg: 'bg-blue-50', risk: 'Moderado', icon: <Info className="text-blue-600" /> };
    else if (percentage >= 45) classification = { label: 'TI Vulnerável', color: 'text-amber-600', bg: 'bg-amber-50', risk: 'Alto', icon: <AlertTriangle className="text-amber-600" /> };

    const recommendations = [];
    if (scores.Ativos < 25) recommendations.push({ t: 'Ausência de Inventário', r: 'Implantar gestão de ativos e padronização de hardware.' });
    if (scores.Suporte < 40) recommendations.push({ t: 'Suporte Informal', r: 'Estruturar canal de atendimento técnico e histórico de chamados.' });
    if (scores.Segurança < 45) recommendations.push({ t: 'Risco de Continuidade', r: 'Implantar política de backup 3-2-1 e Firewall gerenciado.' });
    if (scores.Digital < 50) recommendations.push({ t: 'Governança Frágil', r: 'Implementar gestão corporativa de e-mails e controle de acessos centralizado.' });
    if (scores.Digital < 30) recommendations.push({ t: 'Onboarding Inexistente', r: 'Estruturar processo técnico de integração de novos colaboradores.' });

    return { percentage, classification, recommendations, totalScore: currentTotal };
  };

  if (completed) {
    const { classification, recommendations, totalScore, percentage } = getResults();
    return (
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500 max-w-5xl mx-auto overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 text-left">
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${classification.bg} ${classification.color} text-xs font-black uppercase tracking-widest mb-6`}>
                Diagnóstico Concluído
              </span>
              <div className="flex items-center gap-6 mb-4">
                <div className="p-4 bg-slate-50 rounded-3xl shadow-sm">{classification.icon}</div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900">{classification.label}</h3>
                  <p className="text-slate-500 font-medium">Índice de Risco: <span className={classification.color}>{classification.risk}</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ClipboardList size={20} className="text-blue-600" /> Vulnerabilidades e Recomendações:
              </h4>
              <div className="grid gap-3">
                {recommendations.map((rec, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <ArrowRight size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">{rec.t}</span>
                      <p className="text-sm text-slate-700 font-semibold">{rec.r}</p>
                    </div>
                  </div>
                ))}
                {recommendations.length === 0 && (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 font-bold">
                    Parabéns! Sua infraestrutura apresenta ótimos níveis de controle. Recomendamos manter o monitoramento preventivo.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Performance por Dimensão</h5>
              <div className="space-y-6">
                {[
                  { l: 'Segurança', v: scores.Segurança, m: 70 },
                  { l: 'Infraestrutura', v: scores.Infraestrutura, m: 20 },
                  { l: 'Ativos', v: scores.Ativos, m: 40 },
                  { l: 'Suporte', v: scores.Suporte, m: 70 },
                  { l: 'Digital', v: scores.Digital, m: 90 }
                ].map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] font-black uppercase mb-2">
                      <span className="text-slate-300">{d.l}</span>
                      <span className="text-blue-400">{Math.round((d.v/d.m)*100)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${(d.v/d.m)*100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <div className="text-4xl font-black text-white">{totalScore}<span className="text-sm text-slate-500 font-normal">/290</span></div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Score Geral de Maturidade</div>
              </div>
            </div>
            <Button variant="primary" className="w-full py-6 rounded-3xl" onClick={() => window.scrollTo(0, 0)}>Solicitar Plano de Ação Completo</Button>
          </div>
        </div>
      </div>
    );
  }

  if (showLeadForm) {
    return (
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 text-center animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto">
        <LayoutDashboard className="mx-auto mb-6 text-blue-600" size={48} />
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Análise Gerada!</h3>
        <p className="text-slate-500 mb-10 leading-relaxed font-medium">Identificamos vulnerabilidades críticas. Preencha seus dados corporativos para desbloquear o dashboard completo e as recomendações técnicas.</p>
        <form onSubmit={(e) => { e.preventDefault(); setCompleted(true); setShowLeadForm(false); }} className="space-y-4">
          <input required type="text" placeholder="Seu Nome Completo" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input required type="text" placeholder="Empresa" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.company} onChange={e => setLeadData({...leadData, company: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="tel" placeholder="WhatsApp" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.whatsapp} onChange={e => setLeadData({...leadData, whatsapp: e.target.value})} />
            <input required type="email" placeholder="E-mail Corporativo" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
          </div>
          <Button variant="primary" size="lg" className="w-full py-6 mt-6 shadow-xl shadow-blue-500/20">Ver Resultado Completo</Button>
          <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Lock size={12} /> Dados Criptografados e Protegidos (LGPD)
          </div>
        </form>
      </div>
    );
  }

  const current = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;

  return (
    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl text-white relative overflow-hidden max-w-4xl mx-auto border border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white"><BarChart3 size={20} /></div>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Diagnóstico de Maturidade 2024</span>
            </div>
            <span className="text-xs text-slate-500 font-black">{step + 1} de {QUESTIONS.length}</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${progress}%` }}></div>
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


import React from 'react';
/* Added AlertTriangle to imports to fix the missing component error */
import {
  CheckCircle2, ArrowRight, Layers, MessageSquare, Database, Workflow,
  Globe, Layout, Laptop, ShieldCheck, Zap, Search, Target, TrendingUp,
  Cpu, Rocket, Settings, Users, Monitor, Smartphone, Code, AlertTriangle
} from 'lucide-react';
import { Button } from '../ui/Button';

export const AutomationFlowPreview = () => (
  <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-600"></div>
    <h4 className="text-white font-bold mb-8 flex items-center gap-2">
      <Workflow size={20} className="text-blue-500" /> Fluxo Inteligente: Site + Automação
    </h4>
    <div className="flex flex-col md:flex-row items-center gap-4 justify-between relative z-10">
      <div className="flex flex-col items-center gap-3 p-4 bg-slate-800 rounded-2xl border border-slate-700 w-full md:w-32 transition-all group-hover:border-blue-500/50">
        <Globe className="text-blue-400" />
        <span className="text-[10px] text-slate-400 font-black uppercase">Novo Lead Site</span>
      </div>
      <div className="text-slate-700 hidden md:block">
        <ArrowRight />
      </div>
      <div className="flex flex-col items-center gap-3 p-4 bg-blue-600 rounded-2xl border border-blue-400 w-full md:w-32 shadow-lg shadow-blue-500/20">
        <Layers className="text-white" />
        <span className="text-[10px] text-white font-black uppercase">IA n8n Process</span>
      </div>
      <div className="text-slate-700 hidden md:block">
        <ArrowRight />
      </div>
      <div className="flex flex-col items-center gap-3 p-4 bg-slate-800 rounded-2xl border border-slate-700 w-full md:w-32 transition-all group-hover:border-indigo-500/50">
        <MessageSquare className="text-green-400" />
        <span className="text-[10px] text-slate-400 font-black uppercase">CRM / WhatsApp</span>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-white/5 text-center">
      <p className="text-xs text-slate-400 italic font-medium">Sincronização imediata entre sua presença digital e seu time comercial.</p>
    </div>
  </div>
);

export const SiteSolutionsGrid = () => {
  const solutions = [
    { title: 'Sites Institucionais', desc: 'Presença digital sólida com foco em autoridade e credibilidade.', icon: <Globe /> },
    { title: 'Landing Pages', desc: 'Páginas de alta conversão focadas em campanhas e captação de leads.', icon: <Target /> },
    { title: 'Sites Corporativos', desc: 'Estruturas complexas para empresas com múltiplos serviços e unidades.', icon: <Layout /> },
    { title: 'Portais Internos', desc: 'Ambientes restritos para colaboradores, documentos e processos.', icon: <Users /> },
    { title: 'Sistemas Web', desc: 'Aplicações sob medida com regras de negócio específicas.', icon: <Database /> },
    { title: 'Sites Automatizados', desc: 'Integrados com n8n para processos automáticos pós-clique.', icon: <Workflow /> },
    { title: 'Integração CRM', desc: 'Dados do site alimentando diretamente seu funil de vendas.', icon: <TrendingUp /> },
    { title: 'Hub de WhatsApp', desc: 'Sites orientados ao contato imediato e triagem por bot.', icon: <MessageSquare /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {solutions.map((s, i) => (
        <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group">
          <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
            {s.icon}
          </div>
          <h4 className="font-bold text-slate-900 mb-2 leading-tight">{s.title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
};

export const DevelopmentProcess = () => {
  const steps = [
    { t: 'Diagnóstico', d: 'Imersão no negócio para entender objetivos e público.', icon: <Search /> },
    { t: 'Arquitetura', d: 'Planejamento de fluxo, SEO e jornada do usuário.', icon: <Layers /> },
    { t: 'Design / UX', d: 'Criação de interface moderna, fluida e responsiva.', icon: <Laptop /> },
    { t: 'Desenvolvimento', d: 'Codificação limpa em Next.js e TypeScript.', icon: <Code /> },
    { t: 'Integrações', d: 'Conexão com CRM, WhatsApp e Automações.', icon: <Zap /> },
    { t: 'Publicação', d: 'Deploy otimizado e indexação no Google.', icon: <Rocket /> },
    { t: 'Evolução', d: 'Acompanhamento de métricas e melhorias contínuas.', icon: <Settings /> }
  ];

  return (
    <div className="relative overflow-hidden py-12">
      <div className="flex flex-col md:flex-row justify-between gap-4 relative z-10">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {s.icon}
            </div>
            <div className="text-[10px] font-black uppercase text-blue-600 mb-1">{i + 1}. {s.t}</div>
            <p className="text-[11px] text-slate-500 max-w-[120px] leading-tight">{s.d}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-7 left-[calc(100%/(steps.length*2))] w-full h-[1px] bg-slate-100 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImpactScenarios = () => {
  const scenarios = [
    {
      p: 'Empresa sem Site ou antigo',
      s: 'A perda de credibilidade digital trava novos fechamentos.',
      r: 'Desenvolvemos um portal moderno que transmite autoridade imediata.'
    },
    {
      p: 'Dependência do Instagram',
      s: 'Algoritmo instável e falta de controle sobre os dados dos leads.',
      r: 'Criamos sua "casa própria" digital com captação direta de e-mails e WhatsApp.'
    },
    {
      p: 'Baixa Conversão de Leads',
      s: 'Usuários entram mas não interagem com a marca.',
      r: 'Landing Pages otimizadas com gatilhos mentais e UX orientado à venda.'
    },
    {
      p: 'Desorganização de Contatos',
      s: 'Leads chegam de várias fontes e se perdem no caminho.',
      r: 'Integramos o site com seu CRM para fluxo automático de atendimento.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {scenarios.map((sc, i) => (
        <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all duration-300">
          <div className="flex gap-4 items-start mb-6">
            <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400">Desafio Atual</span>
              <h5 className="font-bold text-slate-900">{sc.p}</h5>
              <p className="text-sm text-slate-500 mt-1">{sc.s}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-emerald-600">Solução Rocha Tech</span>
              <p className="text-sm text-emerald-900 font-bold">{sc.r}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TechStackBadges = ({ stack }: { stack: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {stack.map((s) => (
      <span key={s} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
        {s}
      </span>
    ))}
  </div>
);

export const CaseStudyHighlight: React.FC<{ item: any }> = ({ item }) => (
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-2xl">
    <div className="aspect-video overflow-hidden">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-8 relative">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{item.client}</span>
          <h4 className="text-2xl font-black text-slate-900 mt-1 tracking-tight">{item.title}</h4>
        </div>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{item.result}</p>
      <div className="flex items-center justify-between">
        <TechStackBadges stack={['Next.js', 'React', 'IA Integration']} />
        <ArrowRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
      </div>
    </div>
  </div>
);

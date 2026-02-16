
import React from 'react';
/* Added AlertTriangle to imports to fix the missing component error */
import {
  CheckCircle2, ArrowRight, Layers, MessageSquare, Database, Workflow,
  Globe, Layout, Laptop, ShieldCheck, Zap, Search, Target, TrendingUp,
  Cpu, Rocket, Settings, Users, Monitor, Smartphone, Code, AlertTriangle
} from 'lucide-react';
import { Button } from '../ui/Button';

export const DigitalPresenceHero = () => (
  <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600"></div>
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
        <Globe size={32} className="text-white" />
      </div>
      <h4 className="text-white font-bold mb-4 text-xl">
        Sua empresa no centro do digital
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
        Não basta ter um site. É preciso ter uma estratégia de posicionamento que transmita autoridade e gere negócios.
      </p>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800/50 -z-0"></div>
    <div className="absolute bottom-0 right-0 p-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
  </div>
);

export const SiteCreationGrid = () => {
  const services = [
    { title: 'Sites Institucionais', desc: 'Sua sede digital oficial. Transmita credibilidade imediata para quem busca sua empresa.', icon: <Globe /> },
    { title: 'Landing Pages', desc: 'Páginas focadas em uma única ação: converter visitantes em leads qualificados.', icon: <Target /> },
    { title: 'Sites Comerciais', desc: 'Vitrines digitais para seus produtos e serviços, otimizadas para venda.', icon: <TrendingUp /> },
    { title: 'Portais Corporativos', desc: 'Estruturas robustas para grandes empresas e organizações.', icon: <Layout /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
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
    { t: 'Diagnóstico', d: 'Entendemos seu mercado, público e objetivos de negócio.', icon: <Search /> },
    { t: 'Estratégia', d: 'Definição da arquitetura de informação e jornada do cliente.', icon: <Layers /> },
    { t: 'UX / UI Design', d: 'Criação de layout exclusivo, moderno e focado na experiência.', icon: <Layout /> },
    { t: 'Desenvolvimento', d: 'Construção técnica com código limpo e alta performance.', icon: <Code /> },
    { t: 'Posicionamento', d: 'Otimização para buscadores (SEO) e presença digital.', icon: <Globe /> },
    { t: 'Lançamento', d: 'Publicação oficial e garantia de funcionamento perfeito.', icon: <Rocket /> }
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
      p: 'Empresa sem Site',
      s: 'Clientes buscam no Google e nâo encontram, indo para a concorrência.',
      r: 'Criação de identidade digital forte para existir no mercado.'
    },
    {
      p: 'Site Antigo / Amador',
      s: 'Visual ultrapassado passa imagem de empresa estagnada ou pouco profissional.',
      r: 'Design moderno e premium que transmite autoridade imediata.'
    },
    {
      p: 'Baixo Posicionamento',
      s: 'Sua marca não é vista como referência no setor.',
      r: 'Estratégia de conteúdo e layout focada em elevar a percepção de valor.'
    },
    {
      p: 'Site que não vende',
      s: 'Visitantes entram e saem sem entrar em contato.',
      r: 'UX focado em conversão e jornada do cliente.'
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
              <span className="text-[10px] font-black uppercase text-slate-400">Problema</span>
              <h5 className="font-bold text-slate-900">{sc.p}</h5>
              <p className="text-sm text-slate-500 mt-1">{sc.s}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-blue-600">Solução Digital</span>
              <p className="text-sm text-blue-900 font-bold">{sc.r}</p>
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

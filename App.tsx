
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Button } from './components/ui/Button';
import { PlanCalculator } from './components/tools/PlanCalculator';
import { DiagnosticQuiz } from './components/tools/DiagnosticQuiz';
import { DevDiagnosticQuiz } from './components/tools/DevDiagnosticQuiz';
import { AIDiagnosticQuiz } from './components/tools/AIDiagnosticQuiz';
import { TechAssistant } from './components/chat/TechAssistant';
import { FixedChat } from './components/chat/FixedChat';
import { ChatSidebar } from './components/chat/ChatSidebar';
import { useTechAssistant } from './components/chat/useTechAssistant';
import { MultiStepDevQuoteForm } from './components/dev/DevQuoteForm';
import {
  AutomationFlowPreview,
  CaseStudyHighlight,
  SiteSolutionsGrid,
  DevelopmentProcess,
  ImpactScenarios
} from './components/dev/DevComponents';
import { InfraView } from './components/infra/InfraView';
import { TechSupportView } from './components/support/TechSupportView';
import { SERVICES, PLANS, CASE_STUDIES, PILLAR_DATA } from './constants';
import { BusinessPillar } from './types';
import {
  Shield, CheckCircle2, MessageCircle, MessageSquare, ArrowRight, Zap, TrendingUp,
  Clock, Globe, Cpu, Headphones, BarChart3, Terminal, Workflow, Bot,
  Database, Search, Star, Users, Briefcase, ZapOff, Sparkles, Layout,
  ShieldCheck, Server, Network, Wifi, Activity, FileText, AlertTriangle,
  Lock, HardDrive, MousePointer2, Settings, BarChart, GlobeLock, MonitorCheck,
  ClipboardCheck, HardHat, Gauge, ShieldAlert, Binary, Rocket, Layers,
  Timer, Target, LineChart, ShieldQuestion, HelpCircle, BookOpen, ClipboardList,
  History, Eye, Scale, UserPlus, UserMinus, WifiOff, Save, Code, Laptop, Brain, Store, Home
} from 'lucide-react';

import { ServicesPillarsAccordion } from './components/home/ServicesPillarsAccordion';
import { ServiceHub } from './components/home/ServiceHub';
import {
  GlowHero,
  ServicesAccordion5,
  FadeInSection,
  StaggerGrid,
  ScrollProgressBar,
  Tooltip,
  MagneticButton
} from './components/motion';

// --- SHARED COMPONENTS ---
const SectionHeading = ({ badge, title, subtitle, centered = false }: { badge: string, title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
      {badge}
    </span>
    <h2 className={`text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {title}
    </h2>
    <p className={`text-lg text-slate-600 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
      {subtitle}
    </p>
  </div>
);

// --- VIEW: HOME ---
const HomeView = ({ setView }: { setView: (v: string) => void }) => {
  const [showFixedChat, setShowFixedChat] = useState(false);
  const chatState = useTechAssistant();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-chat-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show fixed chat when hero bottom is above viewport (scrolled past)
        setShowFixedChat(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white border-4 border-red-600 relative">
      <div className="absolute top-0 left-0 bg-red-600 text-white font-bold px-4 py-1 z-50">VERSÃO DE DEBUG ATIVA - SE VOCÊ VÊ ISSO, O DEPLOY FUNCIONOU</div>
      {/* 1. HERO - CHAT FIRST EXPERIENCE */}
      <GlowHero className="relative pt-32 pb-12 md:pt-40 md:pb-12 overflow-hidden bg-slate-100" glowColor="rgba(16, 185, 129, 0.1)">
        <section id="hero-chat-section">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-slate-50"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
              Integradora de Tecnologia
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Descreva sua necessidade<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">e te orientamos.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Somos uma integradora de tecnologia. Conte o que você busca e indicamos o melhor caminho.
            </p>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Chat Component */}
              <div className="lg:col-span-7">
                <TechAssistant chat={chatState} mode="hero" />
              </div>

              {/* CTA Illustration */}
              <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center space-y-6 p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <MessageCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">Converse com nosso Consultor Digital</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Descreva sua necessidade e receba orientação personalizada em tempo real.
                      </p>
                      <div className="flex flex-col gap-3 w-full pt-4">
                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                          <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                          <span className="text-sm font-medium text-slate-700">Respostas instantâneas</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                          <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                          <span className="text-sm font-medium text-slate-700">Orientação especializada</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                          <CheckCircle2 className="text-purple-600 shrink-0" size={20} />
                          <span className="text-sm font-medium text-slate-700">100% gratuito</span>
                        </div>
                      </div>
                      <div className="pt-4 animate-bounce">
                        <ArrowRight className="text-emerald-600 rotate-180" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GlowHero>

      {/* FIXED CHAT & SIDEBAR */}
      <FixedChat chat={chatState} visible={showFixedChat && !chatState.isOpen} />
      <ChatSidebar chat={chatState} />

      {/* 2. HUB DE SERVIÇOS (PILARES) */}
      <FadeInSection id="service-hub" className="-mt-12 relative z-10" delay={200}>
        <ServicesAccordion5 onSelectCallback={setView} />
      </FadeInSection>

      {/* 5. DIFERENCIAL & AUTHORITY */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Não oferecemos serviços isolados.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
            Nossa autoridade vem de atuar em todas as pontas, garantindo que a tecnologia funcione de verdade.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-70">
            {["EMPRESAS", "COMÉRCIOS", "INDÚSTRIAS", "ESCRITÓRIOS", "RESIDÊNCIAS"].map((label, i) => (
              <span key={i} className="text-lg font-bold tracking-widest">{label}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};


// --- VIEW: TI & CYBER ---
const ITCyberView = ({ setView }: { setView: (v: string) => void }) => {
  const itModules = [
    { id: '01', title: 'Gestão de Servidores', desc: 'Active Directory, GPOs e permissionamento granular de arquivos.', icon: <Server size={20} />, color: 'blue' },
    { id: '02', title: 'Proteção de Rede', desc: <><Tooltip term="Firewall NGFW" definition="Next-Generation Firewall: Proteção avançada com inspeção de pacotes e controle de aplicações." />, WebFilter, <Tooltip term="IPS/IDS" definition="Intrusion Prevention/Detection System: Monitoramento ativo contra invasões em tempo real." /> e VPN segura para acesso remoto.</>, icon: <ShieldAlert size={20} />, color: 'red' },
    { id: '03', title: 'Infra de Rede', desc: 'Switches gerenciados, segmentação por VLAN e Wi-Fi de alta densidade.', icon: <Network size={20} />, color: 'indigo' },
    { id: '04', title: 'Gestão de Ativos', desc: 'Inventário, preventiva e onboarding/offboarding seguro de hardware.', icon: <Binary size={20} />, color: 'slate' },
    { id: '05', title: 'Backup & Continuidade', desc: 'Estratégia 3-2-1 com monitoramento diário e teste de restore.', icon: <HardDrive size={20} />, color: 'green' },
    { id: '06', title: 'Governança & Decisão', desc: 'Assumimos a responsabilidade técnica e o ROI em investimentos.', icon: <Gauge size={20} />, color: 'amber' },
    { id: '07', title: 'Estratégia & Futuro', desc: 'Roadmap de 24 meses alinhando tecnologia e crescimento de escala.', icon: <Rocket size={20} />, color: 'purple' },
    { id: '08', title: 'Suporte Operacional', desc: 'Atendimento humanizado remoto e presencial focado em alta produtividade.', icon: <Headphones size={20} />, color: 'slate' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
      case 'red': return 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white';
      case 'indigo': return 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white';
      case 'green': return 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white';
      case 'amber': return 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white';
      case 'purple': return 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
      default: return 'bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white';
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 bg-white">
      {/* Hero */}
      <GlowHero>
        <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[150px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                  Managed IT Services & Cyber Intelligence
                </span>
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                  Gestão Contínua e <br />
                  <span className="text-blue-500">Operação Completa de T.I.</span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
                  Atuamos como um departamento de TI terceirizado completo através do <strong>Rocha IT Operating Model</strong>: uma metodologia modular desenhada para empresas que exigem 100% de disponibilidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton><Button size="lg" onClick={() => setView('contato')}>Solicitar Orçamento Estratégico</Button></MagneticButton>
                  <MagneticButton><Button variant="outline" className="text-white border-slate-700" onClick={() => document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })}>Ver Framework de Gestão</Button></MagneticButton>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Cybersecurity Shield"
                  className="rounded-3xl shadow-2xl border border-slate-700/50 relative z-10 hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-blue-200">SYSTEM_STATUS: PROTECTED</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GlowHero>

      {/* The 3 Pillars */}
      <FadeInSection>
        <section id="pillars" className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Fundamentos da Operação</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Três pilares para uma infraestrutura inabalável.</h2>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4 border border-slate-800">
                <BookOpen className="text-blue-500" />
                <span className="text-sm font-bold">Metodologia Corporativa Rocha Tech</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg mb-6"><Cpu /></div>
                <h3 className="text-xl font-bold mb-4">Infraestrutura</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Gestão física e lógica dos componentes que sustentam a operação: servidores, rede e ativos de hardware.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg mb-6"><ShieldCheck /></div>
                <h3 className="text-xl font-bold mb-4">Segurança</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Blindagem multicamada dos dados e sistemas, garantindo conformidade legal e prevenção contra ataques cibernéticos.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg mb-6"><Users /></div>
                <h3 className="text-xl font-bold mb-4">Suporte & Gestão</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Atendimento ágil aos usuários aliado à governança técnica e consultoria para expansão do negócio.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* The 8 Modules Refactored */}
      <section id="framework" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Rocha IT Operating Model"
            title="Manual de Operação Integrada (8 Módulos)"
            subtitle="Nossa prestação de serviço é dividida em módulos especialistas para eliminar pontos únicos de falha e garantir governança total."
            centered
          />

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" columns={4}>
            {itModules.map((module) => (
              <div key={module.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-blue-500 transition-all group shadow-sm hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${getColorClasses(module.color)}`}>
                    {module.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Módulo {module.id}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">{module.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4">{module.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* TI NA PRÁTICA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Manual do Dia a Dia"
            title="Como atuamos na prática dentro das empresas"
            subtitle="A Rocha não apenas suporte. Entregamos resolução resolutiva de situações reais com agilidade e critério técnico."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Settings className="text-blue-600" />,
                title: "Colaborador não acessa sistema",
                situation: "Usuário sem acesso ao ERP ou arquivos críticos da rede.",
                action: "Verificação de permissões no AD, configuração de protocolos de acesso e ajuste granular no servidor.",
                result: "Acesso restabelecido com segurança e controle total."
              },
              {
                icon: <WifiOff className="text-indigo-600" />,
                title: "Internet instável na empresa",
                situation: "Quedas constantes de conexão e lentidão que travam a produtividade.",
                action: "Análise profunda de rede, priorização de tráfego (QoS) e ajuste de failover no firewall.",
                result: "Estabilidade garantida e continuidade do trabalho sem gargalos."
              },
              {
                icon: <ShieldAlert className="text-red-600" />,
                title: "Risco de vírus ou ataque",
                situation: "Arquivos suspeitos ou comportamento incomum detectado em uma máquina.",
                action: "Monitoramento em tempo real, bloqueio preventivo via IPS e isolamento imediato da estação.",
                result: "Blindagem do ambiente antes que qualquer impacto atinja a rede."
              },
              {
                icon: <UserPlus className="text-emerald-600" />,
                title: "Novo colaborador entra na empresa",
                situation: "Funcionário novo precisa de e-mail, pastas e acessos imediatos.",
                action: "Execução do protocolo de onboarding: criação de usuário, e-mail e permissões via GPO.",
                result: "Integração segura, organizada e sem atrasos na jornada do colaborador."
              },
              {
                icon: <UserMinus className="text-slate-600" />,
                title: "Colaborador desligado",
                situation: "Necessidade de garantir que ex-funcionário não tenha mais acesso aos dados.",
                action: "Remoção instantânea de acessos, backup de arquivos locais e bloqueio de credenciais cloud.",
                result: "Proteção total dos dados proprietários e conformidade com compliance."
              },
              {
                icon: <HardHat className="text-amber-600" />,
                title: "Equipamentos apresentando falhas",
                situation: "Computadores lentos ou parando por falta de manutenção.",
                action: "Aplicação de manutenção preventiva programada e padronização de setup operacional.",
                result: "Redução drástica de interrupções e aumento da vida útil do hardware."
              },
              {
                icon: <Save className="text-blue-600" />,
                title: "Dados importantes da empresa",
                situation: "Arquivos estratégicos precisam estar blindados contra perdas.",
                action: "Implementação de rotinas redundantes de backup com monitoramento ativo 24/7.",
                result: "Continuidade operacional absoluta e garantia de restauração imediata."
              },
              {
                icon: <TrendingUp className="text-indigo-600" />,
                title: "Empresa crescendo rápido",
                situation: "Abertura de novos setores exigindo mais usuários e rede estável.",
                action: "Planejamento de escalonamento da infraestrutura e organização lógica da rede.",
                result: "A tecnologia acompanha o crescimento do negócio sem gerar gargalos."
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-white/50 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Situação</span>
                        <p className="text-sm text-slate-600">{item.situation}</p>
                      </div>
                      <div className="p-4 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/10 group-hover:-translate-y-1 transition-transform">
                        <span className="text-[10px] font-black uppercase text-blue-200 block mb-1">Ação Rocha Tech</span>
                        <p className="text-sm text-white font-medium">{item.action}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <span className="text-[10px] font-black uppercase text-emerald-600 block mb-1">Resultado</span>
                        <p className="text-sm text-emerald-700 font-bold">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ DE DIAGNÓSTICO E MATURIDADE (29 PERGUNTAS) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Auditoria Digital Completa</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Diagnóstico rápido de riscos e maturidade de T.I.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Avalie em poucos minutos a segurança, organização, gestão digital e suporte tecnológico da sua operação.</p>
          </div>
          <DiagnosticQuiz />
        </div>
      </section>

      {/* Business Impact Matrix */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            badge="Valor Entregue"
            title="O Impacto Real no seu Business"
            subtitle="Entendemos que a TI é o coração da operação. Nosso modelo gera resultados em três dimensões críticas."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8"><ShieldAlert /></div>
              <h4 className="text-xl font-bold mb-6 text-red-900">Impacto Crítico</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Continuidade Operacional</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Zero Perda de Dados</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Proteção Anti-Ransomware</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8"><Target /></div>
              <h4 className="text-xl font-bold mb-6 text-blue-900">Impacto Estratégico</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> ROI em Investimentos Técnicos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Planejamento de Escala</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Conformidade LGPD</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8"><Zap /></div>
              <h4 className="text-xl font-bold mb-6 text-emerald-900">Impacto Operacional</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Produtividade Máxima</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Ambiente Padronizado</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Zero Retrabalho Técnico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            centered
            badge="Mude o nível da sua TI"
            title="Sua empresa está pronta para uma Gestão Profissional?"
            subtitle="Saia do amadorismo reativo. Adote o Rocha IT Operating Model e transforme sua infraestrutura em um ativo estratégico de crescimento."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" onClick={() => setView('contato')}>Falar com Especialista em Gestão</Button>
            <Button variant="outline" size="lg" onClick={() => window.scrollTo(0, 0)}>Voltar ao Topo</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- VIEW: DEV & AUTOMATION ---
const DevAutoView = ({ setView }: { setView: (v: string) => void }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-1000 bg-white">
    {/* Hero Section */}
    <GlowHero>
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Engineering & Strategic Design
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Sites profissionais que representam sua empresa e geram <span className="text-blue-500">oportunidades reais.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
                Desenvolvimento estratégico, performance absoluta, SEO técnico e integração profunda com automações e sistemas legados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setView('contato')}>Quero criar meu site</Button>
                <Button variant="outline" className="text-white border-slate-700" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>Ver Processo</Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="border border-slate-700/50 bg-slate-800/50 rounded-3xl h-[400px] flex items-center justify-center">
                <Layout className="text-slate-600" size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </GlowHero>

    {/* Diagnóstico da Presença Digital */}
    <div className="py-24 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Diagnóstico da Presença Digital</h2>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Entenda como sua empresa está posicionada online e descubra oportunidades de crescimento e automação.</p>
    </div>
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <DevDiagnosticQuiz />
    </div>

    {/* Sections included in DevAutoView flow */}
    <DevelopmentProcessSection />
    <ImpactScenariosSection />
    <CasesSection />
    <QuoteSection />
    <FinalCTASection setView={setView} />
  </div >
);

{/* Como Funciona o Desenvolvimento */ }
const DevelopmentProcessSection = () => (
  <section id="process" className="py-24 bg-slate-50 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        badge="Nossa Metodologia"
        title="O caminho para sua nova Presença Digital"
        subtitle="Um fluxo transparente e rigoroso para garantir que o resultado final supere suas expectativas e objetivos comerciais."
        centered
      />
      <DevelopmentProcess />
    </div>
  </section>
);

{/* Cenários Práticos */ }
const ImpactScenariosSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        badge="Foco em Resultado"
        title="Situações reais, soluções estratégicas."
        subtitle="Identificamos onde seu negócio está travado digitalmente e como um site profissional resolve o problema."
      />
      <ImpactScenarios />
    </div>
  </section>
);

{/* Cases e Projetos */ }
const CasesSection = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        badge="Portfolio"
        title="Casos de Sucesso"
        subtitle="Conheça alguns dos projetos que transformaram a operação digital de nossos clientes."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {CASE_STUDIES.filter(c => c.pillar === BusinessPillar.DEV_AUTO).map(c => (
          <CaseStudyHighlight key={c.id} item={c} />
        ))}
      </div>
    </div>
  </section>
);

{/* Quote Form Section */ }
const QuoteSection = () => (
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-3xl rounded-full"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Próximo Passo</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Vamos construir <br /> algo grande?</h2>
          <p className="text-xl text-slate-400 mb-12">Dê o primeiro passo para profissionalizar sua presença digital e escalar seus resultados com tecnologia de ponta.</p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500"><Zap size={20} /></div>
              <div>
                <h5 className="font-bold text-white">Velocidade de Entrega</h5>
                <p className="text-sm text-slate-500">Projetos estruturados para lançamento ágil sem perda de qualidade.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-500"><GlobeLock size={20} /></div>
              <div>
                <h5 className="font-bold text-white">Segurança Total</h5>
                <p className="text-sm text-slate-500">Blindagem contra ataques e conformidade total com a LGPD.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
          <MultiStepDevQuoteForm />
        </div>
      </div>
    </div>
  </section>
);

{/* Final CTA */ }
const FinalCTASection = ({ setView }: { setView: (v: string) => void }) => (
  <section className="py-24 bg-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading
        centered
        badge="Inovação e escala"
        title="Pronto para modernizar sua Presença Digital?"
        subtitle="Não aceite menos que a excelência técnica. Transforme seu site em uma máquina de captação e autoridade."
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Button size="lg" onClick={() => setView('contato')}>Falar com Especialista em Projetos</Button>
        <Button variant="outline" size="lg" onClick={() => window.scrollTo(0, 0)}>Voltar ao Topo</Button>
      </div>
    </div>
  </section>
);

// --- VIEW: AI CONSULTING ---
const AIConsultingView = ({ setView }: { setView: (v: string) => void }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-700 bg-white">
    {/* Hero Section */}
    <GlowHero>
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-50/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                AI Strategy & Engineering
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                A Inteligência Artificial como sua <span className="text-emerald-500">vantagem competitiva.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
                Não implementamos apenas bots. Redesenhamos processos para que sua empresa utilize a IA de forma segura, ética e altamente lucrativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 border-none" onClick={() => setView('contato')}>Quero Consultoria em IA</Button>
                <Button variant="outline" className="text-white border-slate-700" onClick={() => document.getElementById('quiz-ia')?.scrollIntoView({ behavior: 'smooth' })}>Diagnosticar Maturidade</Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                alt="Artificial Intelligence"
                className="rounded-3xl shadow-2xl border border-slate-700/50 relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-slate-700 shadow-2xl z-20">
                <Activity className="text-emerald-500 h-8 w-8 mb-2" />
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-slate-700 rounded"></div>
                  <div className="h-1 w-8 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GlowHero>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Consultoria Estratégica"
          title="Inovação com Pés no Chão"
          subtitle="Atuamos na transição digital das empresas, garantindo que a tecnologia sirva ao business, e não o contrário."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-900">O Problema do "Hype"</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">Muitas empresas sabem que precisam de IA, mas não sabem por onde começar ou como garantir a segurança dos seus dados proprietários.</p>
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 flex items-start gap-4">
              <ZapOff className="text-red-500 shrink-0" size={24} />
              <div>
                <p className="text-sm text-red-900 font-bold mb-1">Cuidado com o uso desprotegido</p>
                <p className="text-xs text-red-700 leading-relaxed">O uso indiscriminado de ferramentas de IA pode expor dados sensíveis, gerar alucinações perigosas e comprometer a conformidade legal da sua marca.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Rocha AI Framework</h3>
            {[
              { t: 'Diagnóstico & Auditoria', d: 'Identificamos os pontos cegos, riscos de segurança e oportunidades de lucro imediato.', icon: <Search /> },
              { t: 'Mapeamento de Processos', d: 'Onde a IA pode economizar mais tempo e dinheiro? Criamos o roadmap de prioridades.', icon: <Target /> },
              { t: 'Implementação de Agentes', d: 'Introdução guiada de ferramentas, automações e LLMs privadas de alta performance.', icon: <Bot /> },
              { t: 'Treinamento & Cultura', d: 'Capacitamos seu time para dominar a tecnologia de forma ética e profissional.', icon: <Users /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group p-4 hover:bg-slate-50 rounded-2xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">{item.t}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* DIAGNÓSTICO DE IA INTEGRADO */}
    <section id="quiz-ia" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-emerald-500/5 blur-3xl rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Ferramenta Organizacional</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Diagnóstico de Maturidade em IA</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Avalie o uso, a governança e os riscos da Inteligência Artificial na sua operação hoje.</p>
        </div>
        <AIDiagnosticQuiz />
      </div>
    </section>

    {/* Oportunidades por Setor */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Onde Aplicar"
          title="O Impacto da IA por Departamento"
          subtitle="Cada área da sua empresa pode ser potencializada com Agentes de IA especializados."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: 'Vendas & CRM', d: 'Qualificação automática de leads e resumo de reuniões para o comercial.', icon: <TrendingUp /> },
            { t: 'Suporte & Atendimento', d: 'Bots que resolvem 80% das dúvidas comuns sem intervenção humana.', icon: <MessageSquare /> },
            { t: 'RH & Onboarding', d: 'Triagem de currículos e assistente de treinamento para novos colaboradores.', icon: <UserPlus /> },
            { t: 'Financeiro', d: 'Análise de fluxo de caixa e detecção de anomalias em tempo real.', icon: <BarChart3 /> },
            { t: 'Operacional', d: 'Automação de documentos complexos e extração de dados de contratos.', icon: <FileText /> },
            { t: 'Desenvolvimento', d: 'Aceleração de codificação e geração de testes automáticos.', icon: <Code /> }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-50"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Sparkles className="mx-auto mb-8 text-emerald-400" size={64} />
        <h3 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Mude o jogo <br /> com IA Estratégica.</h3>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Saia da inércia e lidere o mercado com uma operação assistida por Inteligência Artificial sob medida para o seu business.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" className="bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 border-none" onClick={() => setView('contato')}>Quero Implementar IA agora</Button>
          <Button variant="outline" size="lg" className="text-white border-slate-700 hover:bg-white/5" onClick={() => window.scrollTo(0, 0)}>Voltar ao Topo</Button>
        </div>
      </div>
    </section>
  </div>
);

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView setView={setCurrentView} />;
      case BusinessPillar.IT_CYBER: return <ITCyberView setView={setCurrentView} />;
      case BusinessPillar.DEV_AUTO: return (
        <>
          <DevAutoView setView={setCurrentView} />
          <DevelopmentProcessSection />
          <ImpactScenariosSection />
          <CasesSection />
          <QuoteSection />
          <FinalCTASection setView={setCurrentView} />
        </>
      );
      case BusinessPillar.AI_CONSULTING: return <AIConsultingView setView={setCurrentView} />;
      case BusinessPillar.INFRA_TECH: return <InfraView setView={setCurrentView} />;
      case BusinessPillar.TECHNICAL_SUPPORT: return <TechSupportView setView={setCurrentView} />;
      case 'planos': return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <SectionHeading badge="Contratos" title="Planos & Acordos de Nível de Serviço" subtitle="Transparência total e flexibilidade para o seu crescimento." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {PLANS.map(p => (
              <div key={p.id} className={`p-10 rounded-3xl bg-white border border-slate-200 flex flex-col ${p.isPopular ? 'ring-2 ring-blue-600' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="text-blue-600 font-black mb-6">{p.priceTag}</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f, i) => <li key={i} className="text-sm text-slate-600 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> {f}</li>)}
                </ul>
                <Button variant={p.isPopular ? 'primary' : 'outline'} className="w-full">Saber Mais</Button>
              </div>
            ))}
          </div>
          <PlanCalculator />
        </div>
      );
      case 'cases': return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <SectionHeading badge="Cases de Sucesso" title="Resultados que falam por nós" subtitle="Veja como transformamos a realidade tecnológica de nossos parceiros." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map(c => <CaseStudyHighlight key={c.id} item={c} />)}
          </div>
        </div>
      );
      case 'contato': return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading badge="Contato" title="Vamos conversar?" subtitle="Selecione o pilar de interesse e receba um atendimento especializado." />
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Briefcase size={20} className="text-blue-600" /> Canais Diretos</h4>
                  <p className="text-slate-600 text-sm">Comercial: (11) 99999-0000</p>
                  <p className="text-slate-600 text-sm">Email: comercial@rochatech.com.br</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Novo Projeto</h3>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none" placeholder="Nome" />
                <input type="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none" placeholder="Email Corporativo" />
                <select className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none">
                  <option>Interesse: TI & Cybersegurança</option>
                  <option>Interesse: Desenvolvimento & Automação</option>
                  <option>Interesse: Consultoria em IA</option>
                </select>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 rounded-xl outline-none" placeholder="Fale sobre sua necessidade"></textarea>
                <Button variant="primary" className="w-full">Enviar Solicitação</Button>
              </form>
            </div>
          </div>
        </div>
      );
      default: return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="min-h-[70vh]">
        {renderView()}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
              <span className="font-bold text-xl tracking-tight text-white">Rocha <span className="text-blue-600">Tech</span></span>
            </div>
            <p className="text-sm">Infraestrutura, Software e Inteligência Artificial para empresas.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Soluções</h5>
            <ul className="text-sm space-y-3">
              <li><button onClick={() => setCurrentView(BusinessPillar.IT_CYBER)}>TI & Cybersegurança</button></li>
              <li><button onClick={() => setCurrentView(BusinessPillar.DEV_AUTO)}>Dev & Automação</button></li>
              <li><button onClick={() => setCurrentView(BusinessPillar.AI_CONSULTING)}>Consultoria IA</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Empresa</h5>
            <ul className="text-sm space-y-3">
              <li><button onClick={() => setCurrentView('cases')}>Cases</button></li>
              <li><button onClick={() => setCurrentView('planos')}>Planos</button></li>
              <li><button onClick={() => setCurrentView('home')}>Sobre</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Legal</h5>
            <ul className="text-sm space-y-3">
              <li>Privacidade</li>
              <li>Termos de Uso</li>
              <li>LGPD</li>
            </ul>
          </div>
        </div>
      </footer>
      <button
        onClick={() => window.open('https://wa.me/5500000000000')}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

export default App;

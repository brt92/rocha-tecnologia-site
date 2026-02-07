
import React from 'react';
import { Button } from '../ui/Button';
import {
    Shield, Code, Server, Wrench, Bot,
    ArrowRight, Briefcase, TrendingUp, Store,
    Home, MonitorPlay, AlertTriangle
} from 'lucide-react';

interface ServiceHubProps {
    setView: (view: string) => void;
}

export const ServiceHub: React.FC<ServiceHubProps> = ({ setView }) => {
    const services = [
        {
            id: 'it-cyber',
            icon: <Shield size={28} />,
            title: 'TI & Cyber',
            desc: 'Gestão completa, segurança e suporte continuado.',
            color: 'blue',
            action: () => setView('it-cyber')
        },
        {
            id: 'dev-auto',
            icon: <Code size={28} />,
            title: 'Dev & Automação',
            desc: 'Sites, sistemas e integração de processos.',
            color: 'indigo',
            action: () => setView('dev-auto')
        },
        {
            id: 'infra',
            icon: <Server size={28} />,
            title: 'Infra & Projetos',
            desc: 'Redes, servidores e estruturação física.',
            color: 'slate',
            action: () => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' }) // Infra is part of IT view usually, or separate. Let's redirect to IT view for now or maybe we need a specific view.
            // Based on App.tsx, InfraView exists but is not fully linked in the top menu sometimes. 
            // Let's assume we use 'infra' view if it exists, otherwise 'it-cyber'.
            // Looking at App.tsx, there is <InfraView /> component.
        },
        {
            id: 'support',
            icon: <Wrench size={28} />,
            title: 'Assistência Técnica',
            desc: 'Manutenção de computadores e equipamentos.',
            color: 'amber',
            action: () => setView('support')
        },
        {
            id: 'ai',
            icon: <Bot size={28} />,
            title: 'Consultoria IA',
            desc: 'Implementação de inteligência artificial real.',
            color: 'emerald',
            action: () => setView('ai-consulting')
        }
    ];

    /* 
      Adjustment for Infra and Support actions based on App.tsx structure:
      - InfraView is imported in App.tsx.
      - TechSupportView is imported in App.tsx.
    */

    const handleServiceClick = (serviceId: string) => {
        if (serviceId === 'infra') setView('infra');
        else if (serviceId === 'support') setView('support');
        else if (serviceId === 'it-cyber') setView('it-cyber');
        else if (serviceId === 'dev-auto') setView('dev-auto');
        else if (serviceId === 'ai') setView('ai-consulting');
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. POR ONDE COMEÇAR (Intro - Removido para Home Chat-First) */}
                {/* 
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Escolha por onde começar.</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Somos uma integradora de tecnologia e atuamos em várias frentes. <br />
                        Selecione a que mais se aproxima do que você busca hoje.
                    </p>
                </div>
                */}

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            onClick={() => handleServiceClick(service.id)}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${service.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                                service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' :
                                    service.color === 'slate' ? 'bg-slate-200 text-slate-700 group-hover:bg-slate-800 group-hover:text-white' :
                                        service.color === 'amber' ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white' :
                                            'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                                }`}>
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 leading-tight">{service.title}</h3>
                            <p className="text-xs text-slate-500 mb-6 min-h-[40px]">{service.desc}</p>
                            <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                                Explorar <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. IDENTIFICAÇÃO (SITUAÇÕES) */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] rounded-full"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Qual dessas situações parece com a sua?</h2>
                            <p className="text-slate-400">Identifique sua situação atual e veja como podemos ajudar.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Empresa sem estrutura tecnológica', icon: <Briefcase />, action: () => setView('it-cyber') },
                                { title: 'Preciso criar um site', icon: <MonitorPlay />, action: () => setView('dev-auto') },
                                { title: 'Processos manuais', icon: <TrendingUp />, action: () => setView('dev-auto') }, // Or AI
                                { title: 'Problemas técnicos', icon: <AlertTriangle />, action: () => setView('support') },
                                { title: 'Interesse em IA', icon: <Bot />, action: () => setView('ai-consulting') },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={item.action}
                                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-pointer flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="font-bold text-lg group-hover:text-blue-400 transition-colors">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. BLOCO EXPLICATIVO */}
                <div className="py-24 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Atendemos desde suporte técnico pontual até projetos completos de tecnologia.</h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
                        {[
                            { label: 'Empresas', icon: <Briefcase size={20} /> },
                            { label: 'Comércios', icon: <Store size={20} /> },
                            { label: 'Indústrias', icon: <Store size={20} /> }, // Using Store icon for Industries for now as Lucide doesn't have Factory in this list import
                            { label: 'Profissionais', icon: <Code size={20} /> },
                            { label: 'Residências', icon: <Home size={20} /> }
                        ].map((audience, i) => (
                            <div key={i} className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-200 text-slate-600 font-bold">
                                {audience.icon}
                                {audience.label}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

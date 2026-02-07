import React, { useState } from 'react';
import {
    Shield, Terminal, Network, Wrench, Sparkles,
    ArrowRight, ExternalLink
} from 'lucide-react';
import { BusinessPillar } from '../../types';

interface ServiceSlide {
    id: string;
    pillar: string;
    title: string;
    subtitle: string;
    description: string;
    chips: string[];
    icon: React.ElementType;
    color: string;
    bgGradient: string;
}

const services: ServiceSlide[] = [
    {
        id: '01',
        pillar: BusinessPillar.IT_CYBER,
        title: 'TI & Cybersegurança',
        subtitle: 'Gestão, suporte e proteção.',
        description: 'Monitoramento 24/7, Firewall, Backup e governança de TI.',
        chips: ['Suporte', 'Firewall', 'Backup'],
        icon: Shield,
        color: 'text-blue-400',
        bgGradient: 'from-slate-900 to-slate-800'
    },
    {
        id: '02',
        pillar: BusinessPillar.DEV_AUTO,
        title: 'Dev & Automação',
        subtitle: 'Software e Eficiência.',
        description: 'Sites, sistemas web e automações que escalam seu negócio.',
        chips: ['Sites', 'Sistemas', 'WhatsApp'],
        icon: Terminal,
        color: 'text-indigo-400',
        bgGradient: 'from-indigo-950 to-slate-900'
    },
    {
        id: '03',
        pillar: BusinessPillar.INFRA_TECH,
        title: 'Infra & Projetos',
        subtitle: 'Engenharia de Ambientes.',
        description: 'Cabeamento, Wi-Fi, CFTV e elétrica para empresas e residências.',
        chips: ['PDV', 'Redes', 'Ambientes'],
        icon: Network,
        color: 'text-sky-400',
        bgGradient: 'from-slate-900 to-sky-950'
    },
    {
        id: '04',
        pillar: BusinessPillar.TECHNICAL_SUPPORT,
        title: 'Assistência Técnica',
        subtitle: 'Manutenção Especializada.',
        description: 'Reparos e suporte pontual para equipamentos e usuários.',
        chips: ['Notebooks', 'Upgrades', 'Instalação'],
        icon: Wrench,
        color: 'text-emerald-400',
        bgGradient: 'from-emerald-950 to-slate-900'
    },
    {
        id: '05',
        pillar: BusinessPillar.AI_CONSULTING,
        title: 'Consultoria IA',
        subtitle: 'Inteligência Estratégica.',
        description: 'Implementação de IA segura para otimizar processos.',
        chips: ['Treinamento', 'Processos', 'Implantação'],
        icon: Sparkles,
        color: 'text-purple-400',
        bgGradient: 'from-purple-950 to-slate-900'
    }
];

export const ServicesPillarsAccordion = ({ setView }: { setView: (v: string) => void }) => {
    const [activeId, setActiveId] = useState<string>('01');

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Explore nossas soluções</h2>
                <p className="text-lg text-slate-500">Escolha a área e veja como podemos ajudar sua empresa a evoluir.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 h-[500px] hidden lg:flex gap-4">
                {services.map((service) => {
                    const isActive = activeId === service.id;

                    return (
                        <div
                            key={service.id}
                            onClick={() => setView(service.pillar)}
                            onMouseEnter={() => setActiveId(service.id)}
                            className={`
                relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out
                ${isActive ? 'w-[45%]' : 'w-[13.75%]'}
                bg-gradient-to-br ${service.bgGradient}
                group shadow-xl hover:shadow-2xl border border-slate-100/10
              `}
                        >
                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-black/20 ${isActive ? 'opacity-0' : 'opacity-40'} transition-opacity duration-500`} />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                {/* Icon (Top or Floating) */}
                                <div className={`
                   absolute top-8 left-8 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10
                   transition-all duration-500
                   ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-90'}
                `}>
                                    <service.icon className={`${service.color}`} size={24} />
                                </div>

                                {/* Vertical Text (Inactive State) */}
                                <div className={`
                    absolute bottom-24 left-1/2 -translate-x-1/2 origin-left -rotate-90 whitespace-nowrap
                    transition-all duration-300
                    ${isActive ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                `}>
                                    <span className="text-lg font-bold text-slate-400 tracking-wider uppercase">{service.title}</span>
                                </div>

                                {/* Expanded Content */}
                                <div className={`
                   transition-all duration-500 delay-75
                   ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute bottom-8'}
                `}>
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{service.title}</h3>
                                    <p className={`text-lg font-medium ${service.color} mb-4`}>{service.subtitle}</p>

                                    {isActive && (
                                        <>
                                            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {service.chips.map((chip, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/5 text-xs text-slate-300 font-medium">
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>

                                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm tracking-wide hover:bg-blue-50 transition-colors">
                                                Explorar Serviço <ArrowRight size={16} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Fallback (Vertical Stack) */}
            <div className="lg:hidden flex flex-col gap-4 px-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setView(service.pillar)}
                        className={`p-6 rounded-2xl bg-gradient-to-br ${service.bgGradient} text-white`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-white/10">
                                <service.icon className={service.color} size={20} />
                            </div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
                            Explorar <ArrowRight size={12} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

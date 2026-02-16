
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Code, Server, Wrench, Bot } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn, MOTION } from '../../utils/MotionTokens';

interface ServicePillar {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgClass: string;
    textClass: string;
}

const pillars: ServicePillar[] = [
    {
        id: 'it',
        title: 'TI & Cyber',
        subtitle: 'Gestão Completa',
        description: 'Terceirização de TI, segurança de dados e monitoramento 24/7.',
        icon: <Shield size={24} />,
        color: '#3b82f6',
        bgClass: 'bg-blue-50',
        textClass: 'text-blue-600'
    },
    {
        id: 'dev',
        title: 'Dev & Web',
        subtitle: 'Sistemas & Sites',
        description: 'Desenvolvimento de software, sites de alta performance e automações.',
        icon: <Code size={24} />,
        color: '#6366f1',
        bgClass: 'bg-indigo-50',
        textClass: 'text-indigo-600'
    },
    {
        id: 'infra',
        title: 'Infra',
        subtitle: 'Redes & Projetos',
        description: 'Cabeamento estruturado, wi-fi corporativo e servidores.',
        icon: <Server size={24} />,
        color: '#64748b',
        bgClass: 'bg-slate-50',
        textClass: 'text-slate-600'
    },
    {
        id: 'support',
        title: 'Suporte',
        subtitle: 'Helpdesk Ágil',
        description: 'Atendimento técnico rápido para resolver problemas do dia a dia.',
        icon: <Wrench size={24} />,
        color: '#f59e0b',
        bgClass: 'bg-amber-50',
        textClass: 'text-amber-600'
    },
    {
        id: 'ai',
        title: 'IA',
        subtitle: 'Consultoria',
        description: 'Implementação de inteligência artificial para otimizar processos.',
        icon: <Bot size={24} />,
        color: '#10b981',
        bgClass: 'bg-emerald-50',
        textClass: 'text-emerald-600'
    }
];

interface ServicesAccordion5Props {
    onSelectCallback?: (id: string) => void;
}

export const ServicesAccordion5: React.FC<ServicesAccordion5Props> = ({ onSelectCallback }) => {
    const [activeId, setActiveId] = useState<string | null>('it');

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
                {pillars.map((pillar) => {
                    const isActive = activeId === pillar.id;

                    return (
                        <motion.div
                            key={pillar.id}
                            layout
                            onClick={() => setActiveId(pillar.id)}
                            className={cn(
                                "relative rounded-[2rem] overflow-hidden cursor-pointer transition-shadow hover:shadow-xl",
                                isActive ? "lg:flex-[3]" : "lg:flex-[1]",
                                "flex flex-col h-[200px] lg:h-auto border border-slate-100",
                                pillar.bgClass
                            )}
                            initial={false}
                            animate={{
                                flex: isActive ? 3 : 1
                            }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        >
                            <div className="p-6 md:p-8 flex flex-col h-full justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <motion.div
                                        layout="position"
                                        className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm", pillar.textClass)}
                                    >
                                        {pillar.icon}
                                    </motion.div>
                                </div>

                                <div className="mt-auto">
                                    <motion.div layout="position">
                                        <h3 className={cn("text-xl md:text-2xl font-black mb-1 leading-tight", isActive ? "text-slate-900" : "text-slate-700")}>
                                            {pillar.title}
                                        </h3>
                                        {!isActive && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-sm font-medium opacity-60"
                                            >
                                                {pillar.subtitle}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <AnimatePresence mode="popLayout">
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ delay: 0.1, duration: 0.3 }}
                                                className="pt-4"
                                            >
                                                <p className="text-slate-600 mb-6 text-base md:text-lg leading-relaxed max-w-md">
                                                    {pillar.description}
                                                </p>
                                                <Button
                                                    className="gap-2 group"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSelectCallback && onSelectCallback(pillar.id);
                                                    }}
                                                >
                                                    Explorar Solução
                                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Background Decoration */}
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-0 right-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full pointer-events-none"
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

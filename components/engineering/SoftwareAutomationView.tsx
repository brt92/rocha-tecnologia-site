
import React from 'react';
import {
    ArrowRight, CheckCircle, Terminal, Code, Cpu
} from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import {
    EngineeringHeroPreview,
    SystemsGrid,
    AutomationTree,
    IntegrationsDisplay
} from './EngineeringComponents';

// Local text components for modularity
const EngineeringSectionHeading = ({ badge, title, subtitle, centered = false }: { badge: string, title: string, subtitle: string, centered?: boolean }) => (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-4">
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

export const SoftwareAutomationView = ({ setView }: { setView: (v: string) => void }) => (
    <div className="bg-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="pt-40 pb-24 bg-slate-950 relative overflow-hidden text-white">
            {/* Background Tech Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="px-3 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono mb-6 inline-block">
                            {'<Engineering & Automation />'}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            Desenvolvemos sistemas, plataformas e <span className="text-cyan-500">automações</span> para empresas.
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                            Soluções tecnológicas sob medida para otimizar processos, integrar ferramentas e escalar operações complexas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-none" onClick={() => setView('contato')}>Desenvolver Solução</Button>
                            <Button variant="outline" className="text-white border-slate-700 hover:bg-slate-800" onClick={() => setView('contato')}>Falar com Especialista</Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <EngineeringHeroPreview />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-slate-900 mb-8"
                >
                    Nossa abordagem técnica
                </motion.h3>
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 opacity-50 grayscale hover:grayscale-0 transition-all"
                    >
                        <p className="text-sm font-bold text-slate-400 uppercase mb-2">Não é apenas site</p>
                        <p className="text-slate-500 text-sm">Design e Marketing</p>
                    </motion.div>
                    <div className="md:w-px bg-slate-300 hidden md:block"></div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        {[
                            { t: 'Desenvolvimento Corporativo', i: <Terminal size={20} /> },
                            { t: 'Engenharia de Software', i: <Code size={20} /> },
                            { t: 'Automação Operacional', i: <Cpu size={20} /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-cyan-500 flex flex-col gap-3"
                            >
                                <span className="text-cyan-600">{item.i}</span>
                                <span className="font-bold text-slate-900 text-sm">{item.t}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SISTEMAS SOB MEDIDA */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <EngineeringSectionHeading
                    badge="Sistemas Proprietários"
                    title="Sistemas sob Medida"
                    subtitle="Desenvolvimento de plataformas específicas para a regra de negócio da sua empresa."
                />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SystemsGrid />
                </motion.div>
            </div>
        </section>

        {/* AUTOMAÇÃO + INTEGRAÇÕES */}
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Automação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <EngineeringSectionHeading
                            badge="Eficiência"
                            title="Automação de Processos"
                            subtitle="Eliminação de tarefas manuais e repetitivas para liberar seu time para o estratégico."
                        />
                        <div className="mt-8">
                            <AutomationTree />
                        </div>
                    </motion.div>

                    {/* Integrações */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-12">
                            <EngineeringSectionHeading
                                badge="Conectividade"
                                title="Integrações & APIs"
                                subtitle="Conexão entre todas as suas ferramentas. Seus dados fluindo sem barreiras."
                            />
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <IntegrationsDisplay />
                            <div className="mt-8 text-center">
                                <p className="text-sm text-slate-500 font-medium">Conectamos qualquer sistema via API REST, GraphQL ou Webhooks.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* PLATAFORMAS DIGITAIS */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <EngineeringSectionHeading
                    badge="Escala"
                    title="Plataformas Digitais Completas"
                    subtitle="Construção de ecossistemas digitais robustos para grandes operações."
                    centered
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        { t: 'Portais Corporativos', d: 'Ambientes seguros para interação com stakeholders.' },
                        { t: 'Aplicações Web (SaaS)', d: 'Produtos digitais escaláveis e multi-tenant.' },
                        { t: 'Ambientes de Dados', d: 'Estruturas para Data Lake e BI centralizado.' }
                    ].map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{p.t}</h4>
                            <p className="text-slate-600 leading-relaxed">{p.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* PARA QUEM É & RESULTADO */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Para quem é esta solução?</h3>
                        <ul className="space-y-6">
                            {[
                                'Empresas estruturadas que precisam de eficiência',
                                'Operações complexas com muitos dados dispersos',
                                'Negócios em crescimento acelerado (Scale-ups)',
                                'Empresas travadas por processos manuais e planilhas'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="text-lg text-slate-700 font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full group-hover:bg-cyan-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 block">Resultado Esperado</span>
                            <h3 className="text-3xl font-bold mb-6">Tecnologia aplicada para escalar empresas.</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                                    <span>Operações Automatizadas</span>
                                    <Terminal size={18} className="text-cyan-400" />
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                                    <span>Dados Centralizados</span>
                                    <Code size={18} className="text-cyan-400" />
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                                    <span>Processos Organizados</span>
                                    <Cpu size={18} className="text-cyan-400" />
                                </div>
                            </div>
                            <Button className="w-full mt-8 bg-cyan-600 hover:bg-cyan-500 text-white border-none" onClick={() => setView('contato')}>Falar com Engenheiro</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    </div>
);

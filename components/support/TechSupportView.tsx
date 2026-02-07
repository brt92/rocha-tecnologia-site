import React from 'react';
import {
    Wrench, Monitor, Cpu, Wifi, Printer, Settings,
    HelpCircle, Home, Briefcase, MousePointer2, CheckCircle2,
    AlertTriangle, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';
import { Button } from '../ui/Button';

export const TechSupportView = ({ setView }: { setView: (v: string) => void }) => {
    return (
        <div className="animate-in slide-in-from-bottom-4 duration-700 bg-white">
            {/* 1. HERO SECTION */}
            <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[150px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                            Assistência Técnica em Tecnologia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Assistência técnica em tecnologia para <span className="text-emerald-500">empresas e residências.</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
                            Manutenção, instalação e suporte técnico para manter tudo funcionando com segurança e eficiência.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 border-none icon-pulse" onClick={() => setView('contato')}>
                                Preciso de suporte
                            </Button>
                            <Button variant="outline" className="text-white border-slate-700" onClick={() => document.getElementById('atendimento')?.scrollIntoView({ behavior: 'smooth' })}>
                                Solicitar atendimento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O QUE ATENDEMOS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">O que atendemos?</h2>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        Atendemos demandas técnicas pontuais para empresas e usuários domésticos.
                        Problemas, ajustes, instalações e melhorias que exigem conhecimento especializado.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pequenas Empresas</h3>
                            <p className="text-slate-500">Suporte pontual para escritórios, lojas e clínicas sem contrato fixo.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                <Home size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Usuários Domésticos</h3>
                            <p className="text-slate-500">Apoio para home office, redes residenciais e equipamentos pessoais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MANUTENÇÃO */}
            <section id="atendimento" className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Performance & Reparo</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Manutenção de Computadores</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">Diagnóstico profissional e manutenção para desempenho e estabilidade do seu equipamento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <Cpu className="text-blue-500 mb-6" size={32} />
                            <h3 className="font-bold text-lg mb-4 text-slate-900">Limpeza & Hardware</h3>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Limpeza interna preventiva</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Troca de pasta térmica</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Troca de componentes</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <Zap className="text-amber-500 mb-6" size={32} />
                            <h3 className="font-bold text-lg mb-4 text-slate-900">Upgrade de Performance</h3>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Instalação de SSD NVMe</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Upgrade de Memória RAM</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Placas de Vídeo</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <Settings className="text-emerald-500 mb-6" size={32} />
                            <h3 className="font-bold text-lg mb-4 text-slate-900">Sistema & Software</h3>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Formatação Profissional</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Backup de Dados</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Otimização do Windows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SUPORTE DOMÉSTICO */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Para sua casa</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Suporte a Usuários Domésticos</h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                Ajuda técnica para resolver problemas do dia a dia, desde configurar uma impressora até resolver falhas na internet.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Instalação e configuração de programas",
                                    "Configuração de impressoras Wi-Fi e USB",
                                    "Resolução de problemas de internet (Wi-Fi lento)",
                                    "Recuperação de acesso a contas (Google, Microsoft)",
                                    "Ajustes gerais para Home Office"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-10 rounded-[3rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                            <Briefcase className="w-16 h-16 text-emerald-600 mb-8" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Atendimento Esporádico para Empresas</h3>
                            <p className="text-slate-600 mb-8">
                                Sua empresa não tem contrato de TI? Atendemos sob demanda com a mesma qualidade corporativa.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-sm text-slate-600"><Settings size={16} className="mt-1" /> Reparo em estações de trabalho</li>
                                <li className="flex gap-3 text-sm text-slate-600"><Wifi size={16} className="mt-1" /> Configuração de rede e Wi-Fi corporativo</li>
                                <li className="flex gap-3 text-sm text-slate-600"><Monitor size={16} className="mt-1" /> Instalação de equipamentos novos</li>
                            </ul>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 border-none" onClick={() => setView('contato')}>
                                Chamar Técnico Corporativo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INSTALAÇÃO & ORGANIZAÇÃO */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Instalação & Organização</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Não deixamos fios soltos. Configuramos e organizamos seu ambiente tecnológico.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Monitor />, title: "Computadores", desc: "Montagem, setup inicial e cable management." },
                            { icon: <Printer />, title: "Periféricos", desc: "Impressoras, scanners e webcams configurados." },
                            { icon: <Wifi />, title: "Rede", desc: "Roteadores, repetidores e switches." },
                            { icon: <Wrench />, title: "Estrutura", desc: "Organização de cabos e rack básico." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="mb-4 text-emerald-400">{item.icon}</div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. EXEMPLOS PRÁTICOS E DIFERENCIAL */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex-1">
                            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Casos Reais</span>
                            <h2 className="text-3xl font-black text-slate-900 mb-8">Como resolvemos problemas</h2>

                            <div className="space-y-6">
                                {[
                                    { problem: "Computador lento e travando", solution: "Diagnóstico de HD/SSD, limpeza de sistema e upgrade de memória." },
                                    { problem: "Internet cai toda hora", solution: "Análise de interferência, troca de canal e reconfiguração do roteador." },
                                    { problem: "Notebook não liga", solution: "Teste de fonte, bateria e reparo de placa-mãe quando viável." }
                                ].map((caseItem, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-bold text-slate-800 mb-1">{caseItem.problem}</p>
                                            <p className="text-sm text-slate-500 flex items-center gap-2">
                                                <ArrowRight size={14} className="text-emerald-500" /> {caseItem.solution}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                            <ShieldCheck className="w-16 h-16 text-blue-600 mb-6" />
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Nosso Diferencial</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Não somos apenas "conserto de computador". <br />
                                Nós orientamos melhorias, organizamos sua tecnologia e evitamos que o problema volte.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Atendimento Remoto</div>
                                <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase">Visita Técnica</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Precisando de suporte agora?</h2>
                    <p className="text-xl text-slate-500 mb-12">Não perca tempo tentando resolver sozinho. Chame um especialista.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setView('contato')}>
                            Falar com Especialista
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.scrollTo(0, 0)}>
                            Voltar ao Topo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

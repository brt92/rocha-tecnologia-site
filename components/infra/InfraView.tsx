import React from 'react';
import {
    Building2, Store, Utensils, Home, Zap, Shield,
    Network, Server, Cpu, Layers, CheckCircle2,
    ArrowRight, Wifi, Lock, MousePointer2, Smartphone,
    Monitor, Settings, Share2, Search, Wrench, Package
} from 'lucide-react';
import { Button } from '../ui/Button';

export const InfraView = ({ setView }: { setView: (v: string) => void }) => {
    return (
        <div className="animate-in slide-in-from-bottom-4 duration-700 bg-white">
            {/* 1. HERO SECTION */}
            {/* 1. HERO SECTION */}
            <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-600/10 blur-[150px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                                Engenharia de Ambientes
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                                Infraestrutura tecnológica para <br />
                                <span className="text-emerald-500">empresas, comércios e residências modernas.</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
                                Projetamos, implantamos e organizamos tecnologia para funcionamento eficiente, seguro e automatizado. Não é apenas instalação, é inteligência de operação.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 border-none" onClick={() => setView('contato')}>Quero estruturar meu ambiente</Button>
                                <Button variant="outline" className="text-white border-slate-700" onClick={() => setView('contato')}>Falar com especialista</Button>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800"
                                alt="Server Room Infrastructure"
                                className="rounded-3xl shadow-2xl border border-slate-700/50 relative z-10 hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20">
                                <div className="flex items-center gap-3">
                                    <Wifi className="text-emerald-400 animate-pulse" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Signal Strength</p>
                                        <p className="text-sm font-bold text-white">Excellent (98%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O QUE FAZEMOS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
                        Implementamos tecnologia completa para ambientes que precisam funcionar de forma estável, integrada e organizada.
                    </h2>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Não apenas instalamos equipamentos. Estruturamos ambientes tecnológicos prontos para operação real.
                    </p>
                </div>
            </section>

            {/* 3. SETORES (Comércio, Restaurantes, Empresas, Residencial) */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* COMÉRCIO */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Store size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Comércio & PDVs</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Estrutura completa de tecnologia para lojas, caixas, atendimento e operação comercial. Elimine lentidão no sistema e filas por falha técnica.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-blue-500" size={16} /> Rede estruturada para alta demanda</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-blue-500" size={16} /> Integração de sistemas e PDVs</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-blue-500" size={16} /> Wi-Fi corporativo para clientes e staff</li>
                            </ul>
                        </div>

                        {/* RESTAURANTES */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <Utensils size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Restaurantes & Delivery</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Tecnologia para atendimento, pedidos e operação de cozinha. Nunca mais perca um pedido por falha de conexão ou impressão.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-orange-500" size={16} /> Rede estável para tablets de pedidos</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-orange-500" size={16} /> Integração KDS (Cozinha) e Delivery</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-orange-500" size={16} /> Automação de fluxo de atendimento</li>
                            </ul>
                        </div>

                        {/* EMPRESAS */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Building2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Empresas & Escritórios</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Organização completa da tecnologia interna. Acabe com arquivos espalhados, computadores lentos e cabos desorganizados.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-indigo-500" size={16} /> Rede corporativa e Servidores</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-indigo-500" size={16} /> Gestão de acessos e Backup</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-indigo-500" size={16} /> Padronização de estações de trabalho</li>
                            </ul>
                        </div>

                        {/* RESIDENCIAL */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <Home size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Residencial Premium</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Estrutura tecnológica para residências conectadas e home offices profissionais. Wi-Fi que cobre a casa toda de verdade.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-emerald-500" size={16} /> Wi-Fi Mesh Profissional de alta densidade</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-emerald-500" size={16} /> Estrutura para Home Office estável</li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="text-emerald-500" size={16} /> Organização de rack e cabeamento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AUTOMAÇÃO */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Smart Environments</span>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Automação Inteligente para Conforto e Eficiência</h2>
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                Transforme ambientes físicos em espaços responsivos. Controle iluminação, climatização e dispositivos por voz, app ou sensores.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Eficiência Energética</h4>
                                        <p className="text-sm text-slate-500">Sensores e rotinas que desligam o desnecessário automaticamente.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Controle Centralizado</h4>
                                        <p className="text-sm text-slate-500">Toda a sua operação ou casa na palma da mão, de qualquer lugar.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Segurança Integrada</h4>
                                        <p className="text-sm text-slate-500">Câmeras, sensores e alarmes conectados ao ecossistema.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-[3rem] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-8 relative z-10">O que automatizamos?</h3>
                            <div className="grid grid-cols-1 gap-4 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                    <span className="font-medium">Iluminação Inteligente</span>
                                    <Zap size={18} className="text-yellow-400" />
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                    <span className="font-medium">Climatização</span>
                                    <Settings size={18} className="text-blue-400" />
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                    <span className="font-medium">Controle de Acesso</span>
                                    <Lock size={18} className="text-red-400" />
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                    <span className="font-medium">Monitoramento</span>
                                    <Search size={18} className="text-green-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INTEGRAÇÃO DE SISTEMAS */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Conectividade</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16">Tudo integrado. Nada solto.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Layers size={100} /></div>
                            <h3 className="text-xl font-bold mb-4">Sistemas Conversando</h3>
                            <p className="text-slate-500 text-sm">Integramos seu PDV ao financeiro, seu estoque ao site, e suas câmeras ao alarme. Fim dos sistemas ilhados.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Wifi size={100} /></div>
                            <h3 className="text-xl font-bold mb-4">Centralização</h3>
                            <p className="text-slate-500 text-sm">Visualização unificada da saúde da sua tecnologia. Menos telas, mais controle.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Cpu size={100} /></div>
                            <h3 className="text-xl font-bold mb-4">Processos Cruzados</h3>
                            <p className="text-slate-500 text-sm">Automações que começam no físico (sensor) e terminam no digital (notificação/registro).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. COMO FUNCIONA O PROJETO */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Metodologia de Implantação</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: '01', title: 'Diagnóstico', desc: 'Análise técnica do ambiente, planta baixa e necessidades.' },
                            { step: '02', title: 'Projeto', desc: 'Desenho da rede, posicionamento de equipamentos e specs.' },
                            { step: '03', title: 'Implantação', desc: 'Instalação física, configuração lógica e testes de stress.' },
                            { step: '04', title: 'Entrega', desc: 'Organização final, documentação e treinamento de uso.' }
                        ].map((s, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                                <span className="text-4xl font-black text-slate-200 mb-2 block">{s.step}</span>
                                <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                                <p className="text-xs text-slate-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. EXEMPLOS PRÁTICOS (SITUAÇÃO -> SOLUÇÃO) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black mb-16 text-center">Transformação Real</h2>
                    <div className="space-y-8">
                        {[
                            { t: 'Loja com sistema lento', s: 'Cliente fila, sistema cai, operadora de cartão não conecta.', r: 'Rede segmentada (VLANs) para separar tráfego de PDV e Clientes. Estabilidade total.' },
                            { t: 'Empresa crescendo sem padrão', s: 'Cada PC configurado de um jeito, dados locais, risco de perda.', r: 'Centralização em servidor, permissionamento de usuários e padronização de estações.' },
                            { t: 'Residência com Wi-Fi ruim', s: 'Internet rápida chega no modem, mas não nos quartos.', r: 'Projeto Mesh profissional cabeado. Cobertura 100% com velocidade máxima em todos os cômodos.' }
                        ].map((caseItem, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start hover:bg-white/10 transition-colors">
                                <div className="md:w-1/3">
                                    <h4 className="text-xl font-bold text-emerald-400 mb-2">{caseItem.t}</h4>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">O Desafio</span>
                                </div>
                                <div className="md:w-1/3">
                                    <p className="text-sm text-slate-300 mb-2">{caseItem.s}</p>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">A Situação</span>
                                </div>
                                <div className="md:w-1/3">
                                    <p className="text-sm font-bold text-white mb-2">{caseItem.r}</p>
                                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Solução Rocha</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 block">Profissionalize seu Espaço</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        Chega de improviso.<br />Estruture sua tecnologia agora.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setView('contato')}>Quero organizar minha tecnologia</Button>
                        <Button variant="outline" size="lg" onClick={() => window.scrollTo(0, 0)}>Voltar ao Topo</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

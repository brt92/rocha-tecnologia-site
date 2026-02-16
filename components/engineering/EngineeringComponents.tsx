
import React from 'react';
import {
    Database, Server, Workflow, Cpu, Code,
    Layers, Lock, Globe, Terminal, Network,
    Settings, BarChart, Rocket, CheckCircle2,
    ArrowRight, Activity, Zap
} from 'lucide-react';
import { Button } from '../ui/Button';

// --- VISUAL HERO ---
export const EngineeringHeroPreview = () => (
    <div className="relative h-full min-h-[400px] w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group shadow-2xl">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* Animated Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

        {/* Code Interface Mockup */}
        <div className="absolute inset-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 font-mono text-xs text-slate-400 overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-2 text-slate-600">server_node_v1.ts</span>
            </div>
            <div className="space-y-1">
                <p><span className="text-purple-400">import</span> {'{ Automate, Integrate }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@rocha/core'</span>;</p>
                <p className="text-slate-600">// Initializing operational workflow</p>
                <p><span className="text-blue-400">const</span> <span className="text-yellow-400">system</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">EnterpriseSystem</span>();</p>
                <p><span className="text-blue-400">await</span> system.<span className="text-yellow-400">connect</span>(['CRM', 'ERP', 'Marketing']);</p>
                <p className="text-slate-600">// Optimizing resources...</p>
                <p><span className="text-blue-400">if</span> (efficiency &lt; 100) {'{'}</p>
                <p className="pl-4">system.<span className="text-yellow-400">optimize</span>();</p>
                <p className="pl-4">return <span className="text-green-400">'Ready to Scale'</span>;</p>
                <p>{'}'}</p>
            </div>

            {/* Floating Status Cards */}
            <div className="absolute bottom-6 right-6 p-4 bg-slate-900/90 border border-slate-700 rounded-xl shadow-xl backdrop-blur flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-1000">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Status</div>
                    <div className="text-white font-bold">100% Uptime</div>
                </div>
            </div>
        </div>
    </div>
);

// --- SYSTEMS GRID ---
export const SystemsGrid = () => {
    const systems = [
        {
            title: 'Sistemas Internos',
            desc: 'Plataformas exclusivas para gestão da sua operação.',
            icon: <Database />,
            color: 'cyan'
        },
        {
            title: 'Plataformas Web',
            desc: 'Aplicações robustas acessíveis de qualquer lugar.',
            icon: <Globe />,
            color: 'blue'
        },
        {
            title: 'Dashboards',
            desc: 'Visualização de dados em tempo real para decisão.',
            icon: <BarChart />,
            color: 'indigo'
        },
        {
            title: 'Gestão Operacional',
            desc: 'Controle total de processos, estoques e equipes.',
            icon: <Settings />,
            color: 'slate'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((s, i) => (
                <div key={i} className="group relative p-8 bg-slate-900 rounded-[2rem] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
                    <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-900/30 group-hover:text-cyan-400 transition-colors text-slate-400`}>
                        {s.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
            ))}
        </div>
    );
};

// --- AUTOMATION VISUAL ---
export const AutomationTree = () => {
    const steps = [
        { label: 'Input Manual', icon: <FileText size={16} />, status: 'eliminated' },
        { label: 'Processamento IA', icon: <Cpu size={16} />, status: 'active' },
        { label: 'Integração API', icon: <Network size={16} />, status: 'active' },
        { label: 'Resultado', icon: <CheckCircle2 size={16} />, status: 'success' },
    ];

    return (
        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Workflow className="text-blue-600" /> Fluxo Automatizado
            </h4>
            <div className="space-y-6 relative">
                {/* Connection Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 -z-0"></div>

                <div className="flex items-center gap-4 relative z-10 opacity-50 grayscale">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 relative">
                        <span className="absolute -right-1 -top-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">X</span>
                        <FileText size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Input Manual</p>
                        <p className="text-sm text-slate-500 line-through">Entrada de dados repetitiva</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-lg shadow-cyan-500/20">
                        <Cpu size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-cyan-600 uppercase">Processamento Inteligente</p>
                        <p className="text-sm text-slate-700 font-medium">Análise e validação automática</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shadow-lg shadow-blue-500/20">
                        <Network size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-blue-600 uppercase">Integração Sistêmica</p>
                        <p className="text-sm text-slate-700 font-medium">Conexão via API / Webhooks</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-lg shadow-emerald-500/20">
                        <CheckCircle2 size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-emerald-600 uppercase">Finalização</p>
                        <p className="text-sm text-emerald-900 font-bold">Dado salvo e notificação enviada</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- INTEGRATIONS GRID ---
export const IntegrationsDisplay = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Salesforce', 'HubSpot', 'SAP', 'Totvs', 'Google Workspace', 'Slack', 'WhatsApp API', 'Banks'].map((tool, i) => (
                <div key={i} className="h-20 flex flex-col items-center justify-center bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-500 hover:scale-105 transition-all cursor-default group">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{tool}</span>
                </div>
            ))}
        </div>
    );
};

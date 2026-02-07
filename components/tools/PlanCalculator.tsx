
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Users, ShieldCheck, Database, Zap } from 'lucide-react';

export const PlanCalculator = () => {
  const [users, setUsers] = useState(10);
  const [complexity, setComplexity] = useState('standard'); // standard, high, expert

  const calculateEstimate = () => {
    let base = users * 150;
    if (complexity === 'high') base *= 1.4;
    if (complexity === 'expert') base *= 2.0;
    return Math.round(base);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100" id="calculadora">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Simulador de Investimento</h3>
        <p className="text-slate-500">Obtenha uma estimativa rápida de acordo com sua infraestrutura.</p>
      </div>

      <div className="space-y-8">
        {/* Users Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Users size={16} /> Número de Estações/Usuários
            </label>
            <span className="text-xl font-bold text-blue-600">{users}</span>
          </div>
          <input 
            type="range" 
            min="5" 
            max="200" 
            step="5"
            value={users} 
            onChange={(e) => setUsers(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Complexity Options */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-700">Nível de Serviço Requerido</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: 'standard', label: 'Essencial', desc: 'Suporte & Monitoramento', icon: <Zap size={18} /> },
              { id: 'high', label: 'Business', desc: 'Segurança + Firewall', icon: <ShieldCheck size={18} /> },
              { id: 'expert', label: 'Cloud Pro', desc: 'Servidores & Infra Híbrida', icon: <Database size={18} /> },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setComplexity(opt.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  complexity === opt.id 
                  ? 'border-blue-600 bg-blue-50/50' 
                  : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className={`mb-2 ${complexity === opt.id ? 'text-blue-600' : 'text-slate-400'}`}>
                  {opt.icon}
                </div>
                <div className="font-bold text-slate-900 text-sm">{opt.label}</div>
                <div className="text-xs text-slate-500">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Result Area */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Estimativa de Investimento</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">R$ {calculateEstimate()}</span>
              <span className="text-slate-500 font-medium">/ mês</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">*Valor aproximado baseado em médias de mercado. Sujeito a análise técnica.</p>
          </div>
          <Button variant="primary" className="w-full md:w-auto">
            Receber Orçamento Detalhado
          </Button>
        </div>
      </div>
    </div>
  );
};

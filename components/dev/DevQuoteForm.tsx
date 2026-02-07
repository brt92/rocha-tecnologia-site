
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { CheckCircle2, ArrowRight, Code, MessageSquare, Laptop, Database, Workflow, Send } from 'lucide-react';

export const MultiStepDevQuoteForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    goal: '',
    deadline: '',
    budget: '',
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (step === 1) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">O que vamos construir?</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: 'site', label: 'Site / Landing', icon: <Laptop /> },
            { id: 'sistema', label: 'Sistema Web', icon: <Database /> },
            { id: 'chatbot', label: 'Chatbot Whats', icon: <MessageSquare /> },
            { id: 'automacao', label: 'Automação n8n', icon: <Workflow /> }
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => { setFormData({ ...formData, type: opt.id }); nextStep(); }}
              className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                formData.type === opt.id ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-slate-50 hover:border-slate-200 text-slate-500'
              }`}
            >
              {opt.icon}
              <span className="text-xs font-bold uppercase tracking-widest">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Fale sobre seu projeto</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Objetivo Principal</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Ex: Vender mais, automatizar estoque..."
              onChange={(e) => setFormData({...formData, goal: e.target.value})}
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Prazo Desejado</label>
            <select 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, deadline: e.target.value})}
            >
              <option value="">Selecione...</option>
              <option value="imediato">O mais rápido possível</option>
              <option value="1mes">Dentro de 1 mês</option>
              <option value="3meses">Até 3 meses</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={prevStep}>Voltar</Button>
            <Button variant="primary" className="flex-1" onClick={nextStep}>Próximo</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-4">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Onde enviamos o orçamento?</h3>
      <div className="space-y-4">
        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" placeholder="Seu Nome" />
        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" placeholder="Nome da Empresa" />
        <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" placeholder="E-mail Corporativo" />
        <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" placeholder="WhatsApp" />
        <Button variant="primary" className="w-full gap-2 mt-4" onClick={() => alert('Lead de Desenvolvimento enviado! Nosso time entrará em contato.')}>
          Solicitar Orçamento <Send size={18} />
        </Button>
        <p className="text-[10px] text-center text-slate-400">Ao enviar, você concorda com nossa política de LGPD.</p>
      </div>
    </div>
  );
};

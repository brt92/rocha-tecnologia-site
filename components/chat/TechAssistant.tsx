import React, { useRef, useEffect } from 'react';
import { Button } from '../ui/Button';
import {
  Send, Sparkles, User, Bot,
  Phone, Siren, X, ChevronRight
} from 'lucide-react';
import { useTechAssistant } from './useTechAssistant';

interface TechAssistantProps {
  chat: ReturnType<typeof useTechAssistant>;
  mode?: 'hero' | 'sidebar';
}

export const TechAssistant: React.FC<TechAssistantProps> = ({ chat, mode = 'hero' }) => {
  const {
    messages, input, setInput, isTyping, showLeadForm, leadSent,
    isUrgentMode, setIsUrgentMode, urgencyForm, setUrgencyForm,
    sendMessage, handleLeadSubmit, handleUrgencySubmit
  } = chat;

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickActions = [
    { label: 'Suporte & TI', icon: <Siren size={14} /> },
    { label: 'Sites & App', icon: <Sparkles size={14} /> },
    // Simplified quick actions for cleaner UI
  ];

  const handleSendMessage = (text: string) => sendMessage(text);

  const containerClasses = mode === 'hero'
    ? "w-full max-w-5xl mx-auto mb-20 px-4"
    : "h-full flex flex-col pointer-events-auto";

  const cardClasses = mode === 'hero'
    ? "bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col min-h-[600px] max-h-[750px]"
    : "bg-white h-full flex flex-col shadow-2xl";

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        {/* Header */}
        <div className="bg-slate-900 p-6 flex items-center justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white relative shadow-lg shadow-emerald-900/20">
              <Bot size={24} />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white border-[3px] border-slate-900 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight">Consultor Digital</h3>
              <p className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Rocha Tech • Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {mode === 'sidebar' && (
              <button onClick={() => chat.setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 ${m.role === 'user' ? 'bg-slate-200' : 'bg-blue-600 text-white'}`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
                  : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
                  }`}>
                  <div className="whitespace-pre-wrap">{m.content}</div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}

          {showLeadForm && !leadSent && (
            <div className="flex justify-center py-4">
              <div className="bg-white border-2 border-blue-100 p-8 rounded-3xl shadow-xl max-w-md w-full animate-in zoom-in-95 duration-500">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Agendar Consultoria Grátis</h4>
                  <p className="text-xs text-slate-500 mt-1">Nossos especialistas entrarão em contato em até 2h úteis.</p>
                </div>
                <form className="space-y-3" onSubmit={handleLeadSubmit}>
                  <input required placeholder="Seu Nome" className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                  <input required placeholder="Empresa" className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                  <input required placeholder="WhatsApp" className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                  <Button type="submit" variant="primary" className="w-full mt-4">Solicitar Contato <ChevronRight size={16} /></Button>
                </form>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* URGENT SUPPORT OVERLAY */}
        {isUrgentMode && (
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in zoom-in-95 duration-300">
              <button
                onClick={() => setIsUrgentMode(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Siren size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Suporte de Emergência</h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-xs">
                  Use este canal apenas para paradas críticas, ataques ou perda de dados. Nosso time será notificado imediatamente.
                </p>
              </div>

              <form onSubmit={handleUrgencySubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    required
                    value={urgencyForm.name}
                    onChange={e => setUrgencyForm({ ...urgencyForm, name: e.target.value })}
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-sm font-medium"
                  />
                  <input
                    required
                    value={urgencyForm.company}
                    onChange={e => setUrgencyForm({ ...urgencyForm, company: e.target.value })}
                    placeholder="Nome da Empresa"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-sm font-medium"
                  />
                  <input
                    required
                    value={urgencyForm.phone}
                    onChange={e => setUrgencyForm({ ...urgencyForm, phone: e.target.value })}
                    placeholder="WhatsApp para Contato"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-sm font-medium"
                  />
                  <textarea
                    required
                    value={urgencyForm.problem}
                    onChange={e => setUrgencyForm({ ...urgencyForm, problem: e.target.value })}
                    placeholder="Descreva o problema urgente..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-sm font-medium min-h-[100px] resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl font-bold shadow-lg shadow-red-600/20 active:scale-95 transition-all">
                  🚨 Acionar Alerta de Prioridade
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-slate-100 shrink-0">
          <div className="flex gap-2 relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Ex: preciso organizar TI, criar um site, automatizar processos, resolver um problema técnico ou entender IA."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-emerald-600 text-white p-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-4 font-medium uppercase tracking-widest">
            Atendimento inteligente Rocha Soluções • Especialista Digital
          </p>
        </div>
      </div>
    </div>
  );
};

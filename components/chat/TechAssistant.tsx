import React, { useState, useEffect, useRef } from 'react';
import OpenAI from "openai";
import { Button } from '../ui/Button';
import {
  Send, Sparkles, User, Bot, RefreshCcw,
  MessageSquare, Shield, Terminal, Zap,
  ChevronRight, ArrowRight, CheckCircle2,
  Building2, Users, AlertCircle, Phone,
  Siren, X
} from 'lucide-react';
import { sendTelegramNotification } from '../../utils/telegram';
import { BusinessPillar } from '../../types';
import { SERVICES, PILLAR_DATA } from '../../constants';
import { SYSTEM_PROMPT } from './SystemPrompt';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface TechAssistantProps {
  activateUrgent?: boolean;
  onUrgentOpened?: () => void;
}

export const TechAssistant: React.FC<TechAssistantProps> = ({ activateUrgent, onUrgentOpened }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Oi! 👋 Eu sou o consultor digital da Rocha.\n\nMe conta: o que você está buscando hoje pra sua empresa?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [isUrgentMode, setIsUrgentMode] = useState(false);
  const [urgencyForm, setUrgencyForm] = useState({ name: '', company: '', phone: '', problem: '' });
  const [urgencySent, setUrgencySent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activateUrgent) {
      setIsUrgentMode(true);
      if (onUrgentOpened) onUrgentOpened();
    }
  }, [activateUrgent, onUrgentOpened]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickActions = [
    { label: 'Suporte & TI', icon: <Shield size={14} /> },
    { label: 'Sites & App', icon: <Terminal size={14} /> },
    { label: 'Automação', icon: <Zap size={14} /> },
    { label: 'Consultoria IA', icon: <Sparkles size={14} /> }
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user', content: text } as Message];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      // System prompt imported from SystemPrompt.ts

      // Formatando histórico para a OpenAI
      const conversationHistory = newMessages.map(m => ({
        role: m.role as "user" | "assistant" | "system",
        content: m.content
      }));

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // ou gpt-4 se disponível e desejado
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...conversationHistory
        ],
      });

      const responseText = completion.choices[0]?.message?.content || "Desculpe, tive um problema ao processar sua solicitação. Pode repetir?";

      setMessages([...newMessages, { role: 'assistant', content: responseText }]);

      // Gatilho para formulário de lead (simples heurística baseada em palavras-chave)
      if (responseText.toLowerCase().includes('especialista') || responseText.toLowerCase().includes('contato')) {
        setTimeout(() => setShowLeadForm(true), 2000);
      }

    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages([...newMessages, { role: 'assistant', content: "Houve um erro na conexão. Verifique a chave da API ou tente novamente." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTyping(true);
    // Simulação de salvamento no Supabase
    setTimeout(() => {
      setLeadSent(true);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: "Excelente! Seus dados foram encaminhados com prioridade para nosso time de arquitetura de soluções. Entraremos em contato em breve via WhatsApp." }]);
    }, 1500);
  };

  const handleUrgencySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTyping(true);

    // Send to Telegram
    const success = await sendTelegramNotification(urgencyForm);

    setIsTyping(false);
    setUrgencySent(true);
    setIsUrgentMode(false);

    if (success) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "🚨 **CHAMADO DE URGÊNCIA ABERTO** 🚨\n\nRecebemos seu alerta. Nosso time de Nível 3 já foi notificado via sistema de emergência e entrará em contato pelo WhatsApp informado nos próximos minutos.\n\nPor favor, mantenha o telefone próximo."
      }]);
    } else {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Recebemos suas informações. Devido a uma instabilidade momentânea no alerta automático, nossos especialistas analisarão seu caso com prioridade máxima."
      }]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-20 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col min-h-[600px] max-h-[750px]">
        {/* Header */}
        <div className="bg-slate-900 p-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white relative shadow-lg shadow-blue-900/50">
              <Bot size={24} />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-slate-900 rounded-full"></div>
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
            <button
              onClick={() => setIsUrgentMode(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Suporte Urgente
            </button>
            <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400">
              <Sparkles size={14} />
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate -in fade -in slide -in -from - bottom - 2 duration - 300`}>
              <div className={`flex gap - 4 max - w - [85 %] ${m.role === 'user' ? 'flex-row-reverse' : ''} `}>
                <div className={`w - 8 h - 8 rounded - lg flex items - center justify - center shrink - 0 mt - 1 ${m.role === 'user' ? 'bg-slate-200' : 'bg-blue-600 text-white'} `}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p - 4 rounded - 2xl text - sm leading - relaxed ${m.role === 'user'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
                  : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
                  } `}>
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
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(action.label)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-600 rounded-full text-[11px] font-bold transition-all border border-slate-100 hover:border-blue-100"
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Digite sua dúvida tecnológica aqui..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
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

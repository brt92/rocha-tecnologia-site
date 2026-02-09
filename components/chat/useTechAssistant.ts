import React, { useState, useRef, useEffect } from 'react';
import OpenAI from "openai";
import { sendTelegramNotification } from '../../utils/telegram';
import { SYSTEM_PROMPT } from './SystemPrompt';

export interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const useTechAssistant = (initialMessage?: string) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: initialMessage || 'Olá! 👋\nQuero entender sua necessidade e te ajudar a encontrar a melhor solução.\n\nO que você está buscando hoje?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadSent, setLeadSent] = useState(false);
    const [isUrgentMode, setIsUrgentMode] = useState(false);
    const [urgencyForm, setUrgencyForm] = useState({ name: '', company: '', phone: '', problem: '' });
    const [urgencySent, setUrgencySent] = useState(false);

    // New state for Sidebar/Fixed mode
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const newMessages = [...messages, { role: 'user', content: text } as Message];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);
        setIsOpen(true); // Ensure sidebar opens on message

        try {
            const openai = new OpenAI({
                apiKey: import.meta.env.VITE_OPENAI_API_KEY,
                dangerouslyAllowBrowser: true
            });

            const conversationHistory = newMessages.map(m => ({
                role: m.role as "user" | "assistant" | "system",
                content: m.content
            }));

            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...conversationHistory
                ],
            });

            const responseText = completion.choices[0]?.message?.content || "Desculpe, tive um problema ao processar sua solicitação. Pode repetir?";

            setMessages([...newMessages, { role: 'assistant', content: responseText }]);

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
        setTimeout(() => {
            setLeadSent(true);
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'assistant', content: "Excelente! Seus dados foram encaminhados com prioridade para nosso time de arquitetura de soluções. Entraremos em contato em breve via WhatsApp." }]);
        }, 1500);
    };

    const handleUrgencySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsTyping(true);
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

    return {
        messages,
        setMessages,
        input,
        setInput,
        isTyping,
        showLeadForm,
        leadSent,
        isUrgentMode,
        setIsUrgentMode,
        urgencyForm,
        setUrgencyForm,
        urgencySent,
        sendMessage,
        handleLeadSubmit,
        handleUrgencySubmit,
        isOpen,
        setIsOpen
    };
};

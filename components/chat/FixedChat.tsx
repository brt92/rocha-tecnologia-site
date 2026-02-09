import React, { useState } from 'react';
import { Send, Bot, MessageSquare } from 'lucide-react';
import { useTechAssistant } from './useTechAssistant';

interface FixedChatProps {
    chat: ReturnType<typeof useTechAssistant>;
    visible: boolean;
}

export const FixedChat: React.FC<FixedChatProps> = ({ chat, visible }) => {
    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end animate-in slide-in-from-right-4 duration-500">

            {/* Initial Bubble */}
            <div className="bg-white p-4 rounded-t-2xl rounded-bl-2xl shadow-xl shadow-slate-900/10 border border-slate-100 mb-4 max-w-xs animate-in fade-in slide-in-from-bottom-2 delay-300">
                <p className="text-sm text-slate-600 font-medium">
                    Olá! 👋 <br />
                    Posso te ajudar a encontrar a melhor solução em tecnologia.
                </p>
            </div>

            {/* Chat Bar */}
            <div
                onClick={() => chat.setIsOpen(true)}
                className="bg-white rounded-full shadow-2xl shadow-blue-900/20 border border-slate-200 p-2 pl-6 flex items-center gap-4 cursor-pointer hover:border-blue-400 transition-all hover:-translate-y-1 group w-full max-w-md"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Bot size={18} />
                    </div>
                    <span className="text-slate-400 text-sm">Como posso ajudar?</span>
                </div>

                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <MessageSquare size={18} />
                </button>
            </div>
        </div>
    );
};

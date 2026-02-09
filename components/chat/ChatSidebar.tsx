import React from 'react';
import { TechAssistant } from './TechAssistant';
import { useTechAssistant } from './useTechAssistant';

interface ChatSidebarProps {
    chat: ReturnType<typeof useTechAssistant>;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ chat }) => {
    if (!chat.isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => chat.setIsOpen(false)}
            />
            <div className="fixed top-0 right-0 h-full w-full max-w-md z-50 animate-in slide-in-from-right duration-300">
                <TechAssistant chat={chat} mode="sidebar" />
            </div>
        </>
    );
};

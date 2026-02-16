import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        id: string;
        title: string;
        icon: React.ReactNode;
        color: string;
        fullDescription: string;
        practicalActions: string[];
        howItWorks: string[];
        results: string[];
    } | null;
    onContact: () => void;
}

export const ServiceModal = ({ isOpen, onClose, service, onContact }: ServiceModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!service) return null;

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue': return 'text-blue-600 bg-blue-50 border-blue-100';
            case 'red': return 'text-red-600 bg-red-50 border-red-100';
            case 'indigo': return 'text-indigo-600 bg-indigo-50 border-indigo-100';
            case 'green': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
            case 'amber': return 'text-amber-600 bg-amber-50 border-amber-100';
            case 'purple': return 'text-purple-600 bg-purple-50 border-purple-100';
            case 'slate': return 'text-slate-600 bg-slate-50 border-slate-100';
            default: return 'text-blue-600 bg-blue-50 border-blue-100';
        }
    };

    const colorClass = getColorClasses(service.color);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative"
                        >
                            {/* Header / Close Button */}
                            <div className="absolute top-6 right-6 z-10">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
                                {/* LEFT COLUMN: Explanation */}
                                <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto">
                                    <div className="mb-8">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white ${service.color === 'red' ? 'bg-red-600' : service.color === 'indigo' ? 'bg-indigo-600' : service.color === 'green' ? 'bg-emerald-600' : service.color === 'amber' ? 'bg-amber-600' : service.color === 'purple' ? 'bg-purple-600' : service.color === 'slate' ? 'bg-slate-700' : 'bg-blue-600'}`}>
                                            {service.icon}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">
                                            Módulo {service.id}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                            {service.fullDescription}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                                            O que fazemos na prática
                                        </h3>
                                        <ul className="space-y-4">
                                            {service.practicalActions.map((action, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className={`shrink-0 mt-0.5 ${service.color === 'red' ? 'text-red-500' : 'text-blue-500'}`} size={18} />
                                                    <span className="text-slate-600">{action}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Mobile Only Benefits (shown here for better flow on small screens) */}
                                    <div className="md:hidden mt-8 pt-8 border-t border-slate-100">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                                            Resultados
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.results.map((res, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    <span className="font-bold text-slate-800">{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Benefits & Details */}
                                <div className="hidden md:flex w-full md:w-5/12 bg-slate-50 p-8 md:p-12 flex-col justify-between border-l border-slate-100">
                                    <div className="space-y-10">
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                                                Como funciona
                                            </h3>
                                            <ul className="space-y-4">
                                                {service.howItWorks.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4">
                                                        <span className="text-slate-300 font-black text-lg">0{idx + 1}</span>
                                                        <p className="text-slate-600 text-sm font-medium pt-1">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={`p-6 rounded-3xl border ${colorClass}`}>
                                            <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${service.color === 'red' ? 'text-red-700' : 'text-blue-700'}`}>
                                                Resultado para sua empresa
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.results.map((res, idx) => (
                                                    <li key={idx} className="flex items-center gap-3">
                                                        <CheckCircle2 size={16} className={service.color === 'red' ? 'text-red-600' : 'text-emerald-600'} />
                                                        <span className={`font-bold ${service.color === 'red' ? 'text-red-900' : 'text-slate-800'}`}>{res}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Button
                                            size="lg"
                                            className="w-full justify-between group"
                                            onClick={onContact}
                                        >
                                            Falar com Especialista
                                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Mobile CTA */}
                                <div className="md:hidden p-6 border-t border-slate-100 bg-white sticky bottom-0">
                                    <Button
                                        size="lg"
                                        className="w-full justify-center"
                                        onClick={onContact}
                                    >
                                        Falar com Especialista
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

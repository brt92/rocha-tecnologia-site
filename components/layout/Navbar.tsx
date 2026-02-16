
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'TI & Cyber', id: 'ti-cyberseguranca' },
    { name: 'Sites & Design', id: 'desenvolvimento-automacao' },
    { name: 'Software & Eng.', id: 'software-engineering' },
    { name: 'Infra & Projetos', id: 'infraestrutura-tecnologia' },
    { name: 'Assistência Técnica', id: 'assistencia-tecnica' },
    { name: 'Consultoria IA', id: 'consultoria-ia' },
    { name: 'Planos', id: 'planos' },
    { name: 'Cases', id: 'cases' },
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group outline-none">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">R</div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Rocha <span className="text-blue-600">Tech</span></span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-[13px] font-bold transition-all outline-none px-4 py-2 rounded-full ${currentView === link.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="primary" size="sm" onClick={() => handleNavClick('contato')}>Falar com Especialista</Button>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 lg:hidden animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-lg font-bold text-left py-3 px-4 rounded-xl ${currentView === link.id ? 'text-blue-600 bg-blue-50' : 'text-slate-900'}`}
              >
                {link.name}
              </button>
            ))}
            <Button variant="primary" className="w-full mt-4" onClick={() => handleNavClick('contato')}>Solicitar Orçamento</Button>
          </div>
        </div>
      )}
    </header>
  );
};

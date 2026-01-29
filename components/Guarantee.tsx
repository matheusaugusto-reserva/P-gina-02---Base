import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-7 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto border border-brand-green/30 bg-brand-card/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 backdrop-blur-sm">
        
        {/* Seal Icon */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-green blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-brand-dark border-4 border-brand-green p-6 rounded-full shadow-[0_0_30px_rgba(0,229,106,0.3)]">
              <ShieldCheck size={80} className="text-brand-green" strokeWidth={1.5} />
            </div>
            {/* 7 Days Badge */}
            <div className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs font-black px-3 py-1 rounded-full shadow-lg rotate-12 uppercase tracking-tighter">
              7 Dias
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">
            Sua satisfação <span className="text-brand-green">blindada</span> <br className="hidden md:block"/> ou seu dinheiro de volta
          </h2>
          
          <p className="text-brand-text/80 text-lg leading-relaxed mb-6">
            Eu tenho tanta confiança no método que vou te dar uma <span className="text-white font-bold">Garantia Incondicional de 7 dias</span>. 
            Isso significa que você pode entrar agora, acessar todas as aulas e se por qualquer motivo você não achar que vale 10x o valor investido, basta enviar um e-mail e devolvemos 100% do seu dinheiro.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-bold text-brand-green uppercase tracking-widest opacity-80">
            <span className="flex items-center gap-2">✓ Sem perguntas</span>
            <span className="hidden md:block opacity-30">•</span>
            <span className="flex items-center gap-2">✓ Sem letras miúdas</span>
            <span className="hidden md:block opacity-30">•</span>
            <span className="flex items-center gap-2">✓ Risco zero</span>
          </div>
        </div>

      </div>
    </section>
  );
};
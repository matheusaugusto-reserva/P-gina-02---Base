import React from 'react';
import { Check, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { Button } from './Button';

export const Offer: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-5 md:px-7 bg-gradient-to-b from-brand-dark to-[#1a1421]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-card border-2 border-brand-pink rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(255,52,141,0.2)] text-center">
          
          {/* Badge de Destaque */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-4 md:px-8 py-1.5 md:py-2 rounded-b-xl font-bold uppercase text-[10px] md:text-sm tracking-widest whitespace-nowrap">
            Oferta Especial por Tempo Limitado
          </div>

          <h2 className="text-white text-xl md:text-4xl font-black uppercase mb-6 md:mb-8 mt-6 leading-tight">
            Tome a decisão que vai <br className="hidden md:block"/> <span className="text-brand-pink">mudar o seu jogo</span> hoje
          </h2>

          <div className="flex flex-col items-center gap-1 md:gap-2 mb-8 md:mb-10">
            <p className="text-brand-text/60 line-through text-lg md:text-2xl">
              De R$ 997,00
            </p>
            <p className="text-white text-base md:text-xl font-medium">
              Por apenas 12x de:
            </p>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <span className="text-brand-pink text-2xl md:text-4xl font-bold">R$</span>
              <span className="text-white text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter">
                49,70
              </span>
            </div>
            <p className="text-brand-text/80 text-base md:text-lg">
              ou R$ 497,00 à vista
            </p>
          </div>

          {/* Benefícios Rápidos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12 text-left max-w-lg mx-auto px-2">
            <div className="flex items-center gap-3 text-brand-text">
              <Check className="text-brand-green flex-shrink-0" size={18} />
              <span className="text-sm md:text-base">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text">
              <Check className="text-brand-green flex-shrink-0" size={18} />
              <span className="text-sm md:text-base">Todos os bônus</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text">
              <Check className="text-brand-green flex-shrink-0" size={18} />
              <span className="text-sm md:text-base">Grupo VIP</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text">
              <Check className="text-brand-green flex-shrink-0" size={18} />
              <span className="text-sm md:text-base">Suporte VIP</span>
            </div>
          </div>

          <Button fullWidth className="mb-8 py-5 md:py-8 text-lg md:text-2xl shadow-xl">
            Quero Me Inscrever Agora
          </Button>

          {/* Selos de Segurança e Garantia */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 border-t border-brand-border/50">
            <div className="flex items-center gap-3 md:gap-4 text-left">
              <ShieldCheck className="text-brand-green w-10 h-10 md:w-12 md:h-12" />
              <div>
                <p className="text-white font-bold text-xs md:text-sm uppercase">7 Dias de Garantia</p>
                <p className="text-brand-text/60 text-[10px] md:text-xs">Risco zero para você</p>
              </div>
            </div>
            <div className="flex items-center gap-6 opacity-40">
              <div className="flex flex-col items-center gap-1">
                <Lock size={18} className="text-white" />
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-white">Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CreditCard size={18} className="text-white" />
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-white">Parcelado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
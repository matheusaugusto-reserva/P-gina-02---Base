import React, { useEffect, useState, useRef } from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const PilarCircle = ({ pilar, title, icon: Icon, index, isVisible }: { pilar: string, title: string, icon: any, index: number, isVisible: boolean }) => (
    <div 
        className={`relative group transition-all duration-1000 transform 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 200}ms` }}
    >
        {/* Glow de fundo no Hover */}
        <div className="absolute inset-0 bg-brand-pink/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] lg:w-[21rem] lg:h-[21rem] rounded-full border-2 border-brand-purple/40 flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-brand-dark/80 backdrop-blur-md z-10 group-hover:border-brand-pink group-hover:scale-105 transition-all duration-500 shadow-[inset_0_0_20px_rgba(156,18,241,0.1)] group-hover:shadow-[0_0_40px_rgba(255,52,141,0.2)]">
            <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-brand-purple/10 rounded-full group-hover:bg-brand-pink/20 transition-colors duration-500">
                <Icon className="text-brand-pink group-hover:scale-110 transition-transform duration-500" size={28} />
            </div>
            <span className="text-brand-pink font-black uppercase text-[10px] sm:text-xs tracking-widest mb-2 opacity-70">{pilar}</span>
            <p className="text-white font-bold text-base sm:text-lg lg:text-xl leading-snug">
                {title}
            </p>
            
            {/* Linha decorativa interna */}
            <div className="mt-4 h-[2px] w-0 group-hover:w-12 bg-brand-pink transition-all duration-500"></div>
        </div>
    </div>
);

export const Methodology: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 px-5 md:px-7 bg-[#0a090e] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(156,18,241,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[75rem] mx-auto space-y-12 md:space-y-20 relative z-10">
                {/* Badge Superior */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <div className="bg-brand-pink/10 border border-brand-pink/30 text-brand-pink px-6 md:px-8 py-2 md:py-3 rounded-full w-fit mx-auto shadow-[0_0_15px_rgba(255,52,141,0.1)]">
                        <p className="font-bold text-xs md:text-base uppercase tracking-wider flex items-center gap-2">
                            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-brand-pink"></span>
                            </span>
                            +50 mil pessoas transformadas
                        </p>
                    </div>
                </div>

                {/* Título com Animação */}
                <div className={`text-center space-y-4 md:space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-brand-text text-2xl sm:text-3xl lg:text-[3.5rem] font-black text-center uppercase leading-tight md:leading-none max-w-[65rem] mx-auto tracking-tighter">
                        Este é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple relative">caminho mais rápido
                            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-pink/30 rounded-full"></span>
                        </span> para você dominar o mercado
                    </h2>

                    <p className="text-[#D9D1E6] text-base md:text-2xl text-center font-medium max-w-4xl mx-auto leading-relaxed opacity-80">
                        O <span className="text-white font-bold underline decoration-brand-pink decoration-2 underline-offset-4">Método Exclusivo</span> que ensina a estruturar, validar e escalar sua operação digital.
                    </p>
                </div>

                {/* 3 Pilares com Linhas de Conexão */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 mt-12 md:mt-20">
                    <PilarCircle 
                        pilar="Pilar 01"
                        title="Atração Magnética de novos clientes"
                        icon={Target}
                        index={0}
                        isVisible={isVisible}
                    />
                    
                    <PilarCircle 
                        pilar="Pilar 02"
                        title="Retenção e Engajamento de audiência"
                        icon={Zap}
                        index={1}
                        isVisible={isVisible}
                    />

                    <PilarCircle 
                        pilar="Pilar 03"
                        title="Conversão Automática recorrente"
                        icon={TrendingUp}
                        index={2}
                        isVisible={isVisible}
                    />
                </div>

                {/* Box de Rodapé do Bloco */}
                <div className={`transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gradient-to-r from-brand-card/0 via-brand-card/40 md:via-brand-card to-brand-card/0 border-y border-brand-border/30 py-8 md:py-10 text-center">
                        <p className="text-white text-base md:text-xl font-medium max-w-3xl mx-auto px-6">
                            "Não é sobre trabalhar mais, é sobre <span className="text-brand-pink font-bold italic">trabalhar com inteligência</span>."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
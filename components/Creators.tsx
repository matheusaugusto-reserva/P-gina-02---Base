
import React from 'react';
import { Play } from 'lucide-react';

interface CreatorCardProps {
  name: string;
  quote: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ name, quote }) => (
    <div className="flex flex-col items-center px-4 w-[320px] md:w-[380px] flex-shrink-0">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 group cursor-pointer border border-brand-border/50 shadow-2xl bg-brand-card">
            <img 
                src="https://i.imgur.com/22bQFDd.jpeg" 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                 <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform">
                     <Play fill="white" className="w-8 h-8 text-white" />
                 </div>
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-sm uppercase tracking-widest">{name}</p>
             </div>
        </div>
        <div className="relative">
            <span className="absolute -top-4 -left-2 text-brand-pink text-4xl opacity-30 font-serif">"</span>
            <p className="text-[#EBCCF8] text-center text-base md:text-lg font-medium italic leading-relaxed px-4">
                {quote}
            </p>
            <span className="absolute -bottom-6 -right-2 text-brand-pink text-4xl opacity-30 font-serif">"</span>
        </div>
    </div>
);

export const Creators: React.FC = () => {
  const testimonials = [
    { name: "Carlos Silva", quote: "Esse método mudou completamente a forma como eu vejo o tráfego pago. Resultados em 15 dias!" },
    { name: "Ana Martins", quote: "Nunca imaginei que seria tão simples escalar minhas vendas. O suporte é incrível." },
    { name: "Ricardo Oliveira", quote: "A melhor decisão que tomei para o meu negócio este ano. Vale cada centavo investido." },
    { name: "Juliana Costa", quote: "Conteúdo direto ao ponto, sem enrolação. Recomendo para todos os meus parceiros." },
    { name: "Marcos Paulo", quote: "Finalmente um método que funciona no campo de batalha real, não apenas na teoria." },
    { name: "Beatriz Santos", quote: "A estrutura de funil que eles ensinam é simplesmente genial. Vendas no automático." },
  ];

  // Triplicamos a lista para garantir que em telas ultra-wide não haja espaços vazios
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-380px * 6 - 2rem * 6)); }
            }
            @media (max-width: 768px) {
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-320px * 6 - 2rem * 6)); }
                }
            }
            .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 35s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        `}} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
             <div className="text-center mb-16 px-5">
                <h2 className="text-brand-text text-3xl lg:text-[3.5rem] font-black uppercase mb-4 leading-tight tracking-tighter">
                    Veja o que estão <span className="text-brand-pink">falando</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-brand-text/60 text-lg">
                    <span className="w-8 h-[1px] bg-brand-border"></span>
                    <p>Resultados reais de quem aplica o método</p>
                    <span className="w-8 h-[1px] bg-brand-border"></span>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-10">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-brand-dark via-brand-dark/80 to-transparent z-20 pointer-events-none"></div>

                <div className="animate-marquee flex gap-8">
                    {repeatedTestimonials.map((t, i) => (
                        <CreatorCard 
                            key={`testimonial-${i}`}
                            name={t.name} 
                            quote={t.quote}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-16 flex flex-col items-center gap-4 px-5">
                <p className="text-brand-text/40 text-sm uppercase tracking-[0.3em] font-bold">Passe o mouse para pausar</p>
                <div className="flex gap-1">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-pink/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

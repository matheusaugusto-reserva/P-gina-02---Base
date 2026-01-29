import React from 'react';
import { User, ShoppingCart, Briefcase, Calculator, Lightbulb, Share, Layout } from 'lucide-react';
import { Button } from './Button';

const TargetChip = ({ text, icon: Icon }: { text: string, icon: any }) => (
    <div className="flex items-center gap-2 px-6 py-2 border border-brand-border rounded-lg text-[#E0E0E0] hover:border-brand-pink transition-colors cursor-default">
        <span>{text}</span>
        <Icon size={18} />
    </div>
);

const NicheImage: React.FC<{ title: string, imgUrl: string }> = ({ title, imgUrl }) => (
    <div className="relative mb-4 break-inside-avoid">
        <p className="font-medium text-center w-full mb-2 text-brand-text">{title}</p>
        <div className="rounded-xl overflow-hidden border border-brand-border">
            <img src={imgUrl} alt={title} className="w-full object-cover aspect-[9/16]" />
        </div>
    </div>
);

export const Niches: React.FC = () => {
  // Using picsum to simulate vertical screenshots
  const niches = [
    { title: "Estética", img: "https://picsum.photos/300/533?random=10" },
    { title: "Moda Praia", img: "https://picsum.photos/300/533?random=11" },
    { title: "Advogada", img: "https://picsum.photos/300/533?random=12" },
    { title: "Dentista", img: "https://picsum.photos/300/533?random=13" },
    { title: "Vendedor de Pijama", img: "https://picsum.photos/300/533?random=14" },
    { title: "Sorveteria", img: "https://picsum.photos/300/533?random=15" },
    { title: "Costura", img: "https://picsum.photos/300/533?random=16" },
    { title: "Médico", img: "https://picsum.photos/300/533?random=17" },
    { title: "Arquitetura", img: "https://picsum.photos/300/533?random=18" },
    { title: "Farmaceutica", img: "https://picsum.photos/300/533?random=19" },
    { title: "Professor Italiano", img: "https://picsum.photos/300/533?random=20" },
    { title: "Petshop", img: "https://picsum.photos/300/533?random=21" },
  ];

  return (
    <section className="py-20 px-4">
        <div className="text-center mb-16">
            <h2 className="text-brand-text text-2xl lg:text-4xl font-bold uppercase mb-8">
                Este treinamento <span className="text-brand-pink">é ideal</span> <br className="lg:hidden" /> para você que é…
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <TargetChip text="Profissional liberal" icon={User} />
                <TargetChip text="Infoprodutor" icon={ShoppingCart} />
                <TargetChip text="Loja virtual ou física" icon={Layout} />
                <TargetChip text="Empresários" icon={Briefcase} />
                <TargetChip text="Prestador de serviço" icon={Calculator} />
                <TargetChip text="Influenciador digital" icon={Lightbulb} />
            </div>

            <div className="mt-10 max-w-[63rem] mx-auto bg-[#1F1828] lg:bg-transparent rounded-xl p-6 border border-[#907BB5] lg:border-none">
                <p className="text-[#A4A0A0] lg:text-white font-medium">
                    *Esta ferramenta não é para curiosos ou quem espera dinheiro fácil. <br className="hidden lg:block"/>
                    Se você está comprometido com seu sucesso e tem <span className="font-bold text-white">vontade de crescer profissionalmente</span>, este é o lugar certo para você.
                </p>
            </div>
        </div>

        <div className="w-full h-[1px] bg-brand-border my-12"></div>

        <div className="max-w-[70rem] mx-auto relative">
             <h2 className="text-brand-text text-2xl lg:text-[2.75rem] font-bold text-center uppercase mb-12">
                Não importa o seu nicho, se você quer vender mais, <br className="lg:hidden"/> <span className="text-brand-pink">este método é para você!</span>
            </h2>

            {/* Masonry-ish Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {niches.map((n, i) => (
                    <NicheImage key={i} title={n.title} imgUrl={n.img} />
                ))}
            </div>
            
            {/* Fade out effect at bottom */}
            <div className="w-full h-64 absolute bottom-0 left-0 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex justify-center mt-8">
                <button className="flex items-center gap-2 py-3 px-8 border border-[#DFDFDF] rounded-lg text-[#E0E0E0] hover:bg-white/10 transition-colors">
                    Ver +150 depoimentos
                    <Share size={18} />
                </button>
            </div>
        </div>

        <div className="flex justify-center mt-12">
             <Button>Quero Mudar de Vida Agora</Button>
        </div>
    </section>
  );
};
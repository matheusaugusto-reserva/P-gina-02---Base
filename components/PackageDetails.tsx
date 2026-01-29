
import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Zap, Target, MessageCircle, Layout, Award } from 'lucide-react';

interface PackageCardProps {
  icon: any;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ icon: Icon, title, description, index, isVisible }) => (
  <div 
    className={`bg-brand-card border border-brand-border p-8 rounded-xl transition-all duration-700 transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      hover:border-brand-pink hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(255,52,141,0.3)]
      group cursor-default relative overflow-hidden`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Efeito de brilho sutil no fundo ao passar o mouse */}
    <div className="absolute -inset-px bg-gradient-to-br from-brand-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="bg-brand-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-brand-border group-hover:border-brand-pink group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
        <Icon className="text-brand-pink" size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-brand-pink transition-colors">
        {title}
      </h3>
      
      <p className="text-brand-text/70 leading-relaxed text-sm lg:text-base group-hover:text-brand-text transition-colors">
        {description}
      </p>
    </div>

    {/* Decoração no canto do card */}
    <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 bg-brand-pink/5 rounded-full blur-2xl group-hover:bg-brand-pink/20 transition-all duration-500" />
  </div>
);

export const PackageDetails: React.FC = () => {
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

  const items = [
    {
      icon: BookOpen,
      title: "Método Completo do Zero",
      description: "Aulas passo a passo, desde as configurações iniciais até as estratégias mais avançadas de conversão."
    },
    {
      icon: Zap,
      title: "Estratégias de Escala",
      description: "Aprenda como investir pouco e ter um retorno exponencial utilizando inteligência de dados."
    },
    {
      icon: Layout,
      title: "Templates e Scripts",
      description: "Modelos prontos de copys, páginas e anúncios validados para você apenas copiar e colar no seu negócio."
    },
    {
      icon: MessageCircle,
      title: "Comunidade Exclusiva",
      description: "Acesso ao grupo VIP de alunos para networking, parcerias e troca de experiências reais."
    },
    {
      icon: Target,
      title: "Análise de Métricas",
      description: "Domine os números do seu negócio e saiba exatamente onde apertar o botão para vender mais."
    },
    {
      icon: Award,
      title: "Certificado Oficial",
      description: "Ao concluir o treinamento, você recebe um certificado reconhecido que comprova sua expertise."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-7 bg-brand-dark relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-[75rem] mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-brand-text text-3xl lg:text-[3.5rem] font-black uppercase leading-tight tracking-tighter">
            Tudo o que <span className="text-brand-pink inline-block hover:scale-105 transition-transform cursor-default">você vai receber</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-brand-pink rounded-full"></div>
            <div className="w-3 h-3 bg-brand-pink rounded-full animate-pulse shadow-[0_0_10px_#FF348D]"></div>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-brand-pink rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PackageCard 
              key={index}
              index={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

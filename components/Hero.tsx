
import React from 'react';
import { Star, ThumbsUp, Heart, Medal, Play } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-[4.5rem] pb-12 px-4 md:px-7">
      {/* Background Blurs */}
      <div className="absolute top-[-4.78rem] left-1/2 -translate-x-1/2 w-full max-w-[40rem] flex justify-center pointer-events-none opacity-60">
        <div className="absolute w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] bg-brand-purple blur-[80px] md:blur-[100px] rounded-full left-0 opacity-50"></div>
        <div className="absolute w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] bg-brand-pink blur-[80px] md:blur-[100px] rounded-full right-0 opacity-50"></div>
      </div>

      <div className="max-w-[63rem] mx-auto relative z-10 flex flex-col items-center space-y-6 md:space-y-10">
        
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 mb-2">
            <span className="font-black text-xl md:text-2xl tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">NOME DO</span>
            <span className="bg-brand-pink text-white font-bold px-1.5 rounded italic text-lg md:text-xl">PRODUTO</span>
        </div>

        <h1 className="text-brand-text text-[1.35rem] xs:text-[1.5rem] sm:text-[1.75rem] lg:text-[2.75rem] font-bold leading-[1.2] lg:leading-[3.5rem] text-center uppercase tracking-tight max-w-[95%] md:max-w-full">
          Este método <span className="text-brand-pink">revolucionário vai transformar</span> os seus resultados e <span className="text-brand-pink">alavancar o seu negócio</span>
        </h1>

        <h2 className="text-white text-center font-bold text-sm md:text-lg lg:text-[1.25rem] max-w-2xl px-2 opacity-90">
          Assista à apresentação gratuita e descubra o passo a passo para:
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full text-[#D9D1E6] text-xs sm:text-sm md:text-base lg:text-lg">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4 border border-brand-border rounded-lg p-3 md:p-4 hover:border-brand-pink transition-colors cursor-default bg-brand-dark/40 backdrop-blur-sm">
              <Star className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <div className="w-[1px] h-6 md:h-8 bg-brand-border"></div>
              <p className="leading-tight">Ter previsibilidade de receita todos os meses sem depender da sorte</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 border border-brand-border rounded-lg p-3 md:p-4 hover:border-brand-pink transition-colors cursor-default bg-brand-dark/40 backdrop-blur-sm">
              <ThumbsUp className="text-blue-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <div className="w-[1px] h-6 md:h-8 bg-brand-border"></div>
              <p className="leading-tight">Aplicar estratégias validadas mesmo começando do absoluto zero</p>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4 border border-brand-border rounded-lg p-3 md:p-4 hover:border-brand-pink transition-colors cursor-default bg-brand-dark/40 backdrop-blur-sm">
              <Heart className="text-red-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <div className="w-[1px] h-6 md:h-8 bg-brand-border"></div>
              <p className="leading-tight">Conquistar a liberdade financeira fazendo o que você ama</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 border border-brand-border rounded-lg p-3 md:p-4 hover:border-brand-pink transition-colors cursor-default bg-brand-dark/40 backdrop-blur-sm">
              <Medal className="text-yellow-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <div className="w-[1px] h-6 md:h-8 bg-brand-border"></div>
              <p className="leading-tight">Se tornar uma referência incontestável no seu nicho de atuação</p>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="relative w-full lg:max-w-[75rem] mx-auto mt-6 md:mt-12 group cursor-pointer aspect-video rounded-xl overflow-hidden border border-brand-border bg-black shadow-2xl">
            <img 
                src="https://i.imgur.com/S5QXiRk.png" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-brand-pink/90 rounded-full flex items-center justify-center pl-1 md:pl-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
                 <p className="text-white font-bold text-sm md:text-xl drop-shadow-md animate-pulse">Clique para liberar o Áudio</p>
            </div>
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center mt-6 md:mt-12">
            <Button className="max-w-[28rem] w-full text-center flex justify-center py-4 md:py-7">
                Quero Garantir Minha Vaga
            </Button>
        </div>
      </div>
    </section>
  );
};

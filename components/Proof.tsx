import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const StatCard = ({ label, before, after }: { label: string, before: boolean, after: boolean }) => (
    <div className={`p-4 rounded-lg border flex flex-col items-center w-full max-w-[260px] ${before ? 'bg-[#F0DEDE] border-[#C81A66] text-[#C81A66]' : 'bg-[#DEF0EE] border-[#009200] text-[#009200]'}`}>
        <p className="font-extrabold text-sm mb-2">{label}</p>
        <div className="w-full bg-white/50 aspect-[9/16] rounded flex flex-col items-center justify-center relative overflow-hidden">
             {/* Mocking a phone screen UI */}
             <div className="absolute top-4 w-full px-4 flex justify-between text-xs font-bold text-gray-600">
                 <span>9:41</span>
                 <span>4G</span>
             </div>
             <div className="mt-8 text-center px-2">
                 <p className="text-black text-xs font-semibold mb-2">Faturamento</p>
                 <p className={`text-3xl font-bold ${before ? 'text-red-500' : 'text-green-600'}`}>
                     {before ? 'R$ 0' : 'R$ 15k'}
                 </p>
                 {after && (
                     <div className="mt-2 flex items-center justify-center text-green-600 text-[10px] font-bold">
                         <TrendingUp size={12} className="mr-1"/> +10,000%
                     </div>
                 )}
                 <div className="mt-4 w-full h-24 bg-gray-200 rounded flex items-end px-1 gap-1">
                      {[10, 20, 15, 30, 20, 40, before ? 20 : 90].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-t ${before ? 'bg-red-300' : 'bg-green-300'}`} style={{height: `${h}%`}}></div>
                      ))}
                 </div>
             </div>
        </div>
    </div>
);

const ComparisonPair = () => (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-brand-border/50 p-6 rounded-xl">
        <StatCard label="Antes do Método" before={true} after={false} />
        <ArrowRight className="hidden md:block text-brand-text rotate-0" />
        <ArrowRight className="md:hidden text-brand-text rotate-90" />
        <StatCard label="Depois do Método" before={false} after={true} />
    </div>
);

export const Proof: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[80rem] mx-auto space-y-12">
        <h2 className="text-brand-text text-2xl lg:text-4xl font-bold text-center uppercase leading-tight">
          Esse é o <span className="text-brand-pink">impacto real</span> que causamos na vida <br className="lg:hidden" /> dos nossos alunos...
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
            <ComparisonPair />
            <ComparisonPair />
            <ComparisonPair />
        </div>

        <div className="mt-20">
             <h2 className="text-brand-text text-2xl lg:text-4xl font-bold text-center uppercase leading-tight mb-8">
                Resultados que falam <span className="text-brand-pink">por si mesmos...</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-[#EBCCF8]">
                <div className="flex flex-col items-center">
                    <p className="font-semibold mb-4 min-h-[3rem]">"Consegui dobrar meu faturamento em menos de 30 dias"</p>
                    <img src="https://picsum.photos/300/400?random=1" alt="Depoimento 1" className="rounded-lg border border-brand-border" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-semibold mb-4 min-h-[3rem]">"Aprendi que vender é sobre gerar valor genuíno"</p>
                    <img src="https://picsum.photos/300/400?random=2" alt="Depoimento 2" className="rounded-lg border border-brand-border" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-semibold mb-4 min-h-[3rem]">"Comecei do zero e hoje vivo exclusivamente disso"</p>
                    <img src="https://picsum.photos/300/400?random=3" alt="Depoimento 3" className="rounded-lg border border-brand-border" />
                </div>
                 <div className="flex flex-col items-center">
                    <p className="font-semibold mb-4 min-h-[3rem]">"O melhor investimento que fiz na minha carreira"</p>
                    <img src="https://picsum.photos/300/400?random=4" alt="Depoimento 4" className="rounded-lg border border-brand-border" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
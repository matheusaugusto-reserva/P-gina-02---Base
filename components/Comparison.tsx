import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[55rem] mx-auto">
        <h2 className="text-brand-text text-2xl lg:text-4xl font-bold text-center uppercase mb-12">
            <span className="text-brand-pink">Você vai aprender aqui</span> o que o mercado tradicional esconde de você
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <div className="border border-brand-border rounded-lg h-fit">
                <div className="bg-brand-card p-8 rounded-t-lg">
                    <h3 className="text-2xl font-bold">Método Comum</h3>
                </div>
                <div className="p-8 text-[#D9D1E6]">
                    <p className="font-bold mb-6">A maioria dos cursos ensina teorias complexas que na prática só fazem você perder tempo e dinheiro.</p>
                    <ul className="space-y-4 font-light">
                        <li className="flex items-start gap-3">
                            <X className="text-brand-pink flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Estratégias que exigem 24h de dedicação diária.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="text-brand-pink flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Necessidade de altos investimentos em anúncios.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="text-brand-pink flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Conteúdo raso que não gera resultados práticos.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Stories 10x Method */}
            <div className="border-2 border-brand-pink rounded-lg shadow-[0px_4px_52px_0px_rgba(255,52,141,0.30)] transform md:-translate-y-4 relative z-10 bg-brand-dark">
                <div className="bg-brand-card p-8 rounded-t-lg">
                    <h3 className="text-2xl font-bold">Nosso <span className="text-brand-pink">Método Exclusivo</span></h3>
                </div>
                <div className="p-8 text-white">
                    <p className="font-bold mb-6 text-lg">
                        Focamos no que realmente importa: resultados. Uma metodologia enxuta, direta ao ponto e validada por milhares de alunos.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check className="text-brand-green flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Não precisa ser um expert em tecnologia ou design.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-brand-green flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Vendas acontecendo de forma automática e recorrente.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-brand-green flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Conteúdos estratégicos que geram desejo imediato.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-brand-green flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Maior ROI (Retorno sobre Investimento) do mercado.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-brand-green flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <span>Fidelização de clientes a longo prazo.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
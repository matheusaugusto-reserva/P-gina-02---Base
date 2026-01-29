import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section className="py-20 px-7">
        <h2 className="text-brand-text text-2xl font-bold uppercase text-center mb-8 lg:hidden">
            Quem sou <span className="text-brand-pink">eu</span>
        </h2>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-12">
            <div className="flex-shrink-0 relative">
                <img 
                    src="https://picsum.photos/400/500?grayscale" 
                    alt="Sua Foto" 
                    className="rounded-xl border border-brand-border w-full max-w-[300px] lg:max-w-[350px] shadow-[0_0_30px_rgba(156,18,241,0.3)]"
                />
            </div>

            <div className="flex flex-col gap-6 text-[#D9D1E6] max-w-2xl">
                <h2 className="text-[2.75rem] font-bold uppercase hidden lg:block">
                    Quem sou <span className="text-brand-pink">eu</span>
                </h2>

                <div className="space-y-6 text-xl text-center lg:text-left text-gray-300 leading-relaxed">
                    <p>
                        Referência no mercado digital, dediquei os últimos anos a validar um método capaz de transformar negócios comuns em máquinas de vendas previsíveis.
                    </p>
                    <p>
                        Minha missão é simplificar o complexo e entregar para você o caminho exato que eu e meus alunos utilizamos para escalar resultados com consistência e liberdade.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};
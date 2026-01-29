import React from 'react';

const LogicCard = ({ title, text, bgColor, isWide = false }: { title: string, text: string, bgColor: string, isWide?: boolean }) => (
    <div className={`py-12 md:py-16 px-6 md:px-10 w-full ${bgColor} border-b lg:border-none border-white/5`}>
        <p className="text-xl md:text-2xl font-bold leading-tight mb-4 md:group-hover:text-brand-pink transition-colors">{title}</p>
        <div className="h-[1px] w-16 md:w-full bg-gradient-to-r from-brand-pink to-transparent mb-6"></div>
        <p className="text-sm md:text-base tracking-wide opacity-80 leading-relaxed">{text}</p>
    </div>
);

export const Logic: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-5 md:px-7">
        <div className="max-w-[75rem] mx-auto border border-brand-border rounded-[1.25rem] bg-[#24232680] p-1 lg:p-12 overflow-hidden shadow-2xl">
            <h2 className="text-brand-text text-2xl lg:text-[2.75rem] font-bold lg:leading-[3.5rem] text-center uppercase mb-8 md:mb-12 mt-8 px-4">
                Entenda a lógica por trás do <span className="text-brand-pink">Sucesso</span>
            </h2>

            <div className="flex flex-col text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <LogicCard 
                        title="Funil de Vendas Otimizado"
                        text="Nossa metodologia cria um fluxo contínuo de clientes, desde o primeiro contato até o fechamento da venda, maximizando cada oportunidade de lucro."
                        bgColor="bg-[#2a2034] lg:bg-[#1F1828]"
                    />
                     <LogicCard 
                        title="Autoridade Instantânea"
                        text="Posicione-se como líder no seu mercado através de gatilhos mentais poderosos que geram confiança imediata na sua audiência."
                        bgColor="bg-[#30253F]"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <LogicCard 
                        title="Engenharia de Conversão"
                        text="Utilizamos técnicas avançadas de persuasão para transformar simples interessados em clientes fiéis."
                        bgColor="bg-[#1F1828] lg:bg-[#403156]"
                    />
                     <LogicCard 
                        title="Conteúdo Magnético"
                        text="Aprenda a criar materiais que capturam a atenção do seu público em segundos."
                        bgColor="bg-[#30253F] lg:bg-[#564176]"
                    />
                     <LogicCard 
                        title="Conexão Emocional"
                        text="Venda para o coração. Crie laços profundos que blindam sua marca contra a concorrência."
                        bgColor="bg-[#403156] lg:bg-[#6A528E]"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};
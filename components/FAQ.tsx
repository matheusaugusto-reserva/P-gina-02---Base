import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden bg-transparent">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-left text-white hover:bg-white/5 transition-colors"
            >
                <h3 className="text-lg font-bold">{question}</h3>
                {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>
            {isOpen && (
                <div className="px-6 py-4 text-gray-300 border-t border-gray-700 bg-white/5">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export const FAQ: React.FC = () => {
  const faqs = [
    { q: "Esse curso é para iniciantes?", a: "Sim! Nossa metodologia foi desenhada para te levar do zero ao avançado, passo a passo." },
    { q: "Funciona para qualquer tipo de negócio?", a: "Absolutamente. Os princípios ensinados são universais e se aplicam a produtos, serviços e negócios locais." },
    { q: "Em quanto tempo terei resultados?", a: "Isso depende da sua dedicação, mas muitos alunos relatam melhorias significativas logo nas primeiras semanas." },
    { q: "Tenho alguma garantia?", a: "Sim, oferecemos garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro." },
    { q: "Preciso ter muitos seguidores?", a: "Não. Ensinamos justamente como qualificar a audiência que você já tem e atrair novos seguidores compradores." },
    { q: "Como funciona o suporte?", a: "Você terá acesso a uma área de membros exclusiva para tirar todas as suas dúvidas com nossa equipe." },
    { q: "O acesso é vitalício?", a: "Você terá acesso ao conteúdo e atualizações pelo período de 1 ano, podendo renovar com condição especial." },
    { q: "Quais são as formas de pagamento?", a: "Aceitamos cartão de crédito em até 12x, PIX e boleto bancário." },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F0F19]">
        <div className="max-w-[50rem] mx-auto">
            <h2 className="text-brand-text text-2xl lg:text-[2.75rem] font-bold text-center uppercase mb-12">
                FAQ - <span className="text-brand-pink">Perguntas frequentes</span>
            </h2>
            
            <div className="space-y-3">
                {faqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.q} answer={faq.a} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Button>Quero Garantir Minha Vaga</Button>
            </div>
        </div>
    </section>
  );
};
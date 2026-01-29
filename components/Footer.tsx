import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#363636] py-8 px-4 text-white text-sm">
        <div className="max-w-[76rem] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left text-gray-400">
                <p>© 2025 Sua Empresa | Todos os direitos reservados.</p>
                <p>CNPJ: 00.000.000/0001-00</p>
            </div>
            <div className="flex gap-4 font-bold underline">
                <a href="#" className="hover:text-brand-pink transition-colors">Política de Privacidade</a>
                <span>|</span>
                <a href="#" className="hover:text-brand-pink transition-colors">Termos de Uso</a>
            </div>
        </div>
    </footer>
  );
};
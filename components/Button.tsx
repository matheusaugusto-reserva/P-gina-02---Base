import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'whatsapp' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseStyles = "text-[1.125rem] font-bold leading-[1.5rem] py-4 md:py-7 px-6 md:px-10 rounded-[0.5rem] uppercase ease-in-out transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-[#FF348D] text-white hover:bg-[#D91A6C] shadow-[0_0_20px_rgba(255,52,141,0.4)]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
    outline: "border border-[#DFDFDF] text-[#E0E0E0] hover:bg-white/10"
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-full md:w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
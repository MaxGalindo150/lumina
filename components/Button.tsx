import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-md",
    secondary: "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 shadow-md",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366] shadow-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {variant === 'whatsapp' && <MessageCircle className="w-5 h-5 mr-2" />}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {variant === 'whatsapp' && <MessageCircle className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;
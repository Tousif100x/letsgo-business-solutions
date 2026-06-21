import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-forest/50 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-forest text-brand-ivory hover:bg-[#153e2a] active:bg-[#0c2418]',
    secondary: 'bg-brand-charcoal text-brand-ivory hover:bg-[#2e2e2e] active:bg-black',
    accent: 'bg-brand-gold text-brand-charcoal hover:bg-[#b0783b] active:bg-[#9c662e] hover:text-white',
    outline: 'border border-brand-beige text-brand-charcoal hover:border-brand-forest hover:text-brand-forest hover:bg-brand-forest/5',
    text: 'text-brand-forest hover:text-[#153e2a] px-0 py-0 bg-transparent focus:ring-0 focus:ring-offset-0',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

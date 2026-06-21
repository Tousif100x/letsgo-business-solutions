import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  padding = 'md',
  bordered = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-brand-white rounded transition-all duration-300';
  const borderStyle = bordered ? 'border border-brand-beige' : '';
  const hoverStyle = hoverEffect ? 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-brand-gold/35' : '';
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  return (
    <div
      className={`${baseStyles} ${borderStyle} ${hoverStyle} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;

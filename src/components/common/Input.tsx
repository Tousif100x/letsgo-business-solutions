import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  multiline = false,
  rows = 4,
  className = '',
  ...props
}) => {
  const baseInputStyles = `w-full bg-brand-white border border-brand-beige rounded px-4 py-3 font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest transition-all duration-200 placeholder:text-brand-charcoal/30 ${
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
  }`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/65 mb-2 font-sans">
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          rows={rows}
          className={`${baseInputStyles} resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`${baseInputStyles} ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-sans font-medium">{error}</p>
      )}
    </div>
  );
};
export default Input;

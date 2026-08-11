import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightAction?: ReactNode;
  prefixText?: ReactNode;
}

export const Input = ({
  label,
  error,
  leftIcon,
  rightAction,
  prefixText,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-[#111111] mb-1.5"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {prefixText && (
          <div className="absolute left-3.5 z-10 flex items-center gap-1.5 text-sm font-semibold text-[#111111] pointer-events-none">
            {prefixText}
          </div>
        )}

        {leftIcon && !prefixText && (
          <div className="absolute left-3.5 z-10 text-[#9CA3AF] pointer-events-none flex items-center">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          className={`w-full bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg text-sm text-[#111111] placeholder-[#9CA3AF] outline-none transition-all duration-200 focus:bg-white focus:border-[#111111] focus:ring-1 focus:ring-[#111111] ${
            prefixText ? 'pl-18' : leftIcon ? 'pl-10.5' : 'px-4'
          } ${rightAction ? 'pr-10.5' : 'px-4'} py-3 ${
            error ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : ''
          } ${className}`}
          {...props}
        />

        {rightAction && (
          <div className="absolute right-3.5 flex items-center">
            {rightAction}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-[#EF4444] font-medium">{error}</p>
      )}
    </div>
  );
};

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tab';
  active?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  active = false,
  fullWidth = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all duration-200 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]';

  const variants = {
    primary:
      'bg-[#111111] text-white border border-[#111111] rounded-lg px-6 py-3.5 hover:bg-[#2D2D2D] hover:border-[#2D2D2D] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    secondary:
      'bg-white text-[#111111] border border-[#E5E5E5] rounded-lg px-5 py-3 hover:bg-[#F4F4F4] hover:border-[#DADADA] active:bg-[#E5E5E5] disabled:opacity-60 disabled:cursor-not-allowed',
    tab: `rounded-md py-2 text-xs font-medium border-0 transition-all duration-200 ${
      active
        ? 'bg-white text-[#111111] font-semibold shadow-xs'
        : 'bg-transparent text-[#6B7280] hover:text-[#111111]'
    }`,
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

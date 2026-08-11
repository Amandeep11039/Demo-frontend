import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`bg-white border border-[#E5E5E5] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

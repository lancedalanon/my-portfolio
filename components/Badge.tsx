import React, { FC, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`flex items-center rounded-full font-semibold ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;

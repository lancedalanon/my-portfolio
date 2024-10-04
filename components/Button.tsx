import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className}`} // Increased padding and font size
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

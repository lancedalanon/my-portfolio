import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-white text-custom-800 font-semibold py-3 px-6 text-lg rounded-xl shadow hover:bg-gray-200 transition-all duration-200 ${className}`} // Increased padding and font size
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

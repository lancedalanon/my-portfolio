
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={`shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
     {children}
    </div>
  );
};

const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
     {children}
    </div>
    );
};

const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
     {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
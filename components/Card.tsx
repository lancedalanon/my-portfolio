
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
     {children}
    </div>
  );
};

const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
     {children}
    </div>
    );
};

const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
     {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
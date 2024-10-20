import React from 'react';

interface SpinnerProps {
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
    return (
        <div className={`flex items-center justify-center mt-8 ${className}`}>
            <div className="w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;

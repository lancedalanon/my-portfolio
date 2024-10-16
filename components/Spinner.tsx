import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <div className="w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
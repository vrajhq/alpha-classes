import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };

  return (
    <button
      className={\`px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 \${variants[variant]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

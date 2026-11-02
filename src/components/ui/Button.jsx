import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', type = 'button', ...props }) => {
  const variants = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    outline: 'button--outline',
    ghost: 'button--ghost',
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      className={`button ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

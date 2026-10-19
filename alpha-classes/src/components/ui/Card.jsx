import React from 'react';

export const Card = ({ children, className = '', title, description }) => {
  return (
    <div className={\`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden \${className}\`}>
      {(title || description) && (
        <div className="p-6 pb-0">
          {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
          {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

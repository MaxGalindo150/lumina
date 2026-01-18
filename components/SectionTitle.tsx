import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-brand-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1.5 w-24 bg-brand-500 rounded-full mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
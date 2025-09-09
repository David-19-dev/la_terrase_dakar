import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className="font-serif text-gold-600 text-2xl md:text-3xl">La Terrasse</h1>
      <span className="font-serif text-gold-500 text-xs md:text-sm tracking-widest">DE DAKAR</span>
    </div>
  );
};

export default Logo;
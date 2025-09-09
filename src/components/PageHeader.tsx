import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div 
      className={`relative h-80 flex items-center justify-center bg-cover bg-center bg-no-repeat ${
        backgroundImage ? '' : 'bg-dark-800'
      }`}
      style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` } : {}}
    >
      <motion.h1 
        className="font-serif text-5xl md:text-6xl text-gold-600 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PageHeader;
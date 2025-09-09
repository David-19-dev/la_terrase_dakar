import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="font-serif text-gold-600 text-6xl md:text-7xl mb-6">404</h1>
          <h2 className="font-serif text-gold-500 text-2xl md:text-3xl mb-8">Page Non Trouvée</h2>
          <p className="text-gray-300 max-w-md mx-auto mb-12">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="gold-button">
            RETOUR À L'ACCUEIL
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFoundPage;
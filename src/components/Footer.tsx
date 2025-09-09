import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <Logo className="mx-auto md:mx-0 mb-6" />
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Un voyage culinaire en bord de mer depuis 1997, au complexe Terrou-Bi à Dakar.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-gold-600 text-xl mb-6">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold-500 transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold-500 transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="hover:text-gold-500 transition-colors duration-300">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-gold-500 transition-colors duration-300">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-gold-500 transition-colors duration-300">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-gold-500 transition-colors duration-300">
                  Réservation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-gold-600 text-xl mb-6">Informations</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-gold-500" />
                <span>Complexe Terrou-Bi, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} className="text-gold-500" />
                <a 
                  href="tel:+221123456789" 
                  className="hover:text-gold-500 transition-colors duration-300"
                >
                  +221 12 345 67 89
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-gold-500" />
                <a 
                  href="mailto:contact@laterrassededakar.com" 
                  className="hover:text-gold-500 transition-colors duration-300"
                >
                  contact@laterrassededakar.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Clock size={18} className="text-gold-500" />
                <span>Mar-Dim: 12h00-15h00, 19h00-23h00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} La Terrasse de Dakar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
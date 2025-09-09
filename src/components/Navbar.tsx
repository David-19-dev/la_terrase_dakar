import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
  isTransparent: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isTransparent 
          ? 'bg-dark-800 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-12 md:h-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className="nav-link font-serif text-sm tracking-wider">
            ACCUEIL
          </NavLink>
          <NavLink to="/menu" className="nav-link font-serif text-sm tracking-wider">
            MENU
          </NavLink>
          <NavLink to="/evenements" className="nav-link font-serif text-sm tracking-wider">
            ÉVÉNEMENTS
          </NavLink>
          <NavLink to="/a-propos" className="nav-link font-serif text-sm tracking-wider">
            À PROPOS
          </NavLink>
          <NavLink to="/galerie" className="nav-link font-serif text-sm tracking-wider">
            GALERIE
          </NavLink>
          <NavLink to="/contact" className="nav-link font-serif text-sm tracking-wider">
            CONTACT
          </NavLink>
          <NavLink to="/reservation" className="gold-button">
            RÉSERVER
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-dark-900 z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <NavLink 
            to="/" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            ACCUEIL
          </NavLink>
          <NavLink 
            to="/menu" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            MENU
          </NavLink>
          <NavLink 
            to="/evenements" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            ÉVÉNEMENTS
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            À PROPOS
          </NavLink>
          <NavLink 
            to="/galerie" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            GALERIE
          </NavLink>
          <NavLink 
            to="/contact" 
            className="nav-link font-serif text-xl"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </NavLink>
          <NavLink 
            to="/reservation" 
            className="gold-button mt-4"
            onClick={() => setIsOpen(false)}
          >
            RÉSERVER
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
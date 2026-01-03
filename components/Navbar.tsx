
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'HubSpot & IA', href: '#hubspot' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Backdrop for Mobile Menu: Closes menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled || isMenuOpen ? 'glass shadow-sm' : 'bg-transparent'} py-4`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl font-outfit">
              G
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight hidden sm:block">
              Ginne <span className="text-indigo-500">Coronado</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm capitalize tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:ginne.carol@gmail.com" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-200 capitalize"
            >
              Email
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-800 focus:outline-none p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl w-6 text-center`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 absolute w-full top-full left-0 py-6 px-6 shadow-xl animate-in slide-in-from-top duration-300 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-indigo-600 font-bold text-lg py-2 border-b border-slate-50 capitalize"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:ginne.carol@gmail.com" 
                className="bg-indigo-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 capitalize"
              >
                Contactar por Email
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

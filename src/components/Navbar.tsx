import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/911171790000', '_blank');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logos */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/Apollo_Hospitals_Logo.svg" 
                alt="Apollo Hospital" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
              <img 
                src="/yapita-logo.png" 
                alt="Yapita Health" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={scrollToContact}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-fortis-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-fortis-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={scrollToContact}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-fortis-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 mx-4"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
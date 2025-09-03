import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Reset scroll position when navigating to home page
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && location.pathname === '/') {
      // Same page anchor link
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#/')) {
      // Route navigation
      window.location.href = href;
    } else {
      // External or other links
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white">NeverLeaked</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/#/about" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#/about');
              }}
            >
              About
            </a>
            <a 
              href="/#/case-studies" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#/case-studies');
              }}
            >
              Case Studies
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#how-it-works');
              }}
            >
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}>Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>Contact</a>
            <button 
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Secure My Course
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/#/about" 
                className="text-gray-300 hover:text-white transition-colors px-4"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/#/about');
                }}
              >
                About
              </a>
              <a 
                href="/#/case-studies" 
                className="text-gray-300 hover:text-white transition-colors px-4"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/#/case-studies');
                }}
              >
                Case Studies
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors px-4"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#how-it-works');
                }}
              >
                How It Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors px-4" onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}>Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors px-4" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>Contact</a>
              <button
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors mx-4"
              >
                Secure My Course
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Sectors', path: '/sectors' },
    { name: 'Automation', path: '/automation' },
    { name: 'Real Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/sectors') {
      return location.pathname.startsWith('/sectors');
    }
    if (path === '/automation') {
      return location.pathname.startsWith('/automation');
    }
    if (path === '/projects') {
      return location.pathname.startsWith('/projects');
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md border-b border-brand-beige shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-forest transition-colors duration-300">
            LETSGO
          </span>
          <span className="font-sans text-[8px] font-bold tracking-[0.25em] text-brand-charcoal/50 uppercase -mt-1 group-hover:text-brand-forest/75 transition-colors duration-300">
            Business Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-forest'
                      : 'text-brand-charcoal/70 hover:text-brand-forest'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <Button variant="outline" size="sm">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-brand-charcoal p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-brand-ivory z-40 transition-transform duration-300 ease-in-out border-t border-brand-beige px-8 py-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.path} className="border-b border-brand-beige pb-4">
              <Link
                to={link.path}
                className={`block font-serif text-xl font-medium tracking-wide ${
                  isActive(link.path) ? 'text-brand-forest' : 'text-brand-charcoal/80'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link to="/contact" className="block w-full">
              <Button variant="primary" fullWidth size="lg">
                Book Free Consultation
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

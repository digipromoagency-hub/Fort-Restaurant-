import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Landmark } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#standout' },
    { name: 'Our Story', href: '#about' },
    { name: 'The Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-heritage-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-heritage-gold/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-2 bg-heritage-gold text-heritage-dark rounded-md transition-transform duration-300 group-hover:rotate-12">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-heritage-gold transition-colors duration-300">
                FORT
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-heritage-gold font-medium">
                Restaurant • Chennai
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase font-bold tracking-[0.25em] text-gray-300 hover:text-heritage-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-heritage-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Booking CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-white">Live: Serving Dinner</span>
            </div>
            <a
              href="tel:+914424345678"
              className="flex items-center text-[10px] tracking-wider uppercase text-gray-300 hover:text-heritage-gold transition-colors space-x-1"
            >
              <Phone className="w-3.5 h-3.5 text-heritage-gold" />
              <span>+91 44 2434 5678</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-heritage-gold text-heritage-dark text-[10px] font-bold tracking-[0.15em] uppercase rounded hover:bg-white hover:text-heritage-dark transition-all duration-300 shadow-md hover:shadow-heritage-gold/20"
              id="nav-booking-cta"
            >
              Book A Table
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-heritage-gold text-heritage-dark text-xs font-semibold tracking-wider uppercase rounded hover:bg-white transition-colors duration-200"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-heritage-dark border-b border-heritage-gold/20 px-4 pt-2 pb-6 space-y-1 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-heritage-gold/10 border-l-2 border-transparent hover:border-heritage-gold transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-heritage-gold" />
              <span>+91 44 2434 5678</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-heritage-gold" />
              <span>11:30 AM - 11:00 PM</span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-heritage-gold text-heritage-dark text-sm font-semibold tracking-wider uppercase rounded text-center block shadow"
            >
              Book A Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

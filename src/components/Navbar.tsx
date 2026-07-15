import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Landmark } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  currentPage: string;
  onChangePage: (page: string) => void;
}

export default function Navbar({ onOpenBooking, currentPage, onChangePage }: NavbarProps) {
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
    { name: 'Home', id: 'home' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Our Story', id: 'our-story' },
    { name: 'The Menu', id: 'the-menu' },
    { name: 'Reservations', id: 'reservations' },
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
          <button
            onClick={() => {
              onChangePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 group text-left"
          >
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
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onChangePage(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-[10px] uppercase font-bold tracking-[0.25em] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-heritage-gold after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? 'text-heritage-gold after:w-full'
                      : 'text-gray-300 hover:text-heritage-gold after:w-0'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Booking CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-white">Live: Serving Dinner</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <a
                href="tel:+919551258012"
                className="flex items-center text-[10px] tracking-wider uppercase text-gray-300 hover:text-heritage-gold transition-colors space-x-1"
                title="Call for reservation"
              >
                <Phone className="w-3.5 h-3.5 text-heritage-gold" />
                <span>+91 95512 58012</span>
              </a>
              <a
                href="https://wa.me/919551258012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[9px] tracking-wider uppercase text-green-400 hover:text-white transition-colors space-x-1"
                title="WhatsApp Us"
              >
                <svg className="w-3 h-3 fill-current text-green-500" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
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
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setIsOpen(false);
                  onChangePage(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left block px-3 py-3 rounded-md text-base font-medium border-l-2 transition-all duration-150 ${
                  isActive
                    ? 'text-heritage-gold bg-heritage-gold/10 border-heritage-gold'
                    : 'text-gray-300 hover:text-white hover:bg-heritage-gold/10 border-transparent hover:border-heritage-gold'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-4 px-3 flex flex-col space-y-3">
            <a
              href="tel:+919551258012"
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-heritage-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-heritage-gold" />
              <span>+91 95512 58012</span>
            </a>
            <a
              href="https://wa.me/919551258012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>+91 95512 58012 (WhatsApp)</span>
            </a>
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

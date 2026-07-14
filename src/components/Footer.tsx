import React from 'react';
import { Landmark, Phone, Mail, MapPin, Star, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-heritage-dark text-white pt-16 pb-8 border-t border-heritage-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-heritage-gold text-heritage-dark rounded-none transition-transform duration-300 group-hover:rotate-6">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-serif-display text-xl font-bold tracking-wider text-white">
                FORT RESTAURANT
              </span>
            </a>
            
            <p className="text-xs text-gray-400 font-serif italic leading-relaxed max-w-sm">
              Fort Restaurant preserves and celebrates the forgotten noble recipes of Chennai and Chettinad, serving authentic royal banquets in a restored 18th-century sanctuary.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-none bg-white/5 text-gray-400 hover:bg-heritage-gold hover:text-heritage-dark transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-none bg-white/5 text-gray-400 hover:bg-heritage-gold hover:text-heritage-dark transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold text-heritage-gold uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li>
                <a href="#home" className="hover:text-heritage-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#standout" className="hover:text-heritage-gold transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-heritage-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-heritage-gold transition-colors">
                  The Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-heritage-gold transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-heritage-gold uppercase tracking-[0.2em]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-heritage-gold flex-shrink-0 mt-0.5" />
                <span>
                  64, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu - 600006
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                <a href="tel:+914424345678" className="hover:text-heritage-gold transition-colors">
                  +91 44 2434 5678
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                <a href="mailto:noblefeast@fortrestaurant.com" className="hover:text-heritage-gold transition-colors">
                  noblefeast@fortrestaurant.com
                </a>
              </li>
            </ul>
          </div>

          {/* Operating hours list */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-heritage-gold uppercase tracking-[0.2em]">
              Royal Dining Hours
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li className="flex justify-between">
                <span>Tuesday – Sunday:</span>
                <span className="text-white">11:30 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between text-amber-500 font-medium">
                <span>Mondays:</span>
                <span>Closed (Grinding Day)</span>
              </li>
              <li className="border-t border-white/5 pt-2 text-[10px] text-gray-500 leading-relaxed italic font-serif">
                * We recommend booking tables at least 24 hours in advance on weekends to secure seating.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[11px] text-gray-500 font-light">
          <p>© 2026 Fort Restaurant, Chennai. All Royal Rights Reserved.</p>
          <p>
            Designed with <Star className="w-3 h-3 text-heritage-gold inline fill-heritage-gold" /> for Tamil culinary heritage.
          </p>
        </div>

      </div>
    </footer>
  );
}

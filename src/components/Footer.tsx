import React from 'react';
import { Landmark, Phone, Mail, MapPin, Star, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onChangePage: (page: string) => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  return (
    <footer className="bg-heritage-dark text-white pt-16 pb-8 border-t border-heritage-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => {
                onChangePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 group text-left"
            >
              <div className="p-2 bg-heritage-gold text-heritage-dark rounded-none transition-transform duration-300 group-hover:rotate-6">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-serif-display text-xl font-bold tracking-wider text-white">
                FORT RESTAURANT
              </span>
            </button>
            
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
            <ul className="space-y-2 text-xs text-gray-400 font-light flex flex-col items-start gap-1">
              <li>
                <button
                  onClick={() => {
                    onChangePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onChangePage('why-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onChangePage('our-story');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onChangePage('the-menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  The Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onChangePage('reservations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Reservations
                </button>
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
                <a href="tel:+919551258012" className="hover:text-heritage-gold transition-colors">
                  +91 95512 58012
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/919551258012" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  +91 95512 58012 (WhatsApp)
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center text-[11px] text-gray-500 font-light border-t border-white/5 mt-8">
          <p>© 2026 Fort Restaurant, Chennai. All Royal Rights Reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-400 font-sans">
            <button
              onClick={() => {
                onChangePage('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-heritage-gold transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onChangePage('disclaimer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-heritage-gold transition-colors duration-200"
            >
              Disclaimer
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onChangePage('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-heritage-gold transition-colors duration-200"
            >
              Terms of Services
            </button>
          </div>

          <p>
            Designed with <Star className="w-3 h-3 text-heritage-gold inline fill-heritage-gold mx-0.5" /> for Tamil culinary heritage.
          </p>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronDown, Award, Utensils } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-heritage-dark text-white pt-20"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/chettinad_meals_hero_1784036214119.jpg"
          alt="Traditional South Indian Chettinadu Meals on Banana Leaf"
          className="w-full h-full object-cover object-center opacity-75 saturate-125 contrast-[1.05] brightness-[1.05] transform scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-dark/95 via-heritage-dark/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/90 via-transparent to-heritage-dark/20 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left py-12 md:py-24">
        <div className="max-w-3xl">
          {/* Subheading in Artistic style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-heritage-gold font-bold">
              Est. 2011 &mdash; Chennai
            </p>
          </motion.div>

          {/* Title in Giant Artistic Serif layout */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-display text-6xl sm:text-7xl md:text-8xl font-medium leading-[0.85] tracking-tighter mb-8"
          >
            FORT<br />
            <span className="italic text-5xl sm:text-6xl md:text-7xl text-heritage-gold font-light block mt-2">
              Restaurant
            </span>
          </motion.h1>

          {/* Thin divider line as in style reference */}
          <div className="h-px w-24 bg-white/30 my-8"></div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-serif italic leading-relaxed mb-8 max-w-2xl"
          >
            "Perched on the edge of history, we blend ancestral spice secrets with modern coastal techniques."
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-heritage-gold text-heritage-dark text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-heritage-gold/10 hover:shadow-white/20 transform hover:-translate-y-0.5"
              id="hero-cta-book"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>
            
            <a
              href="#menu"
              className="px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:border-heritage-gold hover:text-heritage-gold transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Menu</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating features at bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center space-x-12 text-center text-xs text-gray-400 uppercase tracking-widest">
        <div>
          <span className="block text-heritage-gold font-serif-display text-lg font-bold">1784</span>
          <span>Fort Architecture</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-heritage-gold" />
        <div>
          <span className="block text-heritage-gold font-serif-display text-lg font-bold">100%</span>
          <span>Granite Ground Masala</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-heritage-gold" />
        <div>
          <span className="block text-heritage-gold font-serif-display text-lg font-bold">Fresh</span>
          <span>Kasimedu Coastal Catch</span>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="#standout"
          className="p-2 rounded-full bg-white/5 border border-white/10 text-heritage-gold block hover:bg-heritage-gold/10 transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

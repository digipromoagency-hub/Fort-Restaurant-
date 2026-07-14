import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Sparkles, Scroll, Ship, Star } from 'lucide-react';
import { STANDOUT_FEATURES } from '../data';

export default function StandoutSection() {
  // Safe mapping of mock string keys to actual Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'castle':
        return <Landmark className="w-8 h-8 text-heritage-gold" />;
      case 'drumstick':
        return <Sparkles className="w-8 h-8 text-heritage-gold" />;
      case 'scroll':
        return <Scroll className="w-8 h-8 text-heritage-gold" />;
      case 'ship':
        return <Ship className="w-8 h-8 text-heritage-gold" />;
      default:
        return <Sparkles className="w-8 h-8 text-heritage-gold" />;
    }
  };

  return (
    <section
      id="standout"
      className="py-20 md:py-28 bg-heritage-dark text-white relative overflow-hidden"
    >
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heritage-gold/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center space-x-1.5 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-heritage-gold">
              What Sets Us Apart
            </span>
          </div>
          
          <h2 className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tighter mb-6">
            Why We Stand Out From <br />
            <span className="text-heritage-gold italic font-light">The Chennai Dining Crowd</span>
          </h2>
          
          <p className="text-gray-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80">
            In a city of thousands of restaurants, Fort Restaurant remains unrivaled. Here is the heritage philosophy, culinary discipline, and craftsmanship that distinguishes our table.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STANDOUT_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#232323] border border-white/5 hover:border-heritage-gold/40 rounded-none p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 transform hover:-translate-y-1.5 flex flex-col justify-between"
              id={`standout-card-${idx}`}
            >
              {/* Backglow element on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 p-4 inline-block bg-heritage-dark rounded-none border border-white/10 group-hover:bg-heritage-gold group-hover:text-heritage-dark transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif-display text-xl font-bold text-white mb-3 group-hover:text-heritage-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-heritage-gold uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>The Fort Standard</span>
                <span>0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-24 p-8 md:p-12 bg-[#232323] border border-heritage-gold/20 text-center max-w-4xl mx-auto shadow-artistic"
        >
          <h4 className="font-serif-display text-2xl font-semibold mb-4 italic text-heritage-gold">
            "Taste is our Heritage. Quality is our Religion."
          </h4>
          <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-6">
            From sourcing native seed oils from local cold-presses to keeping chemical preservatives and artificial MSG strictly out of our kitchens, we honor the culinary rules of ancient Tamil Nadu.
          </p>
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase font-bold text-heritage-gold">
            <span>Guaranteed 100% Authentic Fine Dining</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

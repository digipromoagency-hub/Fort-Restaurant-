import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Sparkles, ChefHat } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-heritage-cream text-heritage-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400"
                  alt="Fort Restaurant Historic Dining Room"
                  className="rounded-none shadow-artistic object-cover h-64 w-full border border-heritage-gold/20"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-heritage-dark text-white p-6 rounded-none border-l-4 border-heritage-gold"
                >
                  <p className="font-serif-display text-3xl font-bold text-heritage-gold">100%</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-1">
                    Authentic Spices
                  </p>
                </motion.div>
              </div>
              
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-heritage-dark text-white p-6 rounded-none border-r-4 border-heritage-gold/40 text-center"
                >
                  <p className="font-serif-display text-2xl font-bold text-heritage-gold">Est. 2011</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-1">
                    Chennai Heritage
                  </p>
                </motion.div>
                
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400"
                  alt="Our Royal Chef Muthu"
                  className="rounded-none shadow-artistic object-cover h-64 w-full border border-heritage-gold/20"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-48 h-48 border-t-2 border-l-2 border-heritage-gold/30 rounded-none -z-10" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-b-2 border-r-2 border-heritage-gold/30 rounded-none -z-10" />
          </div>

          {/* Column 2: Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-8 h-[1px] bg-heritage-gold inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-heritage-gold">
                The Heritage & Legacy
              </span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tighter text-heritage-charcoal mb-6">
              Serving Royalty in the Heart <br />
              <span className="text-heritage-gold italic font-light">of Chennai</span>
            </h2>

            <div className="space-y-6 text-heritage-gray font-serif italic text-base sm:text-lg leading-relaxed opacity-90">
              <p>
                Founded by descendants of royal spice suppliers, <strong>Fort Restaurant</strong> was created to restore the forgotten culinary nobility of South India. Located in Nungambakkam, Chennai, our establishment is constructed entirely using traditional Dravidian architectural lines and massive hand-carved pillars.
              </p>
              
              <p>
                Our head chef, <strong>Muthu Krishnan</strong>, spent decades tracing old family manuscripts, preserving original spice formulas that were served in the historic forts of Gingee and Thanjavur. Every curry cooked at Fort Restaurant is an active preservation of Tamil culture, slow-simmered over wood-fired stoves to infuse deep smokiness.
              </p>
            </div>

            {/* Key info badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-heritage-gold/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-heritage-gold/10 rounded-none text-heritage-gold mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-display font-bold text-heritage-charcoal text-base">
                    Prime Location
                  </h4>
                  <p className="text-xs text-heritage-gray font-light mt-1">
                    64, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu - 600006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-heritage-gold/10 rounded-none text-heritage-gold mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-display font-bold text-heritage-charcoal text-base">
                    Hours of Dining
                  </h4>
                  <p className="text-xs text-heritage-gray font-light mt-1">
                    Lunch: 11:30 AM – 3:30 PM <br />
                    Dinner: 6:30 PM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Chef Quote signature */}
            <div className="mt-8 p-5 bg-white/70 backdrop-blur-sm rounded-none border border-heritage-gold/20 flex items-center space-x-4 shadow-sm">
              <div className="p-3 bg-heritage-gold text-heritage-dark rounded-none">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs italic text-heritage-gray font-serif">
                  "We do not feed your hunger; we invite you to live our history, one bite of cardamom and curry leaf at a time."
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-heritage-charcoal mt-1">
                  — Chef Muthu Krishnan, Master Culinary Custodian
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

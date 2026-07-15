import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Compass, Award, Calendar, Heart, ChefHat, Sparkles } from 'lucide-react';

export default function OurStoryPage() {
  const timeline = [
    {
      year: '1786',
      title: 'Building the Fort Sanctuary',
      description: 'The foundation stones of our granite fort sanctuary were laid by Arcot regional Chieftains. It served as a secure granary and administrative outpost for merchant guilds in Madras.',
    },
    {
      year: '1924',
      title: 'Chettinad Lineage Chronicles',
      description: 'The Pillai noble family of Chettinad acquired the estate, adding the majestic hand-carved Burma Teak pillars, Athangudi clay tiling, and beautiful central open-air courtyards.',
    },
    {
      year: '1982',
      title: 'The Recipe Vault Preservation',
      description: 'Legendary grandmother Meenakshi Achi compiled a leather-bound culinary manual containing over 250 pristine, undocumented family recipes of the Karaikudi royal households.',
    },
    {
      year: '2022',
      title: 'Meticulous 4-Year Sanctuary Restoration',
      description: 'Expert temple architects and heritage conservationists completed a painstaking 4-year restoration of the crumbling stone estate, opening the doors of Fort Restaurant to Chennai.',
    }
  ];

  const chefs = [
    {
      name: 'Ayya Muthu Pillai',
      role: 'Head Culinary Custodian',
      specialty: 'Traditional Chettinad Spice Blends & Game Meats',
      bio: 'Grandson of Chettinad royal estate cooks, Chef Muthu has spent 35 years practicing the alchemy of dry-roasting and manual stone-grinding. He hand-inspects every batch of Gundu chillies and Kalpasi lichens.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Chef Meera Chidambaram',
      role: 'Master Seafood Culinary Craftsman',
      specialty: 'Coastal Tangy Curries & Slow Clay-Pot Braising',
      bio: 'Born in a fishing hamlet near Royapuram, Chef Meera has an unparalleled instinct for marine cooking. She is at Kasimedu harbor every dawn, ensuring only top-tier day-boat catches enter our clay pots.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="our-story-page">
      {/* Hero Banner Section */}
      <div className="bg-heritage-dark text-white py-16 md:py-24 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/src/assets/images/fort_hero_banner_1784014129794.jpg"
            alt="Heritage Sanctuary Architecture"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.12)_0%,transparent_100%)] z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-bold block mb-3">
              THE NOBLE CHRONICLE
            </span>
            <h1 className="font-serif-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mx-auto">
              Our Story & Heritage
            </h1>
            <div className="w-16 h-[2px] bg-heritage-gold mx-auto my-6" />
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Step back into an era of grand merchant palaces and forgotten culinary honors. Discover the lineage of people who preserved Madras’s finest traditional flavors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Landmark className="w-5 h-5 text-heritage-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-heritage-gold">
                18th Century Legacy
              </span>
            </div>
            
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold tracking-tight text-heritage-dark leading-tight">
              A Restored Sanctuary of Lost Tamil Culinary Wisdom
            </h2>
            
            <div className="w-12 h-[2px] bg-heritage-gold" />
            
            <p className="text-xs text-heritage-gray leading-relaxed font-light">
              Fort Restaurant was born from a singular, obsessive mission: to preserve the authentic, highly sophisticated recipes of traditional Tamil Nadu before they became lost in a world of industrial food, artificial coloring, and fusion recipes.
            </p>
            
            <p className="text-xs text-heritage-gray leading-relaxed font-light">
              Our venue, located on the historic Khader Nawaz Khan Road, was once a derelict British colonial-era granite garrison outpost built over an even older stone fort foundation from 1786. Rather than demolishing this piece of Chennai’s history, we embarked on a painstakingly slow, four-year restoration. 
            </p>

            <p className="text-xs text-heritage-gray leading-relaxed font-light">
              We sourced master woodcarvers from Karaikudi to rebuild the arches with Burma Teakwood, potters from Athangudi to hand-kiln the patterned terracotta floor tiles, and stonemasons from Mahabalipuram to restore the original granary walls. Today, it stands not just as a restaurant, but as a living museum of Tamil craftsmanship.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden border border-heritage-gold/25 shadow-md">
                <img
                  src="/src/assets/images/chettinad_meals_hero_1784036214119.jpg"
                  alt="Chettinad Meals on Banana Leaf"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-heritage-gold/25 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=400"
                  alt="Authentic Spices"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden border border-heritage-gold/25 shadow-md">
                <img
                  src="/src/assets/images/fort_chettinad_dish_1784014144098.jpg"
                  alt="Fort Chettinad Chicken"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-heritage-gold/25 shadow-md">
                <img
                  src="/src/assets/images/fort_fish_curry_1784014160044.jpg"
                  alt="Madras Fish Curry"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Absolute badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-heritage-dark text-white px-5 py-3 border border-heritage-gold text-center shadow-2xl">
              <span className="font-serif-display text-2xl font-bold tracking-wider block text-heritage-gold">ESTD 1786</span>
              <span className="text-[8px] uppercase tracking-widest font-bold">Madras Heritage</span>
            </div>
          </div>

        </div>
      </section>

      {/* Historical Timeline */}
      <section className="bg-heritage-dark text-white py-20 border-t border-b border-heritage-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Compass className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
            <h2 className="font-serif-display text-3xl font-bold text-white">
              Centuries of Taste & Restoration
            </h2>
            <p className="text-xs uppercase tracking-widest text-heritage-gold font-bold mt-2">
              Timeline Landmarks
            </p>
          </div>

          <div className="relative border-l-2 border-heritage-gold/30 max-w-4xl mx-auto pl-8 sm:pl-12 space-y-12">
            {timeline.map((item, idx) => (
              <div key={item.year} className="relative group">
                {/* Year tag */}
                <div className="absolute -left-[54px] sm:-left-[70px] top-0.5 bg-heritage-gold text-heritage-dark text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  {item.year}
                </div>
                {/* Dot */}
                <div className="absolute -left-[41px] sm:-left-[53px] top-2.5 w-4.5 h-4.5 rounded-full bg-heritage-dark border-2 border-heritage-gold group-hover:bg-heritage-gold transition-colors duration-200" />
                
                <h3 className="font-serif-display text-xl font-bold text-white tracking-tight group-hover:text-heritage-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mt-2 max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Master Chefs / Custodians */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ChefHat className="w-10 h-10 text-heritage-gold mx-auto mb-4" />
          <h2 className="font-serif-display text-3xl font-bold text-heritage-dark">
            Our Culinary Custodians
          </h2>
          <p className="text-xs uppercase tracking-widest text-heritage-gold font-bold mt-2">
            Meet the Masters of Heritage Heat
          </p>
          <p className="text-xs text-heritage-gray mt-4 max-w-xl mx-auto font-light leading-relaxed">
            These are not standard modern line cooks. They are guardians of oral family traditions, possessing an instinct for spice roastedness, meat tenderness, and clay pot kinetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {chefs.map((chef) => (
            <div
              key={chef.name}
              className="bg-white border border-heritage-gold/25 p-8 flex flex-col md:flex-row gap-6 items-start shadow-artistic"
            >
              <div className="w-full md:w-36 h-36 flex-shrink-0 border border-heritage-gold/30 overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-heritage-dark">
                    {chef.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-gold block">
                    {chef.role}
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-heritage-charcoal bg-heritage-cream/60 border border-heritage-gold/15 px-2.5 py-1 inline-block">
                  🎯 Specialty: {chef.specialty}
                </div>
                <p className="text-xs text-heritage-gray font-light leading-relaxed">
                  {chef.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

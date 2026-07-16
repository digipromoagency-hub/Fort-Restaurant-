import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, Anchor, Scroll, Award, Leaf, Star, Sparkles } from 'lucide-react';

interface WhyUsPageProps {
  onOpenBooking: () => void;
}

export default function WhyUsPage({ onOpenBooking }: WhyUsPageProps) {
  const pillars = [
    {
      title: 'The Stone-Grounding Ammi-kal Secret',
      subtitle: 'No machines, just raw sensory perfection',
      description: 'At Fort, we completely ban commercial spice powder packets and electric blenders. Every single morning, our spice masters work the traditional Granite "Ammi-kal" (heavy grinding stones). This slow, high-pressure hand-rolling process keeps the grinding temperature cold. It prevents volatile cardamom and clove essential oils from evaporating, preserving an intensely fragrant, thick masala paste with unmatched flavor depth.',
      details: ['Spices ground fresh daily at 5:00 AM', 'Preserves heat-sensitive volatile oils', 'Custom heavy granite stone mills', 'Passed down by master spice blenders'],
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
      icon: Flame,
    },
    {
      title: 'Dock-to-Plate Seafood Catch',
      subtitle: 'Kasimedu harbor fresh, every single morning',
      description: 'We do not freeze our seafood. At 4:30 AM every morning, our purchasing chefs stand directly at the docks of Chennai’s historic Kasimedu fishing harbor. They compete with local vendors to purchase the absolute prime selection of Seer Fish (Vanjaram), Black Pomfret, Jumbo Tiger Prawns, and mud crabs straight off the boats. They are rushed to our kitchen on ice and served on your plate by noon.',
      details: ['Handpicked at Kasimedu at 4:30 AM', 'Strictly zero preservation or freezing', 'Sourced only from artisanal day-boats', 'Prepared in authentic coastal Tamil style'],
      image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800',
      icon: Anchor,
    },
    {
      title: 'Meticulous 18th-Century Ambiance',
      subtitle: 'Dine inside a living museum monument',
      description: 'Our restaurant resides inside a beautifully restored stone fort mansion dating back to the late 1700s. With high ceilings supported by majestic hand-carved teakwood columns from Karaikudi, Belgian glass lanterns, and hand-painted Athangudi clay floor tiles, you are dining inside a living work of Tamil history. Every corner whispers stories of the ancient merchant princes of Chettinad.',
      details: ['Restored 18th-century stone fort architecture', 'Handmade heritage Athangudi tiles', 'Grand Karaikudi Burma teak arches', 'Live classical Carnatic instrumental music'],
      image: '/src/assets/images/fort_hero_banner_1784014129794.jpg',
      icon: Scroll,
    },
    {
      title: 'Wood-Pressed Marachekku Oils',
      subtitle: 'Cold-pressed purity, rich in nutrition',
      description: 'We exclusively cook with traditional wood-pressed ("Marachekku") sesame oil, peanut oil, and pure grass-fed cow ghee. Standard refined oils are heated to 200°C and processed with hexane solvents. Our wood-pressed oils are extracted at room temperature using a giant wooden pestle, retaining the pure aroma of sesame and roasted peanuts that defines ancient Tamil cookery.',
      details: ['Traditional wood-press extraction', 'No chemical refine or artificial additives', 'Rich in natural antioxidants & aroma', 'Pure grass-fed cow ghee from local farms'],
      image: '/src/assets/images/chettinad_meals_hero_1784036214119.jpg',
      icon: Leaf,
    },
  ];

  const heritageSpices = [
    { name: 'Kalpasi (Stone Flower)', desc: 'An exotic blackish-purple lichen that grows on forest stones. It releases a deeply earthy, lichen-musky woodland aroma when bloomed in hot oil, forming the soul of authentic Chettinad gravies.' },
    { name: 'Gundu Milagai (Fat Chilli)', desc: 'Spherical, stout red chillies sourced from Ramnad. They possess a fierce, rounded heat coupled with a distinctive smoky undertone that defines our mutton chukkas.' },
    { name: 'Marathy Moggu (Kapok Buds)', desc: 'The dried flower buds of the Kapok tree. Highly prized for their complex, warm, clove-like peppery flavor, hand-pounded into our royal biryani masala.' },
    { name: 'Kariveppilai (Curry Leaves)', desc: 'Handpicked from our organic kitchen garden, these tiny aromatic leaves are fried whole in hot sesame oil, infusing an herbal, citrusy perfume into our dishes.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="why-us-page">
      {/* Page Header */}
      <div className="bg-heritage-dark text-white py-16 md:py-24 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_100%)] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-bold block mb-3">
              THE FORT ADVANTAGE
            </span>
            <h1 className="font-serif-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mx-auto">
              Why Fort Restaurant?
            </h1>
            <div className="w-16 h-[2px] bg-heritage-gold mx-auto my-6" />
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the uncompromising culinary philosophy, daily manual rituals, and historic architectural majesty that sets Fort Restaurant apart as a true sanctuary of Tamil cuisine.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Award className="w-10 h-10 text-heritage-gold mx-auto mb-4" />
          <h2 className="font-serif-display text-3xl font-bold tracking-tight text-heritage-dark">
            Our Uncompromising Pillars of Gastronomy
          </h2>
          <p className="text-xs uppercase tracking-widest text-heritage-gold font-bold mt-2">
            Preserving History, One Meal At A Time
          </p>
        </div>

        {/* Pillars Map */}
        <div className="space-y-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="aspect-[4/3] w-full overflow-hidden border border-heritage-gold/20 shadow-artistic">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-heritage-dark text-white p-4 border border-heritage-gold/30 flex items-center space-x-3 shadow-lg">
                    <Icon className="w-6 h-6 text-heritage-gold" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-heritage-gold font-bold block">Pillar #0{idx + 1}</span>
                      <span className="font-serif-display text-xs font-semibold">{pillar.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-heritage-gold uppercase">
                    Culinary Rigor
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-heritage-dark tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-heritage-gray leading-relaxed font-light">
                    {pillar.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {pillar.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-2 text-xs text-heritage-charcoal font-medium">
                        <ShieldCheck className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Spice Showcase Section */}
      <section className="bg-heritage-dark text-white py-20 border-t border-b border-heritage-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Sparkles className="w-8 h-8 text-heritage-gold mx-auto mb-3 animate-pulse" />
            <h2 className="font-serif-display text-3xl font-bold text-white">
              The Soul of Chettinad Spice
            </h2>
            <p className="text-xs uppercase tracking-widest text-heritage-gold font-bold mt-2">
              Our Heirlooms Ground Daily
            </p>
            <p className="text-xs text-gray-400 font-light leading-relaxed mt-4">
              Chettinad cuisine is famous for its complex layers of heat, aromatic depth, and warmth. We source our rare ingredients directly from organic farmers in Karaikudi and Ramnad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heritageSpices.map((spice) => (
              <div
                key={spice.name}
                className="bg-white/5 border border-white/10 p-6 hover:border-heritage-gold hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-1.5 h-6 bg-heritage-gold mb-4 group-hover:scale-y-110 transition-transform origin-bottom" />
                  <h3 className="font-serif-display text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-heritage-gold transition-colors">
                    {spice.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {spice.desc}
                  </p>
                </div>
                <div className="text-[9px] uppercase tracking-wider text-heritage-gold/50 font-bold mt-4">
                  100% Hand-Ground
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-heritage-cream border-2 border-dashed border-heritage-gold/30 p-10 md:p-16 max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-heritage-cream font-serif-display text-xl text-heritage-gold flex items-center space-x-1">
            <Star className="w-4 h-4 fill-heritage-gold text-heritage-gold" />
            <span>The Royal Promise</span>
            <Star className="w-4 h-4 fill-heritage-gold text-heritage-gold" />
          </div>
          
          <h3 className="font-serif-display text-2xl font-bold text-heritage-dark mb-4">
            No Additives, No Artificial Preservatives, No Exceptions.
          </h3>
          <p className="text-xs text-heritage-gray leading-relaxed font-light max-w-2xl mx-auto mb-8">
            We promise that your food is prepared in absolute accordance with our ancestral tenets. We do not use MSG, commercial tasting powders, artificial yellow/red color additives, or trans-fats. Every single drop of curry and grain of biryani served is pure, wholesome, and prepared with noble honor.
          </p>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-heritage-gold text-heritage-dark text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-heritage-dark hover:text-white transition-colors duration-300 shadow-md"
          >
            Experience the Royal Feast Now
          </button>
        </div>
      </section>
    </div>
  );
}

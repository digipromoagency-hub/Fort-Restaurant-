import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Award, Filter, Sparkles, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';
import { MENU_ITEMS } from '../data';

interface TheMenuPageProps {
  onOpenBookingWithDish: (dishName: string) => void;
}

export default function TheMenuPage({ onOpenBookingWithDish }: TheMenuPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'traditional' | 'desserts' | 'beverages'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [filterChefSpecial, setFilterChefSpecial] = useState(false);
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);

  // Filter items based on active criteria
  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Search match
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      if (!matchName && !matchDesc) return false;
    }
    // Veg match
    if (filterVegOnly && !item.isVegetarian) {
      return false;
    }
    // Chef Special match
    if (filterChefSpecial && !item.isChefSpecial) {
      return false;
    }
    // Spicy match
    if (filterSpicyOnly && !item.isSpicy) {
      return false;
    }
    return true;
  });

  const categories = [
    { id: 'all', name: 'The Feast' },
    { id: 'starters', name: 'Beginnings' },
    { id: 'mains', name: 'Royal Gravies' },
    { id: 'traditional', name: 'Chettinad Royals' },
    { id: 'desserts', name: 'Divine Sweets' },
    { id: 'beverages', name: 'Beverages' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="the-menu-page">
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
              THE IMPERIAL MENU
            </span>
            <h1 className="font-serif-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mx-auto">
              Our Culinary Masterpieces
            </h1>
            <div className="w-16 h-[2px] bg-heritage-gold mx-auto my-6" />
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Every dish is a carefully crafted piece of history. Explore our authentic recipes featuring fresh Kasimedu catch, stone-ground aromatics, and organic local farm ingredients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Filter Toolbar */}
        <div className="bg-white p-6 border border-heritage-gold/20 shadow-artistic mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-heritage-gold">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search royal dishes, secret ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-heritage-cream/45 border border-heritage-gold/25 text-xs text-heritage-dark focus:outline-none focus:border-heritage-gold font-sans placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-heritage-dark font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Checkboxes */}
            <div className="lg:col-span-7 flex flex-wrap gap-4 justify-start lg:justify-end">
              <button
                onClick={() => setFilterVegOnly(!filterVegOnly)}
                className={`px-3 py-2 border text-[10px] font-bold uppercase tracking-wider transition-colors duration-150 flex items-center space-x-1.5 ${
                  filterVegOnly
                    ? 'bg-green-500/10 text-green-700 border-green-500'
                    : 'bg-transparent border-gray-200 text-heritage-charcoal hover:border-heritage-gold'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${filterVegOnly ? 'bg-green-600' : 'bg-green-300'}`} />
                <span>Vegetarian Only</span>
              </button>

              <button
                onClick={() => setFilterChefSpecial(!filterChefSpecial)}
                className={`px-3 py-2 border text-[10px] font-bold uppercase tracking-wider transition-colors duration-150 flex items-center space-x-1.5 ${
                  filterChefSpecial
                    ? 'bg-heritage-gold/20 text-heritage-dark border-heritage-gold'
                    : 'bg-transparent border-gray-200 text-heritage-charcoal hover:border-heritage-gold'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-heritage-gold" />
                <span>Chef Specials</span>
              </button>

              <button
                onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
                className={`px-3 py-2 border text-[10px] font-bold uppercase tracking-wider transition-colors duration-150 flex items-center space-x-1.5 ${
                  filterSpicyOnly
                    ? 'bg-red-500/10 text-red-700 border-red-500'
                    : 'bg-transparent border-gray-200 text-heritage-charcoal hover:border-heritage-gold'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>Spicy Only</span>
              </button>
            </div>

          </div>

          {/* Categories Tab Navigation */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-heritage-cream pt-6 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4.5 py-2.5 text-[10px] uppercase font-bold tracking-[0.18em] transition-all duration-200 rounded-none whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-heritage-dark text-white border-b-2 border-heritage-gold'
                    : 'bg-heritage-cream/50 text-heritage-gray border border-transparent hover:bg-heritage-cream hover:text-heritage-dark'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Count Banner */}
        <div className="flex items-center justify-between mb-8 border-b border-heritage-gold/10 pb-3">
          <p className="text-xs text-heritage-gray font-light">
            Showing <strong className="text-heritage-dark">{filteredItems.length}</strong> masterworks of Tamil gastronomy
          </p>
          {(searchQuery || filterVegOnly || filterChefSpecial || filterSpicyOnly) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterVegOnly(false);
                setFilterChefSpecial(false);
                setFilterSpicyOnly(false);
              }}
              className="text-[10px] uppercase tracking-wider font-bold text-red-600 hover:text-red-700 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-24 bg-white border border-heritage-gold/25">
            <BookOpen className="w-12 h-12 text-heritage-gold/40 mx-auto mb-4" />
            <p className="text-base font-serif font-semibold text-heritage-dark">No royal dishes match your criteria</p>
            <p className="text-xs text-heritage-gray mt-1 max-w-sm mx-auto">
              Please adjust your search keywords or toggles to view other dishes from our kitchens.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-heritage-gold/15 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-artistic hover:border-heritage-gold transition-all duration-300"
                >
                  <div>
                    {/* Dish Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative bg-heritage-dark/10">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Tags overlay */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        {dish.isChefSpecial && (
                          <span className="px-2.5 py-1 bg-heritage-dark/90 text-heritage-gold border border-heritage-gold/40 text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                            <Award className="w-3 h-3 text-heritage-gold" />
                            Chef Special
                          </span>
                        )}
                        {dish.isVegetarian && (
                          <span className="px-2.5 py-1 bg-green-900/90 text-green-300 border border-green-500/40 text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            Vegetarian
                          </span>
                        )}
                      </div>

                      {dish.isSpicy && (
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-red-950/80 border border-red-500/40 text-[8px] text-red-300 font-bold uppercase tracking-widest flex items-center space-x-0.5 backdrop-blur-sm z-10">
                          <Flame className="w-3 h-3 fill-red-500 text-red-500" />
                          <span>Spicy</span>
                        </div>
                      )}
                    </div>

                    {/* Content padding */}
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif-display text-lg font-bold text-heritage-dark tracking-tight leading-snug group-hover:text-heritage-gold transition-colors duration-200">
                          {dish.name}
                        </h3>
                        <span className="font-serif text-base font-semibold text-heritage-gold whitespace-nowrap">
                          ₹{dish.price}
                        </span>
                      </div>
                      
                      <p className="text-xs text-heritage-gray leading-relaxed font-light line-clamp-3">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions bar */}
                  <div className="p-6 pt-0 mt-2">
                    <button
                      onClick={() => onOpenBookingWithDish(dish.name)}
                      className="w-full py-2.5 border border-heritage-gold/40 hover:bg-heritage-gold hover:text-heritage-dark text-heritage-dark hover:border-heritage-gold text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center space-x-1"
                    >
                      <span>Secure Seat for this Dish</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Culinary glossary/FAQ */}
      <section className="bg-heritage-dark text-white py-16 border-t border-heritage-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-heritage-gold mx-auto mb-2" />
            <h3 className="font-serif-display text-2xl font-bold">Menu Glossary & Dietary Information</h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Everything you need to know about our recipes</p>
          </div>

          <div className="space-y-6 text-xs font-light text-gray-300 leading-relaxed">
            <div className="border-l-2 border-heritage-gold pl-4 space-y-1">
              <strong className="text-white font-medium block">How spicy is the food?</strong>
              <p>Traditional Chettinad cooking is spicy but not uncomfortably hot. It is characterized by complex warming spices (pepper, cloves, fennel). If you prefer milder food, kindly specify in the reservation comments, and our chefs will custom blend your recipe.</p>
            </div>
            <div className="border-l-2 border-heritage-gold pl-4 space-y-1">
              <strong className="text-white font-medium block">What oil do you use?</strong>
              <p>We cook our non-vegetarian traditional Chettinad dishes strictly in wood-pressed gingerly/sesame oil or peanut oil. Our rice/biryani and desserts are cooked in pure home-churned ghee. We never reuse cooking oils or cook with refined palm oils.</p>
            </div>
            <div className="border-l-2 border-heritage-gold pl-4 space-y-1">
              <strong className="text-white font-medium block">Allergy Concerns?</strong>
              <p>Many South Indian curries use cashews or coconut for thickness. If you have any food allergy (nuts, lactose, seafood, gluten), please inform our front-desk steward upon seating or leave a note on your digital ticket.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

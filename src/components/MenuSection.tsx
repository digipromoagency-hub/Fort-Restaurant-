import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flame, Check, Utensils, Search, AlertCircle, Heart, X, Calendar } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenBookingWithDish: (dishName: string) => void;
}

export default function MenuSection({ onOpenBookingWithDish }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showVegOnly, setShowVegOnly] = useState<boolean>(false);
  const [showSpicyOnly, setShowSpicyOnly] = useState<boolean>(false);
  
  // Selected dish for inspection modal
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Masterpieces' },
    { id: 'starters', name: 'Royal Starters' },
    { id: 'mains', name: 'Coastal Mains' },
    { id: 'traditional', name: 'Fort Traditionals' },
    { id: 'desserts', name: 'Sweet Endings' },
    { id: 'beverages', name: 'Thirst Quenchers' },
  ];

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    // Search query match
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    // Diet qualifiers
    const matchesVeg = !showVegOnly || item.isVegetarian;
    const matchesSpicy = !showSpicyOnly || item.isSpicy;

    return matchesCategory && matchesSearch && matchesVeg && matchesSpicy;
  });

  return (
    <section id="menu" className="py-20 md:py-28 bg-heritage-dark text-white relative overflow-hidden">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-heritage-gold/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-heritage-gold/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-heritage-gold">
              Culinary Collection
            </span>
          </div>
          
          <h2 className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tighter mb-6">
            The Fort Royal Menu
          </h2>
          
          <p className="text-gray-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto opacity-85">
            Savor the exquisite, slow-simmered culinary narratives of Tamil Nadu, handcrafted daily by Chef Muthu Krishnan.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-[#232323] p-6 rounded-none border border-white/10 mb-12 shadow-artistic">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search recipe, spices or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-heritage-dark border border-white/10 rounded-none text-sm text-white placeholder-gray-400 focus:outline-none focus:border-heritage-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Switch / Toggle Controls */}
            <div className="flex flex-wrap items-center gap-4">
              
              <button
                onClick={() => setShowVegOnly(!showVegOnly)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-none border text-[10px] font-bold tracking-wider uppercase transition-all duration-200 ${
                  showVegOnly
                    ? 'bg-green-950/40 border-green-500 text-green-400'
                    : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${showVegOnly ? 'bg-green-400' : 'bg-gray-400'}`} />
                <span>Vegetarian Only</span>
              </button>

              <button
                onClick={() => setShowSpicyOnly(!showSpicyOnly)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-none border text-[10px] font-bold tracking-wider uppercase transition-all duration-200 ${
                  showSpicyOnly
                    ? 'bg-amber-950/40 border-amber-500 text-amber-400'
                    : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${showSpicyOnly ? 'text-amber-400' : 'text-gray-400'}`} />
                <span>Spicy Specialties</span>
              </button>

            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-6 border-t border-white/5 scrollbar-thin scrollbar-thumb-heritage-gold">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-heritage-gold text-heritage-dark shadow-md shadow-heritage-gold/20'
                    : 'bg-heritage-dark text-gray-400 hover:text-white hover:bg-black/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group bg-[#232323] rounded-none overflow-hidden border border-white/5 hover:border-heritage-gold/30 transition-all duration-300 hover:shadow-artistic flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedDish(item)}
                id={`menu-item-${item.id}`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-heritage-dark">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-1 bg-heritage-gold text-heritage-dark text-[8px] font-extrabold uppercase tracking-widest rounded-none shadow">
                        Chef Special
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="px-2.5 py-1 bg-green-600 text-white text-[8px] font-extrabold uppercase tracking-widest rounded-none shadow">
                        Veg
                      </span>
                    )}
                  </div>

                  {item.isSpicy && (
                    <div className="absolute top-3 right-3 p-1.5 bg-red-600 text-white rounded-none shadow">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#232323] border border-heritage-gold/30 rounded-none text-heritage-gold font-serif-display font-semibold text-sm">
                    ₹{item.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-lg font-bold text-white group-hover:text-heritage-gold transition-colors duration-200 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-light mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Call to action within card */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-heritage-gold font-bold group-hover:underline">
                    <span>Inspect Recipe</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if filtered items is empty */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#232323] rounded-none border border-white/10 max-w-md mx-auto mt-8">
            <AlertCircle className="w-12 h-12 text-heritage-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif-display font-bold">No Royal Dishes Found</h3>
            <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto">
              Try adjusting your filters or search keywords. Chef Muthu is cooking up plenty of other masterpieces!
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setShowVegOnly(false);
                setShowSpicyOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-heritage-gold text-heritage-dark text-xs font-bold uppercase rounded-none hover:bg-white"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Gourmet Recipe Detail Inspection Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-heritage-dark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#232323] border border-heritage-gold/30 rounded-none max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-heritage-dark/60 text-white hover:text-heritage-gold rounded-none transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="h-64 relative bg-heritage-dark">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323] via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute bottom-4 left-6 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-heritage-gold text-heritage-dark text-[10px] font-extrabold uppercase tracking-widest rounded-none shadow-md">
                    {selectedDish.category.toUpperCase()}
                  </span>
                  {selectedDish.isVegetarian && (
                    <span className="px-3 py-1 bg-green-600 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-none shadow-md">
                      Veg
                    </span>
                  )}
                  {selectedDish.isSpicy && (
                    <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-none shadow-md flex items-center space-x-1">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      <span>Spicy</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif-display text-2xl md:text-3xl font-bold text-white">
                    {selectedDish.name}
                  </h3>
                  <div className="text-2xl font-serif-display font-semibold text-heritage-gold">
                    ₹{selectedDish.price}
                  </div>
                </div>

                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-6">
                  {selectedDish.description}
                </p>

                {/* Heritage info */}
                <div className="bg-heritage-dark/50 p-4 rounded-none border border-white/5 mb-8 text-xs text-gray-400 space-y-2">
                  <p className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                    <span><strong>100% Chef Handcrafted:</strong> Prepared with traditional native seed cold-pressed sesame oil.</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                    <span><strong>Spice Level:</strong> Ground from whole spices daily in our heavy granite mortars.</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                    <span><strong>Allergen Notice:</strong> Dairy is used in gravy. Gluten-free by default unless specified.</span>
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => {
                      onOpenBookingWithDish(selectedDish.name);
                      setSelectedDish(null);
                    }}
                    className="flex-1 px-6 py-3 bg-heritage-gold text-heritage-dark font-bold text-[10px] uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve & Request Dish</span>
                  </button>
                  <button
                    onClick={() => setSelectedDish(null)}
                    className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-none hover:border-white/40 transition-all text-center"
                  >
                    Close Recipe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

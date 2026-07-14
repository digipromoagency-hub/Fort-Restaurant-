import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Fort Chettinad Chicken',
    description: 'Tender farm chicken slow-cooked in hand-ground stone spices, roasted dry red chilies, and organic curry leaves in rich sesame oil.',
    price: 495,
    category: 'traditional',
    isSpicy: true,
    isChefSpecial: true,
    image: '/src/assets/images/fort_chettinad_dish_1784014144098.jpg'
  },
  {
    id: 'm2',
    name: 'Madras Fish Curry',
    description: 'Authentic Chennai Seer fish simmered in a tangy heirloom tamarind gravy, infused with fenugreek, garlic cloves, and fresh coastal green chilies.',
    price: 545,
    category: 'mains',
    isSpicy: true,
    isChefSpecial: true,
    image: '/src/assets/images/fort_fish_curry_1784014160044.jpg'
  },
  {
    id: 'm3',
    name: 'Royapuram Pepper Prawns',
    description: 'Crisp coastal prawns tossed in a fiery black pepper reduction with crunchy caramelized baby onions and fresh coriander sprigs.',
    price: 525,
    category: 'starters',
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1559737607-3f081a24d9b4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm4',
    name: 'Fort Heritage Mutton Biryani',
    description: 'Premium long-grain Basmati rice layered with melt-in-mouth local mutton, slow dum-cooked with saffron, mint leaves, and pure ghee.',
    price: 595,
    category: 'traditional',
    isSpicy: false,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm5',
    name: 'Vazhaipoo Cutlet (Banana Blossom)',
    description: 'Delicately spiced pan-seared patties of finely minced banana flower, soft-boiled potatoes, and roasted peanuts, served with mint chutney.',
    price: 325,
    category: 'starters',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm6',
    name: 'Mylapore Paneer Tikka Masala',
    description: 'Succulent cubes of hand-pressed cottage cheese grilled over charcoal, tossed in a velvety charred-tomato and cashew gravy.',
    price: 445,
    category: 'mains',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm7',
    name: 'Elaneer Payasam',
    description: 'Chilled divine luxury sweet soup made from cream of tender coconut pulp, condensed milk, and fresh green cardamoms.',
    price: 245,
    category: 'desserts',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm8',
    name: 'Traditional Kumbakonam Filter Coffee',
    description: 'Rich Chicory-infused dark decoction hand-frothed with hot organic milk, served in a classic brass tumbler and dabarah.',
    price: 125,
    category: 'beverages',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600'
  }
];

export const STANDOUT_FEATURES = [
  {
    title: 'The Royal Fort Heritage',
    description: 'Housed in a meticulously restored 18th-century stone fort mansion with grand teakwood arches, bringing Madras’s majestic past to your dining table.',
    icon: 'castle'
  },
  {
    title: 'Daily Stone-Ground Spices',
    description: 'We reject packaged powders. Our masalas are ground freshly every single morning using heavy granite hand-grinders (Ammi-kal) to preserve essential volatile oils.',
    icon: 'drumstick'
  },
  {
    title: 'Heirloom Royal Recipes',
    description: 'Our secret spice blends were handed down by royal chefs of the Arcot Nawabs and coastal Chettinad chieftains, carefully preserved through three generations.',
    icon: 'scroll'
  },
  {
    title: 'Dock-to-Plate Coastal Catch',
    description: 'Every morning at 4:30 AM, our chefs handpick the freshest Seer, Pomfret, Tiger Prawns, and Crabs directly from the historic Kasimedu fishing harbor.',
    icon: 'ship'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anirudh Raghavan',
    rating: 5,
    comment: 'The Fort Chettinad Chicken here is otherworldly! The spice blend tastes incredibly complex and fresh, unlike anything you get at other luxury restaurants in Chennai. The ambiance feels like walking into a king’s court.',
    role: 'Local Food Critic & Historian',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r2',
    name: 'Meenakshi Sundaram',
    rating: 5,
    comment: 'Fort Restaurant has set a gold standard for authentic Tamil heritage dining. Their Elaneer Payasam is heavenly, and the traditional filter coffee frothed right at our table was the perfect ending to a royal feast.',
    role: 'Connoisseur of South Indian Cuisine',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r3',
    name: 'Siddharth Roy',
    rating: 5,
    comment: 'A magical experience. The staff treats you like family, the live classical instrumental music in the background elevates the mood, and that clay-pot Madras Fish curry is worth every single rupee.',
    role: 'Travel and Lifestyle Blogger',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

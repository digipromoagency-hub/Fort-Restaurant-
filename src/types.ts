export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'traditional' | 'desserts' | 'beverages';
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  image: string;
}

export interface Reservation {
  id: string;
  name: string;
  mobile: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  submissionTime: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  role: string;
  avatar: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cleaning' | 'cooking' | 'gardening';
  duration: number; // in hours
  image: string;
  features: string[];
  rating: number;
  reviews: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  address: string;
  totalPrice: number;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Premium House Cleaning',
    description: 'Professional deep cleaning service with eco-friendly products',
    price: 100,
    category: 'cleaning',
    duration: 3,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    features: [
      'Deep cleaning of all rooms',
      'Eco-friendly products',
      'Window cleaning',
      'Carpet steam cleaning',
      'Bathroom sanitization'
    ],
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Personal Chef Experience',
    description: 'Customized gourmet meals prepared in your kitchen',
    price: 150,
    category: 'cooking',
    duration: 4,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    features: [
      'Customized menu planning',
      'Grocery shopping',
      'Meal preparation',
      'Kitchen cleanup',
      'Dietary restrictions accommodated'
    ],
    rating: 4.9,
    reviews: 84
  },
  {
    id: '3',
    name: 'Complete Garden Maintenance',
    description: 'Full-service garden care and landscape maintenance',
    price: 80,
    category: 'gardening',
    duration: 2,
    image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b',
    features: [
      'Lawn mowing and edging',
      'Plant care and pruning',
      'Weed control',
      'Fertilization',
      'Seasonal cleanup'
    ],
    rating: 4.7,
    reviews: 95
  }
];
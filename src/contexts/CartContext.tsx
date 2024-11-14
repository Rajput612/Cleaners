import { createContext, useContext, useState } from 'react';
import { Service } from '../data/services';

interface CartItem {
  service: Service;
  date: string;
  time: string;
  address: string;
  notes: string;
}

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems([...items, item]);
  };

  const removeFromCart = (serviceId: string) => {
    setItems(items.filter(item => item.service.id !== serviceId));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.service.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
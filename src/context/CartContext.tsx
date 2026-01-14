import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

interface CartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  qty: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (id: number, title: string, price: number, img: string) => void;
  updateQty: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: number, title: string, price: number, img: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id, title, price, img, qty: 1 }];
    });
    // Show toast notification
    Alert.alert('Added to Cart', 'Excellent choice.', [{ text: 'OK' }], { cancelable: true });
  };

  const updateQty = (id: number, change: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const getItemCount = () => cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

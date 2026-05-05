'use client';

import { createContext, useContext } from 'react';
import { CartItem } from './types';

export interface CartRepository {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  clear: () => void;
}

export const CartDispatchContext = createContext<Omit<CartRepository, 'items'> | null>(null);
export const CartStateContext = createContext<Pick<CartRepository, 'items'> | null>(null);

export const useCartDispatchContext = () => {
  const context = useContext(CartDispatchContext);

  if (!context) throw new Error('Cart dispatch context not found!');

  return context;
};
export const useCartStateContext = () => {
  const context = useContext(CartStateContext);

  if (!context) throw new Error('Cart state context not found!');

  return context;
};

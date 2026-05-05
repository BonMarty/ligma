'use client';

import { createContext, useContext } from 'react';

export interface CartUIRepository {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const CartUIDispatchContext = createContext<Omit<CartUIRepository, 'isOpen'> | null>(null);
export const CartUIStateContext = createContext<Pick<CartUIRepository, 'isOpen'> | null>(null);

export const useCartUIDispatchContext = () => {
  const context = useContext(CartUIDispatchContext);

  if (!context) throw new Error('Cart UI dispatch context not found!');

  return context;
};

export const useCartUIStateContext = () => {
  const context = useContext(CartUIStateContext);

  if (!context) throw new Error('Cart UI state context not found!');

  return context;
};

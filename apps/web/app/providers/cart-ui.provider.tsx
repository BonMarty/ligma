'use client';

import { type PropsWithChildren, useCallback, useState } from 'react';
import { CartUIDispatchContext, CartUIStateContext } from '../../entities/cart';

export function CartUIProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CartUIDispatchContext
      value={{
        open,
        close,
      }}>
      <CartUIStateContext
        value={{
          isOpen,
        }}>
        {children}
      </CartUIStateContext>
    </CartUIDispatchContext>
  );
}

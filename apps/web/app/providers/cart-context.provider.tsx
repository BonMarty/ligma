'use client';

import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { CartDispatchContext, type CartItem, CartStateContext } from '../../entities/cart';

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = useCallback((item: CartItem) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const remove = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const methods = useMemo(
    () => ({
      add,
      remove,
      clear,
    }),
    [add, remove, clear],
  );

  return (
    <CartDispatchContext.Provider value={methods}>
      <CartStateContext.Provider
        value={{
          items,
        }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

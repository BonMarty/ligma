import { Button } from '@repo/ui';
import { useMemo } from 'react';
import { type CartItem, useCartDispatchContext, useCartStateContext } from '../../../entities/cart';

export function ToggleCartProduct(props: CartItem) {
  const { add, remove } = useCartDispatchContext();
  const { items } = useCartStateContext();

  const isInCart = useMemo(() => items.some((item) => item.id === props.id), [items, props.id]);

  if (isInCart) {
    return <Button onClick={() => remove(props.id)}>Удалить из корзины</Button>;
  }

  return <Button onClick={() => add(props)}>Добавить в корзину</Button>;
}

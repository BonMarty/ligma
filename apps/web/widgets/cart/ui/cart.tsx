'use client';

import { Button, Table } from '@repo/ui';
import { useEffect, useMemo } from 'react';
import { useCartDispatchContext, useCartStateContext, useCartUIDispatchContext, useCartUIStateContext } from '../../../entities/cart';

export function Cart() {
  const { close } = useCartUIDispatchContext();
  const { isOpen } = useCartUIStateContext();
  const { clear, remove } = useCartDispatchContext();
  const { items } = useCartStateContext();

  const totalPrice = useMemo(() => items.reduce((prev, curr) => (prev += curr.price), 0), [items]);

  const removeProduct = (id: number) => {
    remove(id);
    if (items.length === 1) {
      close();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <section onClick={close} className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed w-screen h-screen inset-0 sm:backdrop-blur-xs bg-black/40 z-30 transition-all duration-500`}>
      <div onClick={(e) => e.stopPropagation()} className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 bottom-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-full z-30 transition-all duration-500 bg-black px-4 py-12 flex flex-col gap-8`}>
        {items.length > 0 ? (
          <>
            <div className="text-3xl font-medium w-full flex justify-between items-center gap-4">
              <h3>Корзина</h3>
              <h4>{totalPrice}&#8381;</h4>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <Table
                className="text-gray-300"
                tbodyClassName="divide-y"
                data={items}
                renderHeader={() => (
                  <tr>
                    <th className="sticky top-0 h-10 bg-black">ID</th>
                    <th className="sticky top-0 h-10 bg-black">Название</th>
                    <th className="sticky top-0 h-10 bg-black">Цена, &#8381;</th>
                    <th className="sticky top-0 h-10 bg-black"></th>
                  </tr>
                )}
                renderRow={(item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td className="py-4">
                      <Button onClick={() => removeProduct(item.id)} variant="secondary">
                        Удалить
                      </Button>
                    </td>
                  </tr>
                )}
              />
            </div>
            <div className="space-y-4 mt-auto w-full">
              <Button
                onClick={() => {
                  clear();
                  close();
                }}
                variant="secondary"
                className="w-full">
                Очистить корзину
              </Button>
              <Button className="w-full">Перейти к оформлению</Button>
            </div>
          </>
        ) : (
          <h3 className="text-3xl font-medium">Корзина пуста</h3>
        )}
        <i onClick={close} className="not-italic cursor-pointer absolute top-4 right-4 w-fit h-fit">
          &#10060;
        </i>
      </div>
    </section>
  );
}

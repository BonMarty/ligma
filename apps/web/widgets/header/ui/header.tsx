'use client';

import { Container } from '@repo/ui';
import React from 'react';
import { useCartStateContext, useCartUIDispatchContext } from '../../../entities/cart';

const activeClasses = ['bg-black'];
const idleClasses = ['bg-transparent'];

export function Header() {
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!headerRef.current) return;

    const controller = new AbortController();

    function updateHeaderStyle() {
      if (window.scrollY > 0) {
        headerRef.current?.classList.add(...activeClasses);
        headerRef.current?.classList.remove(...idleClasses);
      } else {
        headerRef.current?.classList.add(...idleClasses);
        headerRef.current?.classList.remove(...activeClasses);
      }
    }

    window.addEventListener('scroll', updateHeaderStyle, {
      signal: controller.signal,
    });

    updateHeaderStyle();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 h-fit z-20 transition-all duration-300 pointer-events-none">
      <Container className="flex justify-between items-center p-6 gap-4 pointer-events-auto">
        <a className="text-2xl font-medium" href={'/#'}>
          LIgma.
        </a>
        <nav className="space-x-6">
          <a className="cursor-pointer transition-all duration-300 text-gray-400 hover:text-white" href={'/#products'}>
            Товары
          </a>
          <a className="cursor-pointer transition-all duration-300 text-gray-400 hover:text-white" href={'/#about'}>
            О нас
          </a>
          <a className="cursor-pointer transition-all duration-300 text-gray-400 hover:text-white" href={'/#faq'}>
            Вопросы
          </a>
        </nav>
        <CartIcon />
      </Container>
    </header>
  );
}

function CartIcon() {
  const { items } = useCartStateContext();
  const { open } = useCartUIDispatchContext();

  return (
    <i onClick={open} className="cursor-pointer not-italic relative">
      <svg width="24px" height="24px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16.5" cy="18.5" r="1.5"></circle>
        <circle cx="9.5" cy="18.5" r="1.5"></circle>
        <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"></path>
      </svg>
      {items.length > 0 ? <span className="absolute -top-2.5 -right-3 w-6 h-6 rounded-full bg-purple-500 flex justify-center items-center">{items.length}</span> : null}
    </i>
  );
}

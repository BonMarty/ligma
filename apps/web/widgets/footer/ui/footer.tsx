import { Container } from '@repo/ui';
import Link from 'next/link';
import { ROUTES } from '../../../shared/routes';

export function Footer() {
  return (
    <footer>
      <Container className="p-6 flex flex-wrap justify-between items-center gap-4">
        <Link className="text-2xl font-medium" href={ROUTES.HOME.href}>
          LIgma.
        </Link>
        <p className="text-gray-300 transition-all duration-300 cursor-pointer hover:text-white">Политика конфиденциальности</p>
        <p className="text-gray-300 transition-all duration-300 cursor-pointer hover:text-white">Публичная офферта</p>
        <p className="text-gray-300">&copy; Copyright LIgma. 2077</p>
      </Container>
    </footer>
  );
}

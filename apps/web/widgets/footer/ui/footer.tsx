import { Container } from '@repo/ui';

export function Footer() {
  return (
    <footer>
      <Container className="p-6 flex flex-wrap justify-between items-center gap-4">
        <a className="text-2xl font-medium" href={'/#'}>
          LIgma.
        </a>
        <p className="text-gray-300 transition-all duration-300 cursor-pointer hover:text-white">Политика конфиденциальности</p>
        <p className="text-gray-300 transition-all duration-300 cursor-pointer hover:text-white">Публичная офферта</p>
        <p className="text-gray-300">&copy; Copyright LIgma. 2077</p>
      </Container>
    </footer>
  );
}

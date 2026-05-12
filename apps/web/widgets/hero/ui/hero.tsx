import { Button, Container } from '@repo/ui';
import Link from 'next/link';
import { TypingTitle } from './typing-title';

export function Hero() {
  // const [isTouch, setIsTouch] = useState(false);

  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);

  // const springConfig = { damping: 20, stiffness: 150 };
  // const smoothX = useSpring(mouseX, springConfig);
  // const smoothY = useSpring(mouseY, springConfig);

  // const background = useMotionTemplate`radial-gradient(300px circle at ${smoothX}px ${smoothY}px, rgba(38, 38, 220, 0.3), transparent 80%)`;

  // function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
  //   const { left, top } = currentTarget.getBoundingClientRect();
  //   mouseX.set(clientX - left);
  //   mouseY.set(clientY - top);
  // }

  // useEffect(() => {
  //   const watchTouch = window.matchMedia('(pointer: coarse)');

  //   setIsTouch(watchTouch.matches);
  // }, []);

  return (
    <section className="relative h-screen overflow-hidden scroll-pt-0">
      <Container className="px-6 w-full h-full flex justify-center items-center relative z-10">
        <div className="space-y-6">
          <TypingTitle />
          <h2 className="text-lg text-gray-300 text-shadow-lg text-center">Будущее уже наступило</h2>
          <div className="flex justify-center items-center gap-4">
            <Link href={'/#products'}>
              <Button>К товарам</Button>
            </Link>
            <Link href={'/#faq'}>
              <Button variant="secondary">К вопросам</Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black via-black/40 to-transparent"></div>
    </section>
  );
}

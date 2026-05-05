import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['нейросетей', 'ChatGPT', 'Claude', 'Gemini'];

export function TypingTitle() {
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => words[index]!.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, words[index]!.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
      onComplete: () => {
        setTimeout(() => {
          animate(count, 0, {
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            onComplete: () => {
              setIndex((prev) => (prev + 1) % words.length);
            },
          });
        }, 1500);
      },
    });
    return controls.stop;
  }, [index, count]);

  return (
    <h1 className="text-3xl md:text-4xl font-medium text-shadow-lg text-center">
      <span>
        LIgma &mdash; маркетплейс
        <br className="md:hidden" />
        &nbsp;для&nbsp;
      </span>
      <motion.span>{displayText}</motion.span>
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} className="inline-block w-1 h-9 ml-1 bg-white" />
    </h1>
  );
}

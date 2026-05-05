'use client';

import { motion } from 'framer-motion';
import { ToggleCartProduct } from '../../../features';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function ProductsList() {
  return (
    <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap gap-4">
      {Array.from({ length: 9 }, (_v, index) => (
        <motion.li key={index} variants={itemVariants} className="flex-1 min-w-fit sm:min-w-[32%] p-4 border rounded-xl flex flex-col justify-between gap-6 text-gray-300 group bg-left bg-size-[200%] hover:bg-right">
          <div className="flex justify-between items-center gap-4 text-white">
            <h3 className="text-2xl font-medium">Product {index + 1}</h3>
            <h4 className="text-2xl font-medium transition-all duration-300 group-hover:text-purple-500">от 9999&#8381;</h4>
          </div>
          <p className="w-full sm:max-w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid?</p>
          <ul className="space-y-2 list-['-'] text-lg pl-1.5 transition-all duration-300 group-hover:text-green-500">
            <li>Advantage 1</li>
            <li>Advantage 2</li>
            <li>Advantage 3</li>
          </ul>
          <ToggleCartProduct id={index} title={`Product ${index + 1}`} price={(index + 1) * 100} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

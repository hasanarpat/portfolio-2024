'use client';
import { motion } from 'framer-motion';

const Test = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: {
        duration: 2,
      },
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className='flex items-center justify-center h-full'>
      <motion.div
        className='w-96 h-96 rounded bg-red-500'
        variants={variants}
        animate='variant2'
      ></motion.div>
    </div>
  );
};

export default Test;

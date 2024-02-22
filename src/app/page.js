'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col h-full lg:flex-row'>
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center '>
          <div className='h-2/3 lg:h-1/2 w-full  relative max-w-2xl'>
            <Image src='/teams-pp.jpg' alt='' fill className='object-contain' />
          </div>
        </div>
        <div className='h-1/2 flex flex-col gap-8 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  lg:h-full lg:w-1/2'>
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold'>
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className='md:text-xl md:font-semibold'>
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
              <Link href='/portfolio'>View My Work</Link>
            </button>
            <button className='p-4 rounded-lg ring-1 ring-black'>
              <Link href='/contact'>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

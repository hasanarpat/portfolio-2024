'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navlink from './navlink';
import { motion } from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const linkVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      <div className='hidden md:flex gap-4 lg:w-1/3'>
        {links.map((link, _index) => (
          <Navlink link={link} key={_index} />
        ))}
      </div>
      <div className='md:hidden lg:flex lg:w-1/3 justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Hasan</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
            Arpat
          </span>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/dribbble.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/instagram.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/pinterest.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://github.com/hasanarpat' target='_blank'>
          <Image src='/facebook.png' alt='' width={24} height={24} />
        </Link>
      </div>
      <div className='md:hidden z-40'>
        <button
          className='w-10 h-8 flex flex-col justify-between relative z-50'
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <motion.div
            animate={openMenu ? 'opened' : 'closed'}
            variants={topVariant}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            animate={openMenu ? 'opened' : 'closed'}
            variants={centerVariant}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            animate={openMenu ? 'opened' : 'closed'}
            variants={bottomVariant}
            className='w-10 h-1 bg-black rounded  origin-left'
          ></motion.div>
        </button>
        {openMenu && (
          <motion.div
            variants={linkVariants}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '
          >
            {links.map((link, _index) => (
              <motion.div key={_index} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

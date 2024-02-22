'use client';
import Brain from '@/components/brain';
import { motion, useScroll, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillsRef = useRef();
  const isSkillRefInView = useInView(skillsRef, {
    once: true,
    margin: '-100px',
  });

  const experienceRef = useRef();
  const experienceRefInView = useInView(experienceRef, {
    once: true,
    margin: '-300px',
  });

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className='h-full overflow-y-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              I&apos;m a Computer Engineering student at Mersin University and a
              Junior Front-End Engineer. My graduate is at June 2024. I have
              been developing web apps with React for nearly 2 years and half of
              them with NextJS. Listening and playing music on a very large
              scale. Trying to play every instrument i can found. A metalhead
              but an ethnic music player at the same time. Anatolian Rock
              enjoyer. I&apos;m a real bookworm and have love for Math and
              Physics. Also love making IOT and some arduino based projects.
            </p>
            <Link href='https://github.com/hasanarpat' className='italic'>
              You can find my repos on <strong>Github</strong>.
            </Link>
            <div className='text-xl font-extralight italic self-end'>
              Hasan Arpat
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={skillsRef}>
            <motion.h1
              initial={{ x: '300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            <motion.div
              className='flex flex-wrap gap-4 '
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                TypeScript
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                React.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Next.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                SCSS
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind CSS
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Material UI
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                MySQL
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Node.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Express.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Framer Motion
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Three.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Webpack
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Vite
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Firebase
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Figma
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Unit/E2E Testing
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Cypress
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Playwright
              </div>
              <Link
                href='https://www.freecodecamp.org/certification/fcc95c20e59-8243-45a0-a7c4-5c2cf030104e/responsive-web-design'
                className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
              >
                Responsive Web Design
              </Link>
              <Link
                href='https://www.udemy.com/certificate/UC-7fc081a9-dc88-4637-938d-a58b6794078c/'
                className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
              >
                Web Developer Bootcamp
              </Link>
              <Link
                href='https://www.efset.org/cert/5nQEZy'
                className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
              >
                English - Proficient
              </Link>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className='flex flex-col gap-12 justify-center pb-48'
            ref={experienceRef}
          >
            <motion.h1
              className='font-bold text-2xl'
              initial={{ x: '-300px' }}
              animate={experienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            <div>
              <div>
                {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-32'>
                  {/* LEFT */}
                  <div className='w-1/3 '>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Let&apos;s work together!
                    </div>
                    {/* JOB DESC */}
                    <div className='p-3 text-sm italic'></div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'></div>
                    {/* JOB COMPANY */}
                    <div className='p-1 rounded bg-transparent text-sm font-semibold w-fit'></div>
                  </div>
                  {/* CENTER */}
                  <div className='w-1/6 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* LINE CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3 '></div>
                </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-48'>
                  {/* LEFT */}
                  <div className='w-1/3 '></div>
                  {/* CENTER */}
                  <div className='w-1/6 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* LINE CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3 '>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Intern Frontend Engineer
                    </div>
                    {/* JOB DESC */}
                    <div className='p-3 text-sm italic'>
                      I have been on React-based application development,
                      leveraging my skills and experiencing more.
                    </div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'>
                      2023 Sep - 2024{' '}
                    </div>
                    {/* JOB COMPANY */}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                      Radity GmbH
                    </div>
                  </div>
                </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className='flex justify-between h-48'>
                  {/* LEFT */}
                  <div className='w-1/3 '>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Computer Engineering Student
                    </div>
                    {/* JOB DESC */}
                    <div className='p-3 text-sm italic'>
                      Equal to Computer Science Degree in Turkey. Took all the
                      lessons related to Computer Math and software development
                      succesfully!
                    </div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'>
                      2017 - 2024
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className='w-1/6 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* LINE CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3 '></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 xl:w-1/2 sticky top-0 right-0 z-40'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

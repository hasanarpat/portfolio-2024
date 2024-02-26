'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Admin Dashboard App',
    desc: 'The Admin Dashboard App is a versatile web application designed for efficient order and payment tracking. With dynamic dark and light modes, it ensures optimal user experience in any environment. Leveraging Material UI, the app provides intuitive access to product listings and user management, empowering administrators to perform CRUD (Create, Read, Update, Delete) operations seamlessly. From overseeing orders to managing user accounts, this dashboard offers a comprehensive solution for streamlined business operations.',
    img: '/dash-board.png',
    link: 'https://deft-youtiao-3b9b91.netlify.app/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Kopernik Pizza',
    desc: 'Kopernik Pizza is a responsive and dynamic restaurant ordering app, meticulously crafted to offer a seamless experience across all devices. Utilizing Tailwind CSS, it combines stunning visuals, including fancy buttons, captivating images, and engaging animations, ensuring an immersive user journey. From smartphones to tablets and desktops, Kopernik Pizza adapts effortlessly to various screen sizes, providing customers with an intuitive and enjoyable ordering process. Whether craving pizza, pasta, or salads, this app delivers a responsive interface that guarantees a delightful dining experience anytime, anywhere.',
    img: '/3.gif',
    link: '/https://sage-meringue-1cdf9d.netlify.app/',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'MovieHub',
    desc: 'Welcome to MovieHub, a vibrant social movie platform that reimagines the movie-watching experience. With its sleek design and user-friendly interface, MovieHub combines the best of Netflixs streaming capabilities with interactive social features. Powered by NextAuth for secure authentication, users can seamlessly log in and access a world of entertainment. Utilizing SASS-SCSS for styling, MovieHub offers a visually stunning interface, enhancing the overall viewing experience. Key features include a dynamic carousel showcasing the latest releases and trending titles, making it easy for users to discover new movies. Additionally, MovieHub allows visitors to engage with the community by commenting on movies and adding items to their watchlist, fostering a sense of shared excitement and recommendation. Whether you are a cinephile looking for your next favorite film or simply seeking to connect with fellow movie enthusiasts, MovieHub provides a dynamic and engaging platform for discovering, discussing, and enjoying movies in a social context. Join us on MovieHub and immerse yourself in the world of cinema like never before.',
    img: '/netflix.gif',
    link: '',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Imdb Rotten Tomatoeish',
    desc: 'Leveraging the OMDB API to provide comprehensive movie data effortlessly. With its sleek interface and intuitive design, MovieMate offers a seamless browsing experience, empowering users to explore an extensive collection of films.Key features include a dynamic pagination component that enables users to navigate through the movie database with ease. Utilizing on-enter fetching, rotten tomatoeish ensures that movie details, scores, cast information, and more are dynamically loaded for a smooth user experience.But that is not all – MovieMate also lets you personalize your experience by allowing you to add your favorite movies to a dedicated favorites list. With favorites stored securely in local storage, you can revisit and enjoy your preferred films anytime, anywhere.Whether you are discovering new gems or revisiting old favorites, MovieMate is your trusted companion for all things cinema. Explore, discover, and dive deep into the world of movies with MovieMate by your side.',
    img: '/gif2.gif',
    link: 'https://dancing-daffodil-9d82fe.netlify.app/',
  },
  {
    id: 5,
    color: 'from-purple-300 to-red-300',
    title: 'TicketEase',
    desc: 'TicketEase is your hassle-free ticket management solution, offering seamless signup via NextAuth with GitHub, Google, or email credentials. Built with Tailwind CSS, it provides a sleek and intuitive interface for creating and editing tickets with ease. Whether it is submitting a new request or updating existing tickets, TicketEase streamlines the process, allowing users to focus on what matters most. Simplify your ticket management experience with TicketEase.',
    img: '/ticket-app.gif',
    link: '',
  },
  {
    id: 6,
    color: 'from-purple-300 to-red-300',
    title: 'Personal Blog Powered by Jekyll',
    desc: 'Jekyll is a powerful static site generator that simplifies the process of building websites and blogs. Leveraging its simplicity and flexibility, I have created my own personal blog with Jekyll. With Jekyll, you can write your blog posts in Markdown, making it easy to focus on your content without worrying about the underlying HTML structure. On my blog, I share my experiences, ideas, projects, and even my poems. Jekyll is templating system allows you to organize your content efficiently, ensuring a seamless and enjoyable reading experience for your visitors. Plus, its integration with GitHub Pages makes deployment a breeze, enabling you to publish my blog posts with just a few clicks. Whether Im sharing my latest coding project, reflecting on personal experiences, or expressing my creativity through poetry, Jekyll empowers me to craft a unique and personalized blog that truly reflects who am i.',
    img: '/blog-hp.png',
    link: 'https://hasanarpat.github.io/',
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-[800vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8 text-white'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                    {item.title}
                  </h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[380px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target='_blank'
                    className='flex justify-end'
                  >
                    <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-8xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;

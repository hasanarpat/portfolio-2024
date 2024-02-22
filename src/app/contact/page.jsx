'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const text = 'Say Hello☺';

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          setError(error);
        }
      );
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div>
            {text.split('').map((letter, _index) => (
              <motion.span
                key={_index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: _index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 p-24 justify-center'
        >
          <span>Dear Hasan Arpat</span>
          <textarea
            rows={6}
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='message'
          ></textarea>
          <span>My mail address is:</span>
          <input
            type='email'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='email'
          />
          <span>Regards</span>
          <button
            type='submit'
            className='bg-purple-200 rounded font-semibold text-gray-600 p-4'
          >
            Send
          </button>
          {success && (
            <span className='text-green-600 font-semibold'>
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className='text-red-600 font-semibold'>
              Something went wrong
            </span>
          )}
          <span className='text-sm font-bold text-sky-500'>
            You can reach me on my social accounts at navbar or
            hasanarpat99@gmail.com
          </span>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

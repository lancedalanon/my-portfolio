import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // For smoother animations

const typingSpeed = 100; // Speed of typing in milliseconds
const fullHeaderText = "Hi, I’m Lance Dalanon!";

const HomeSection: React.FC = () => {
  // State to control visibility of text elements
  const [showText, setShowText] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(false); // State to control cursor visibility
  const typingRef = useRef<number | null>(null);

  // Typing effect for the header
  useEffect(() => {
    const startTyping = () => {
      setShowCursor(true); // Display cursor after the delay
      const type = (index: number) => {
        if (index < fullHeaderText.length) {
          typingRef.current = window.setTimeout(() => {
            setHeaderText((prev) => prev + fullHeaderText.charAt(index));
            type(index + 1);
          }, typingSpeed);
        } else {
          setIsTypingComplete(true);
        }
      };
      type(0);
    };

    // Delay to hide cursor for the first 2 seconds and then start typing
    const cursorDelay = setTimeout(() => {
      startTyping(); // Start typing after the delay
    }, 2000); // 2-second delay before cursor and typing start

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
      clearTimeout(cursorDelay);
    };
  }, []);

  // Handle showing paragraph and button after typing is done
  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1000); // Delay showing text after typing is complete

      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1 }} 
        >
          <Image 
            src={`/images/programming-background.gif`} 
            alt="A programming background with code snippets" 
            layout="fill"
            objectFit="cover" 
            className="z-0" 
            priority
          />
        </motion.div>
        {/* Transparent Overlay with animation */}
        <motion.div
          className="absolute inset-0 bg-black opacity-0"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ duration: 1, delay: 0 }} // Background transition starts immediately
        />
      </div>

      {/* Header with typing effect */}
      <header className="relative z-10 mx-4">
        <h1 className="text-5xl md:text-7xl font-bold text-custom-100">
          {headerText}
          {/* Conditionally render the blinking cursor while typing */}
          {showCursor && !isTypingComplete && (
            <span className={`inline-block border-r-4 border-custom-100`}>
              <span className={`w-4 h-4 inline-block`} />
            </span>
          )}
        </h1>
      </header>

      {/* Conditionally render text elements based on showText state */}
      {showText && (
        <>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.5 }} // Delay to fade in
            className="text-lg md:text-xl text-custom-100 mt-4 max-w-2xl relative z-10 mx-4"
          >
            A dedicated and passionate full-stack software engineer committed 
            to delivering innovative technical solutions tailored to meet your business needs.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 text-lg bg-white text-custom-800 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-200 transition-all duration-200 relative z-10 scroll-smooth" 
            href="#about-me"
            aria-label="Learn more about Lance Orville Dalanon and his skills as a full-stack software engineer"
          >
            Learn More
          </motion.a>
        </>
      )}
    </section>
  );
};

export default HomeSection;

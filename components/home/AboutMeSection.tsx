import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const typingSpeed = 100; // Speed of typing in milliseconds
const fullHeaderText = "MEET YOUR NEXT SOFTWARE ENGINEER";

const AboutMeSection: React.FC = () => {
  // State for controlling visibility of text elements
  const [showText, setShowText] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(false); // State to control cursor visibility
  const typingRef = useRef<number | null>(null);

  // Use the inView hook to detect when the section is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  // Typing effect for the header
  useEffect(() => {
    if (inView) {
      setShowCursor(true); // Show cursor when the section is in view
      const type = (index: number) => {
        if (index < fullHeaderText.length) {
          typingRef.current = window.setTimeout(() => {
            setHeaderText((prev) => prev + fullHeaderText.charAt(index));
            type(index + 1);
          }, typingSpeed);
        } else {
          setIsTypingComplete(true); // Mark typing as complete
        }
      };
      type(0); // Start typing
    }

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [inView]);

  // Handle showing paragraph and button after typing is done
  useEffect(() => {
    if (isTypingComplete) {
      const pauseTimer = setTimeout(() => {
        setShowCursor(false); // Hide cursor after the pause
        setHeaderText(''); // Clear the header text
        setShowText(true); // Show the rest of the content
      }, 1000); // Pause for 1 second after typing is complete

      return () => clearTimeout(pauseTimer);
    }
  }, [isTypingComplete]);

  return (
    <section
      id="about-me"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center px-7 md:px-14 py-14 bg-custom-700"
    >
      {showCursor && (
        <p className="text-4xl md:text-6xl font-bold text-custom-100">
          {headerText}
          {/* Conditionally render the blinking cursor while typing */}
          {showCursor && (
            <span className={`inline-block border-r-4 border-custom-100`}>
              {!isTypingComplete && (<span className={`w-4 h-4 inline-block`} />)}
            </span>
          )}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-14">
        <div className="text-left px-2 flex flex-col justify-between">
          <div>
            <header>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: showText ? 1 : 0 }} // Use showText to control animation
                transition={{ duration: 2 }}
                className="text-3xl md:text-4xl font-bold text-custom-100 mb-4"
              >
                MEET YOUR NEXT SOFTWARE ENGINEER: MY JOURNEY
              </motion.h2>
            </header>
            {showText && (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showText ? 1 : 0 }} // Use showText to control animation
                  transition={{ duration: 2 }}
                  className="text-lg md:text-xl text-white mb-4"
                >
                  I’m a Full Stack Software Engineer who loves building and enhancing web and software applications.
                  I work with a range of technologies, including <strong className="text-accent">JavaScript</strong>, <strong className="text-accent">Python</strong>, <strong className="text-accent">Laravel</strong>, <strong className="text-accent">Vue.js</strong>, <strong className="text-accent">React.js</strong>, <strong className="text-accent">Next.js</strong>,
                  and the <strong className="text-accent">TALL stack</strong> (<strong className="text-accent">Tailwind CSS</strong>, <strong className="text-accent">Alpine.js</strong>, <strong className="text-accent">Livewire</strong>).
                  I’m all about <strong className="text-accent">writing clean, secure code</strong>, and I make it a point to follow best practices,
                  like thorough <strong className="text-accent">code reviews</strong> and <strong className="text-accent">OWASP</strong> standards.
                  I thrive in <strong className="text-accent">Agile</strong> environments, where <strong className="text-accent">teamwork</strong> and <strong className="text-accent">communication</strong> are key to reaching our goals.
                  With a solid foundation in both <strong className="text-accent">front-end and back-end development</strong>, I’m excited to take on challenges and come up with innovative solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showText ? 1 : 0 }} // Use showText to control animation
                  transition={{ duration: 2 }} // Same duration for all elements
                  className="text-lg md:text-xl text-white mb-4"
                >
                  Beyond my technical skills, I’m genuinely passionate about using technology
                  to tackle real-world problems. I love learning new tools and methods that help me grow as a developer.
                  Whether I’m mentoring junior developers or diving into new frameworks, I’m committed to continuous improvement.
                  I’m eager to be part of projects that not only challenge me but also make a meaningful difference in people’s
                  lives.
                </motion.p>
              </>
            )}
          </div>
          <div className="flex justify-center md:justify-start">
            {showText && (
              <motion.a
                className="flex items-center text-md md:text-lg bg-white text-custom-800 border border-custom-800 font-semibold px-6 py-4 rounded-full shadow hover:bg-gray-200 transition-all duration-200"
                href="/documents/Lance-Orville-Rosario-Dalanon-Resume.pdf"
                download
                aria-label="Download Lance Dalanon's CV"
                initial={{ opacity: 0 }}
                animate={{ opacity: showText ? 1 : 0 }} // Use showText to control animation
                transition={{ duration: 2 }} // Same duration for all elements
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.a>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showText ? 1 : 0 }} // Control animation with showText
              transition={{ duration: 2 }} // Same duration for all elements
            >
              <Image
                src={`/images/lance-dalanon.jpg`}
                alt="Lance Dalanon, Full Stack Software Engineer"
                width={480}
                height={480}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

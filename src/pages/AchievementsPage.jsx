import { motion } from 'framer-motion';
import React from 'react';
import { CheckCircle, EmojiEvents } from '@mui/icons-material';

const AchievementsPage = () => {
  const achievements = [
    {
      icon: <CheckCircle className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Participated in <span className="text-red-400 font-semibold">CODE RUSH 2023</span>
        </>
      ),
    },
    {
      icon: <CheckCircle className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Participated in <span className="text-red-400 font-semibold">Riphah Computing Challenge 2024</span>
        </>
      ),
    },
    {
      icon: <EmojiEvents className="text-red-400 w-5 h-5" />,
      text: (
        <>
          Award in <span className="text-red-400 font-semibold">Mental Math Competition</span> at School Level 2019
        </>
      ),
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1] // Premium easing curve
      }
    }
  };

  const titleItem = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -30 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        bounce: 0.3
      }
    })
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="h-[100vh] w-[100%] bg-gray-900 text-white py-12 px-4 md:px-12 2xl:ml-32 p-20 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Title with elegant color transition */}
      <motion.h2 
        variants={titleItem}
        className="text-3xl md:text-4xl font-bold text-center mb-2"
        whileHover={{
          color: "#FF4D4D",
          transition: { 
            duration: 0.4,
            ease: "easeInOut"
          }
        }}
      >
        ACHIEVEMENTS
      </motion.h2>

      {/* Smooth growing divider */}
      <motion.hr 
        variants={titleItem}
        className="border-red-500 w-44 mx-auto mb-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }}
      />

      <motion.ul 
        variants={container}
        className="space-y-6 max-w-2xl mx-auto w-full"
      >
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={listItem}
            className="flex items-start bg-gray-800 space-x-4 p-4 rounded-lg shadow-md"
            whileHover={{ 
              y: -3,
              backgroundColor: "rgba(55, 65, 81, 0.7)", // gray-700
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 15
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {item.icon}
            </motion.div>
            <motion.span 
              className="text-lg"
              whileHover={{
                color: "#FECACA", // red-200 for subtle highlight
                transition: { duration: 0.2 }
              }}
            >
              {item.text}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default AchievementsPage;
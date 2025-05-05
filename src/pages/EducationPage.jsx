import { motion } from 'framer-motion';
import React from 'react';

const EducationPage = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Punjab University",
      year: "2023–2027",
    },
    {
      degree: "Intermediate (F.Sc Pre-Medical)",
      institution: "Riphah International College",
      year: "2021–2023",
    },
    {
      degree: "Matriculation (Science)",
      institution: "AAS Academy",
      year: "2019–2021",
    },
  ];

  // Smooth animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve
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

  const tableRow = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        bounce: 0.4
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
      {/* Title with smooth scaling */}
      <motion.h2 
        variants={titleItem}
        className="text-3xl md:text-4xl font-bold text-center mb-2"
        whileHover={{
          color: "#FF4D4D",
          transition: { duration: 0.3 }
        }}
      >
        EDUCATION
      </motion.h2>

      {/* Smooth growing divider */}
      <motion.hr 
        variants={titleItem}
        className="border-red-500 w-36 mx-auto mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }}
      />

      <div className="overflow-x-auto max-w-[250px] sm:max-w-[510px] md:max-w-[900px] lg:max-w-[990px]">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <motion.tr 
              variants={titleItem}
              className="bg-gray-800 text-red-400 text-lg"
              transition={{ 
                duration: 0.7,
                delay: 0.4
              }}
            >
              <th className="py-4 rounded-l-xl">Degree</th>
              <th className="py-4">Institution</th>
              <th className="py-4 rounded-r-xl">Year</th>
            </motion.tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <motion.tr
                key={index}
                custom={index}
                initial="hidden"
                animate="show"
                variants={tableRow}
                className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-xl"
                whileHover={{ 
                  y: -3,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }
                }}
              >
                <td className="py-4 px-6 font-medium text-center">{edu.degree}</td>
                <td className="py-4 px-6 text-center">{edu.institution}</td>
                <motion.td 
                  className="py-4 px-6 font-semibold text-center text-red-300"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#FF4D4D",
                    transition: { duration: 0.2 }
                  }}
                >
                  {edu.year}
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default EducationPage;
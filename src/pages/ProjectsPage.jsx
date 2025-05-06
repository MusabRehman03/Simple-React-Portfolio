import { motion } from 'framer-motion';
import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      image: "../../public/project1.jpg", 
      title: "Vim-Like Text Editor",
      tech: "C++, Data Structures",
      description: "Developed a lightweight text editor with Vim-like functionality using custom data structures like linked lists, stacks, and queues for efficient text manipulation."
    },
    {
      image: "../../public/project2.png", 
      title: "Android Fitness App",
      tech: "Java",
      description: "Developed an Android fitness app with user authentication and real-time data storage using Firebase, featuring workout logging and progress tracking."
    },
    {
      image: "../../public/project3.jpg", 
      title: "E-Commerce System",
      tech: "SQL Database Project",
      description: "Developed a relational database system for an e-commerce platform using SQL to manage user data, product inventory, and transactions."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
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

  const projectCard = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
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
      className="h-[100%] w-[100%] bg-gray-900 text-white py-12 px-4 md:px-12 2xl:ml-32 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Title with animated underline */}
      <motion.h2 
        variants={titleItem}
        className="text-3xl md:text-4xl font-bold text-center mb-2 pt-20 relative"
        whileHover={{
          color: "#FF4D4D",
          transition: { duration: 0.3 }
        }}
      >
        PROJECTS
        
      </motion.h2>

      <motion.hr 
        variants={titleItem}
        className="border-red-500 w-32 mx-auto mb-12 opacity-70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
      />

      <motion.div 
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={projectCard}
            className="relative overflow-hidden rounded-xl shadow-lg"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px rgba(239, 68, 68, 0.2)",
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 15
              }
            }}
          >
            {/* Image with smooth zoom */}
            <motion.div 
              className="h-48 overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.5 }
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
            
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Content with smooth background transition */}
            <motion.div 
              className="p-6 bg-gray-800/90"
              initial={{ backgroundColor: 'rgba(31, 41, 55, 0.9)' }} // gray-800
              whileHover={{ backgroundColor: 'rgba(17, 24, 39, 0.95)' }} // gray-900
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-xl font-bold text-white"
                whileHover={{ color: "#F87171" }} // red-400
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-red-400 mb-2"
                whileHover={{ scale: 1.02 }}
              >
                {project.tech}
              </motion.p>
              <motion.p 
                className="text-gray-300"
                whileHover={{ color: "#E5E7EB" }} // gray-200
              >
                {project.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
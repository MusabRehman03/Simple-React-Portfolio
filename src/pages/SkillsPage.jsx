import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const [loaded, setLoaded] = useState(false);
  
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 65 },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const ProgressBar = ({ level }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: loaded ? `${level}%` : 0 }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            type: 'spring',
            damping: 10,
            stiffness: 100
          }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="h-full rounded-full bg-red-500 relative"
        >
          <motion.span
            animate={{
              opacity: hovered ? 1 : 0,
              // x: hovered ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white"
          >
            {level}%
          </motion.span>
          <motion.div
            animate={{
              opacity: hovered ? 0.2 : 0,
              width: hovered ? '100%' : '0%'
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-white rounded-full"
          />
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-[100vh] w-[100%] 2xl:ml-32  bg-gray-900 text-white pt-48  px-4 ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="relative hover:text-[#FF4D4D]">
              SKILLS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 hover:w-full"></span>
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-red-500 mx-auto mt-2 opacity-70"></div>
        </motion.div>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-red-400">{skill.level}%</span>
              </div>
              <ProgressBar level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
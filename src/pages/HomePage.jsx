import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-gray-900 2xl:ml-56 pt-30 min-h-screen flex flex-col items-center justify-center text-white px-4"
    >
      {/* Profile Image with bounce animation */}
      <motion.div
        variants={item}
        className="mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="profile-container">
          <motion.img
            src="../../public/profile_pic.jpeg"
            alt="Profile"
            className="profile-img"
            initial={{ scale: 0.9, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
        </div>
      </motion.div>

      {/* Text elements with staggered animation */}
      <motion.h1
        variants={item}
        className="text-4xl md:text-5xl font-semibold mb-2"
      >
        Hi, It's Musab
      </motion.h1>

      <motion.h2
        variants={item}
        className="text-xl md:text-3xl font-bold text-red-400 mb-2"
      >
        I'M A{" "}
        <motion.span
          className="text-red-500"
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 0px rgba(239,68,68,0)",
              "0 0 10px rgba(239,68,68,0.5)",
              "0 0 0px rgba(239,68,68,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          COMPUTER SCIENCE STUDENT
        </motion.span>
      </motion.h2>

      <motion.hr
        variants={item}
        className="border-red-500 w-3/4 max-w-xl mb-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.p variants={item} className="text-center max-w-2xl text-lg mb-6">
        I'm a computer science student passionate about building innovative
        software solutions and exploring new technologies. My portfolio
        showcases my skills, projects, and dedication to continuous learning in
        tech.
      </motion.p>

      {/* Social icons with individual hover animations */}
      <motion.div variants={item} className="flex space-x-6 text-2xl mb-6">
        {[
          { icon: <FaInstagram />, href: "https://github.com/MusabRehman03" },
          {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/musab-ur-rehman-3a0a1a237/",
          },
          { icon: <FaGithub />, href: "https://github.com/MusabRehman03" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-400 transition-colors" // Base styles
            whileHover={{
              y: -5,
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Button with pulse animation */}
      <motion.a
        variants={item}
        href={"https://www.linkedin.com/in/musab-ur-rehman-3a0a1a237/"}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold relative overflow-hidden"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
        <motion.span
          className="absolute inset-0 bg-white opacity-0"
          whileHover={{
            opacity: 0.2,
            transition: { duration: 0.3 },
          }}
        />
      </motion.a>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-[100vh] min-w-[100%]  bg-gray-900 text-white py-16 px-4 pt-40 2xl:ml-32">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="relative hover:text-[#FF4D4D]">
              CONTACT ME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 hover:w-full"></span>
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-red-500 mx-auto mt-2 opacity-70"></div>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 text-center"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <FiUser className="text-red-500" />
                Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-red-500'} focus:outline-none focus:ring-1 focus:ring-red-500 transition`}
                  placeholder="Your name"
                />
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <FiMail className="text-red-500" />
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-red-500'} focus:outline-none focus:ring-1 focus:ring-red-500 transition`}
                  placeholder="your.email@example.com"
                />
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <FiMessageSquare className="text-red-500" />
                Message *
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700 focus:border-red-500'} focus:outline-none focus:ring-1 focus:ring-red-500 transition`}
                  placeholder="Your message here..."
                ></textarea>
                <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${isSubmitting ? 'bg-red-600/70' : 'bg-red-600 hover:bg-red-700'} transition-colors`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
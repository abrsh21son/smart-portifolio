// components/SignupButton.js
import React from 'react';
import { motion } from 'framer-motion';

const SignupButton = () => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-gray-800 transition-all duration-300 bg-white border-2 border-gray-800 rounded-lg group"
      whileHover={{ scale: 1.05 }}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 bg-green-400 rounded-lg group-hover:w-full group-hover:h-full"></span>
      <span className="relative transition-colors duration-300 group-hover:text-white group-hover:z-10">
        Sign Up
      </span>
    </motion.button>
  );
};

export default SignupButton;
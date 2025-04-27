import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import Link from "next/link";  // Add this import

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Main Content - Centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-yellow-500 bg-clip-text text-transparent"
          >
            Let&apos;s create awesome products!
          </motion.h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl text-lg">
            I am always open to discussing your project, improving your online presence, 
            or helping with your website&apos;s design and converting challenges.
          </p>

          {/* Contact Button - Fixed */}
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mb-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </Link>

          {/* Social Links - Proper Implementation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 ">
          <span className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abraham Shiferaw. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {certificates} from "../constantData/"

const CertificateDisplay = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef();
  const animationRef = useRef();

 

  // Auto-scroll animation with manual control
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const cardWidth = 220; // Width of each card including margin
    const maxScroll = certificates.length * cardWidth;

    const autoScroll = () => {
      if (!isAutoScrolling) return;
      
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      setIsAutoScrolling(false);
      
      // Reset auto-scroll after 3 seconds of inactivity
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsAutoScrolling(true);
        scrollAmount = container.scrollLeft; // Sync scroll position
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(autoScroll);
        }
      }, 3000);
    };

    container.addEventListener('scroll', handleScroll);
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationRef.current);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [isAutoScrolling]);

  return (
    <div className="relative w-full overflow-hidden py-12 px-4">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="text-3xl md:text-4xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-500">
          Certifications & Awards 
        </span>
        <span className="text-3xl md:text-4xl ml-2">🚀🚀</span>
      </motion.div>

      {/* Certificates Container */}
      <div className="relative mx-auto max-w-6xl">
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto hide-scrollbar py-4 px-8 cursor-grab active:cursor-grabbing"
        >
          {[...certificates, ...certificates].map((cert, index) => (
            <motion.div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 relative group"
              style={{
                width: "300px",
                height: "240px",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Certificate Card */}
              <motion.div
                className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.3)"
                }}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  quality={90}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <motion.h3
                    className="text-sm font-bold text-white mb-1"
                    initial={{ y: 10 }}
                    animate={{ y: hoveredIndex === index ? 0 : 10 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p
                    className="text-white/80 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    {cert.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CertificateDisplay;
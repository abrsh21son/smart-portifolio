"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constantData";
import { ArrowUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  hover: {
    y: -15,
    scale: 1.03,
    boxShadow: "0 25px 50px -12px rgba(74, 222, 128, 0.25)",
    transition: { 
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const arrowVariants = {
  normal: { rotate: 45, scale: 1 },
  hover: { 
    rotate: 90,
    scale: 1.2,
    backgroundColor: "#4ade80",
    color: "#000",
    borderRadius: "9999px",
    boxShadow: "0 0 25px 8px rgba(74, 222, 128, 0.7)"
  }
};

function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-[90vh] py-10 md:py-24 bg-gradient-to-b from-darkColor/90 via-darkColor to-black/90 relative overflow-x-auto scrollbar-custom">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-green-400/30"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Title className="mb-16 text-center">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Premium Services
            </span>
          </Title>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 relative z-10">
          {servicesData?.map((service, index) => {
            const isExpanded = expandedCard === index;
            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className={cn(
                  "relative overflow-hidden rounded-2xl p-8 border border-lightColor/20",
                  "bg-gradient-to-br from-lightColor/5 to-lightColor/10 backdrop-blur-lg",
                  "cursor-pointer shadow-xl",
                  isExpanded ? "md:col-span-2 lg:col-span-3" : "",
                  hoveredCard === index ? "ring-2 ring-green-400/50" : ""
                )}
                style={{
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Particle background */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 overflow-hidden"
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                            scale: 0
                          }}
                          animate={{ 
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          className="absolute text-green-400"
                          style={{
                            fontSize: `${Math.random() * 10 + 5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                          }}
                        >
                          <Sparkles size={16} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <motion.p 
                      className="text-6xl font-black p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.id}
                    </motion.p>
                    
                    <motion.div
                      variants={arrowVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href={service.href} target="_blank" onClick={(e) => e.stopPropagation()}>
                        <ArrowUp size={32} className="p-1.5" />
                      </Link>
                    </motion.div>
                  </div>

                  <motion.h2 
                    className="font-bold text-3xl md:text-4xl text-lightColor italic mb-6"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h2>

                  <motion.div
                    initial={{ height: isExpanded ? "auto" : "5em" }}
                    animate={{ height: isExpanded ? "auto" : "5em" }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden flex-grow"
                  >
                    <p className="text-white/80 leading-relaxed text-lg md:text-xl">
                      {service.description}
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-darkColor to-transparent pointer-events-none flex items-end justify-center pb-4"
                      >
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="text-green-400"
                        >
                          <ArrowUp size={24} />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Services;
"use client";
import DownloadButton from "@/components/DownloadButton";
import Container from "../components/Container";
import ProfilePhoto from "@/components/ProfilePhoto";
import TechnicalSkills from "../components/Skills";
import Footer from "../components/Footer";
import CertificateCarousel from "../components/CertificateCarousel.jsx";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "../components/Aboutme";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = `a creative and detail-oriented engineer with a deep passion for
  crafting digital experiences that are not only functional but also
  delightful. I thrive at the intersection of technology and design,
  where I bring ideas to life through web development, mobile apps, and
  software engineering. 🔥🔥`;

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    setIsTyping(true);
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 5);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <Container className="py-10 ">
      <div className="bg-[#0B1120 flex flex-col sm:flex items-center justify-center">
        <div className="sm:flex flex-cols-1 gap-8">
          <ProfilePhoto />
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-6xl px-4 md:py-24">
            {/* Text Content */}
            <motion.div
              className="flex-1 flex flex-col items-center md:items-start gap-5 md:gap-6 text-center md:text-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-bold tracking-tight text-transparent text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Abraham Ahiferaw
                </motion.h2>
                <motion.h1
                  className="text-4xl md:text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-300 to-yellow-400 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Software Engineer
                </motion.h1>
              </motion.div>

              <div className="relative">
                <motion.p
                  className="text-left w-full md:max-w-[500px] leading-relaxed md:leading-7 font-light text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {typedText}
                  {isTyping && (
                    <motion.span
                      className="inline-block w-2 h-6 bg-gradient-to-t from-yellow-400 to-red-500 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [-2, 2, -2],
                        scaleY: [1, 1.2, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      style={{
                        boxShadow: "0 0 8px #f59e0b, 0 0 16px #ef4444",
                      }}
                    />
                  )}
                </motion.p>

                {/* Optional: Add a subtle flame effect to the typing area */}
                {isTyping && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 via-orange-500/30 to-transparent"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      width: "100%",
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              <motion.div
                className="flex flex-col gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <DownloadButton />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <CertificateCarousel />
      <TechnicalSkills />
      <Footer />
    </Container>
  );
}

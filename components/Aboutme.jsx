"use client";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiUsers } from "react-icons/fi";

export default function Aboutme() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ">
      <motion.div
        
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px " }}
        transition={{ staggerChildren: 0.2 }}
        className="text-center mb-16 lg:mb-24 space-y-4 lg:space-y-6"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400"
        >
          About Me
        </motion.h2>

        <motion.div variants={fadeIn} className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            I am a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 ">Software Engineer</span>{" "}
            with <span className="font-bold text-purple-400">1+ years</span> of
            experience specializing in{" "}
            <span className="font-bold text-yellow-400">Next js/react</span>. I
            bridge the gap between front-end and back-end development to create
            seamless, user-friendly web applications.
          </p>

          <p>
            My expertise includes building single page applications implementing
            responsive designs that work across all devices. I&apos;m passionate
            about creating intuitive interfaces that users love.
          </p>

          <p>
            Beyond coding, I thrive in{" "}
            <span className="font-bold text-green-400">team environments</span>
            &apos; communicating complex ideas clearly, and adapting to new
            challenges. I&apos;m committed to continuous learning and staying at
            the forefront of web development innovations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            {
              icon: <FiCode className="w-8 h-8" />,
              title: "Frontend Mastery",
              desc: "React, Next.js, TypeScript, Tailwind",
            },
            {
              icon: <FiCpu className="w-8 h-8" />,
              title: "Backend Skills",
              desc: "Node.js, Express, REST APIs",
            },
            {
              icon: <FiLayers className="w-8 h-8" />,
              title: "Build Tools",
              desc: "Webpack, Turbopack, npm/yarn/pnpm",
            },
            {
              icon: <FiUsers className="w-8 h-8" />,
              title: "Team Player",
              desc: "Agile, Git, Clear Communication",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all"
            >
              <div className="text-cyan-400 mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

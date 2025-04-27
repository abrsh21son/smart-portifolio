import Link from "next/link";
import { motion } from "framer-motion";
import { skills } from "../constantData/index";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="py-16 bg-transparent w-full">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-cyan-400 to-yellow-600 ">
            My Skills
          </p>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols- gap-3 md:gap-4 justify-items-center items-center" 
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="w-full"
            >
              <Link
                href={`/skills/${skill.slug}`}
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl 
                          border border-gray-300
                          hover:border-green-400 dark:hover:border-green-500
                          transition-all duration-300 ease-out
                          shadow-sm hover:shadow-lg"
              >
                <span className="font-medium text-sm sm:text-base text-center">
                  {skill.name}
                </span>
                <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
               
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

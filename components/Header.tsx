"use client";

import { navbarData } from "@/constantData";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { GrDownload } from "react-icons/gr";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    color: "#4ade80",
    transition: { duration: 0.2 }
  }
};

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed w-full z-40 backdrop-blur-md transition-all duration-300 mb-28 shadow-sm shadow-[#0B1120] ",
        scrolled
          ? "border-b border-purple-500 bg-[#0B1120] shadow-lg shadow-[#07090e]"
          : "border-b border-transparent bg-[#0B1120]"
      )}
    >
      <Container className="py-4 px-6 flex  justify-between items-center  ">
        <Logo title="Abrsh" subtitle="." className="text-2xl" />
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-8 mr-12">
  <motion.ul className="flex md:gap-8 mr-8">
    {navbarData?.map((item, i) => (
      <motion.li
        key={item.title}
        custom={i}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={navItemVariants}
      >
        <Link
          href={item.link}
          className={cn(
            // Base styles
            "relative text-xl uppercase tracking-wider leading-3 font-semibold px-1 py-2",
            
            // Gradient text (green to purple)
            "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-300 hover:to-purple-400 transition-all duration-300",
            
            // Hover effect (underline + glow)
            "group hover:underline hover:decoration-2 hover:underline-offset-6",
            
            // Active link style
            pathname === item.link ? "underline decoration-2 underline-offset-6" : ""
          )}
        >
          {item.title}
          
          {/* Animated Gradient Underline (Goldish) */}

          {pathname === item.link ? (
            <motion.span
              variants={underlineVariants}
              className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-yellow-600 rounded-full"
              layoutId="navUnderline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ) : (
            <motion.span
              className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full group-hover:w-full transition-all duration-500 ease-out origin-left"
            />
          )}
        </Link>
      </motion.li>
    ))}
  </motion.ul>

  {/* Hire Me Button (unchanged) */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="ml-4"
  >
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300"
    >
      <GrDownload className="w-4 h-4" />
      Hire Me
    </Link>
  </motion.div>
</nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          aria-label="Menu"
        >
          {isSideBarOpen ? (
            <FiX className="w-6 h-6 text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </Container>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSideBarOpen && (
          <SideBar
            isOpen={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
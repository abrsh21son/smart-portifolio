"use client";

import Logo from "./Logo";
import { navbarData } from "@/constantData";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    x: 5,
    color: "#4ade80",
    transition: { duration: 0.2 }
  }
};

const SideBar: React.FC<Props> = ({ isOpen, onClose, pathname }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm "
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed inset-y-0 right z-50 w-80 max-w-full",
              "bg-bodyColor/95 backdrop-blur-lg border-r border-white/10",
              "shadow-2xl shadow-green-900/20 "
            )}
          >
            <div className="shadow-2xl shadow-cyan-300 bg-black/40 ">

               
            <div className="h-full flex flex-col  ">
              {/* Header */}
              <div className="flex justify-between items-center  p-6 border-b border-white/10">
                <Logo 
                  title="Abrsh" 
                  subtitle="." 
                  className="text-2xl"
                />
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close sidebar"
                >
                  <FiX className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-8 px-6 ">
                <ul className="space-y-6 ">
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
                          "relative text-2xl  tracking-wide font-extrabold italic ",
                          "block py-2 transition-colors",
                          pathname === item.link 
                            ? "text-white" 
                            : "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-green-500 to-yellow-600 hover:from-green-800 hover:to-purple-400 transition-all duration-300"
                        )}
                        onClick={onClose}
                      >
                        {item.title}
                        {pathname === item.link && (
                          <motion.span
                            layoutId="mobileNavUnderline"
                            className="absolute left-0 bottom-0 w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-8"
                >
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center gap-2",
                      "px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600",
                      "text-white font-semibold tracking-wide",
                      "shadow-lg shadow-green-500/20 hover:shadow-green-500/30",
                      "transition-all duration-300"
                    )}
                  >
                    Download Resume
                  </Link>
                </motion.div>
                
                <div className="flex justify-center ">
                  <SocialLinks />
                </div>
                </div>
              </div>
              </div>


          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
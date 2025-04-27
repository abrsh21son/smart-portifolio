"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from "../public/ablogo.png";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}

export default function Logo({ className, title }: Props) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="focus:outline-none ">
        <motion.h1
          className={cn(
            "flex justify-center gap-2  ",
            "transition-all duration-300",
            className
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <Image
              src={LogoImage}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          <span
            className=" font-bold tracking-tight text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-500 "

          >
            {title}
          </span>
        </motion.h1>
      </Link>
    </motion.div>
  );
}

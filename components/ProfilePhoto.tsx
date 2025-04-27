"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "@/public/linkiden.png";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export default function ProfilePhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative  flex-col  gap-y-9 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] flex items-center justify-center mt-12">
      <motion.div
        className="relative w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 border-white/20 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: loaded ? 1 : 0,
          scale: loaded ? 1 : 0.9,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={profile}
          alt="profile picture"
          fill
          className="object-cover"
          onLoad={() => setLoaded(true)}
          priority
        />
      </motion.div>
      <SocialLinks />
    </div>
  );
}

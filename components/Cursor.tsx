/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

    useEffect(() => {
      const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        setCursorStyle({
          left: e.clientX,  
          top: e.clientY,
        });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50  transition-opacity duration-300
       
      }`}
      style={{
        width: "60px",
        height: "60px",
        border: "2px solid yellow",
        borderRadius: "80%",
        background: "rgba(255, 140, 255, 0.2)", // 
        color: "green", 
        boxShadow: "0 0 20px 5px rgba(255, 235, 59, 0.6), 0 0 24px 10px rgba(76, 175, 120, 0.6)", 
        // backdropFilter: "blur(10px)", 
        transform: "translate(-50%, -50%)",
        transition: "transform 0.3s",
        left: cursorStyle.left,
        top: cursorStyle.top,
      }}
    />
  );
}
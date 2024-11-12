"use client";

import React, { useState, useEffect } from "react";

const HomeHeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const updateCursorPosition = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-blue-200 mx-auto px-4 relative">
     
      <div
      className="w-[50px] h-[50px] shrink-0 bg-gradient-to-r from-[#6F2D8D] to-[#BA42C0] blur-[25px] rounded-[50px] pointer-events-none shadow-[10px_0_50px_20px_rgba(186,66,192,0.6)]"
      style={{
        position: 'absolute',
        left: cursorPosition.x - 25,
        top: cursorPosition.y - 25,
        transform: 'translate(-50%, -50%)',
      }}
      ></div>

      
      <div className="text-center">
        <h1 className="text-[#272C30] font-bold leading-[142.113%] lg:text-8xl md:text-8xl sm:text-5xl">
          TOGETHER!
        </h1>
        <p className="text-[#272C30] font-normal leading-[142.113%] font-2x1 md:text-base sm:text-xs mx-2 mt-3">
          To sustain a better future
          <br /> Creating endless opportunities for future generations!
        </p>
        <button className="mt-10 inline-flex flex-col justify-center items-center gap-2.5 bg-[rgba(228,235,255,0.50)] sm:px-5 sm:py-1 md:text-xs rounded-[20px] border-2 border-solid border-[#AD2CE8]">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomeHeroSection;

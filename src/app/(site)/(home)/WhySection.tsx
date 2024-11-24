'use client';

import React, { useState } from 'react';

interface NavPanelProps {
  title: string;
  subtitle?: string;
  bgClass: string;
  svgPattern: string;
  customFill?: string;
}

const NavPanel: React.FC<NavPanelProps> = ({
  title,
  subtitle,
  bgClass,
  svgPattern,
  customFill,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-64 md:h-96 w-full transition-all duration-500 hover:opacity-90 cursor-pointer overflow-hidden ${bgClass}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 overflow-visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 640" // Increased height value for cards 2, 3, and 4
          className="absolute w-full h-full"
          style={{ transform: 'translateY(20%)' }} // Adjust downward positioning for cards 2, 3, and 4
        >
          <path d={svgPattern} fill={customFill || "url(#gradient)"} fillOpacity="0.5" />
          {!customFill && (
            <defs>
              <linearGradient id="gradient" x1="178.5" y1="0" x2="178.5" y2="634" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7209B7" />
                <stop offset="1" stopColor="#BA42C0" />
              </linearGradient>
            </defs>
          )}
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500"></div>

      {/* Title, Subtitle, and WHY */}
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-white text-center space-y-2 relative z-10">
        <div className={`text-lg md:text-xl font-light transition-opacity duration-[1500ms] ${hover ? 'opacity-0' : 'opacity-100'}`}>
          WHY
        </div>
        <div className={`text-2xl md:text-4xl font-bold transition-opacity duration-[1500ms] ${hover ? 'opacity-0' : 'opacity-100'}`}>
          {title}
        </div>
        {subtitle && (
          <div className={`text-2xl md:text-4xl font-bold transition-opacity duration-[1500ms] ${hover ? 'opacity-0' : 'opacity-100'}`}>
            {subtitle}
          </div>
        )}
      </div>

      {/* Hover Content */}
      {hover && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center transition-transform duration-[1500ms] transform translate-y-8 hover:translate-y-0">
          <p className="text-sm md:text-lg text-white mt-4">
            {title === "HUMAN RIGHTS"
              ? "Human rights are universal and empower individuals. Awareness of their importance leads to united communities."
              : title === "SDGs?"
                ? "Achieving SDGs by 2030 brings transformative change by ending poverty and addressing climate change."
                : title === "YOUTH?"
                  ? "Youth are key change makers, with the potential to lead, innovate, and rebuild society."
                  : "Join us in driving impactful change by mobilizing and accelerating communities!"}
          </p>
        </div>
      )}

      {/* Arrow */}
      <div className="absolute bottom-8 text-white z-0">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
};

const WhySection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <NavPanel
        title="HUMAN RIGHTS"
        subtitle="EDUCATION?"
        bgClass="bg-gradient-to-br from-purple-600 to-cyan-500"
        svgPattern="M247.404 149.9734C138.945 37.7003 -69.3394 53.7799 -159.924 75.8538C-257.602 188.046 -416.238 420.327 -269.356 451.919C-85.7542 491.409 247.404 736.247 295.433 687.644C343.461 639.041 658.381 390.558 684.523 290.314C710.665 190.07 382.978 290.315 247.404 149.9734Z"
      />

      <NavPanel
        title="SDGs?"
        bgClass="bg-gradient-to-br from-cyan-400 to-blue-400"
        svgPattern="M283.107 26.477C-130.829 139.907 -110.19 411.635 -48.128 533.32C101.273 545.215 399.092 548.799 395.162 467.979C390.248 366.954 800.526 -115.311 283.107 26.477Z"
        customFill="#4895EF66"
      />

      <NavPanel
        title="YOUTH?"
        bgClass="bg-[#03449E]"
        svgPattern="M450 400 C300 400, 100 300, -50 0 L-50 450 L450 450 Z" // Modified SVG path
        customFill="#0353A4"
      />

      <NavPanel
        title="BECOME A"
        subtitle="VOLUNTEER"
        bgClass="bg-gradient-to-br from-purple-700 to-purple-900"
        svgPattern="M0.560303 182.045C-301.852 209.742 -348.996 471.378 -334.766 598.735L791.237 723C822.584 216.254 849.27 -718.229 705.24 -402.187C525.203 -7.13513 378.576 147.424 0.560303 182.045Z"
        customFill="#3C096CB2"
      />
    </section>
  );
};

export default WhySection;






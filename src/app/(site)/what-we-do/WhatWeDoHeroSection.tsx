import React from 'react';
import Image from "next/image";
import heroImage from '../../images/Hero-section/hero.png';
import backgroundImage from '../../images/Hero-section/background.png';



const WhatWeDoHeroSection = () => {
  return (
    <section className="relative bg-gray-500 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
    
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-[-1]" // Push the background behind other elements
      />

      
      <div className="absolute top-10 md:top-0 left-0 lg:ml-14 w-full md:w-auto flex justify-center md:block">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[55rem] max-w-full h-auto lg:object-bottom"
          data-aos="fade-in"
        />
      </div>

     
      <div
        className="absolute bottom-5 w-full px-6 lg:w-auto lg:mr-28 text-white text-center md:text-right"
        data-aos="fade-left"
      >
        <p className="font-poppins text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[3rem] font-light text-[#F6FEFF]">
          WHAT <span className="font-semibold text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem]">WE DO</span>
        </p>
        <p className="font-poppins text-white text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] max-w-[30rem] mx-auto md:mx-0">
          More than just an organization, The Road to Rights is a social innovation organization built on the power of collective action. We work tirelessly to ensure a world where human rights, climate action, and the SDGs become a reality, empowered by the energy of young minds!
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoHeroSection;
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
        className="absolute top-0 left-0 w-full h-full"
      />

      
      <div className="absolute mb-22 left-0 lg:ml-14 lg:pt-5 w-full md:w-auto flex justify-center md:block">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[55rem] max-w-full h-auto object-bottom"
          data-aos="fade-in"
        />
      </div>

      

      <div
        className="absolute bottom-16 right-5 lg:right-26 text-white p-4 sm:p-6 lg:p-12 text-center md:text-right"
        data-aos="fade-left"
      >
        <p className="font-poppins text-[1.8rem] md:text-[2rem] lg:text-[3rem] font-light text-[#F6FEFF]">
          WHAT{" "}
          <span className="font-semibold text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[4.5 rem]">
            WE DO
          </span>
        </p>
        <p className="font-poppins text-white text-[0.9rem] sm:text-[1rem] md:text-[0.9rem] max-w-[22rem] mx-auto md:mx-0 text-left">
          More than just an organization, The Road to Rights is a social
          innovation organization built on the power of collective action. We
          work tirelessly to ensure a world where human rights, climate action,
          and the SDGs become a reality, empowered by the energy of young
          minds!
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoHeroSection;
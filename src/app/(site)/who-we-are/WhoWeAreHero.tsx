import React from 'react';
import heroImg from '../../images/who-we-are-hero-section/hero-img.png';
import bgImg from '../../images/who-we-are-hero-section/background.png';

const WhoWeAreHero = () => {
  return (
    <section className="relative bg-gray-500 h-screen flex items-center justify-center overflow-hidden">
      <img src={bgImg.src} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 lg:ml-14 lg:pt-5">
        <img src={heroImg.src} alt="Hero Image" className="w-[50%] lg:w-[50rem] sm:w-full sm:h-full lg:object-bottom" data-aos="fade-in" />
      </div>
      <div className="absolute right-0 lg:mr-28 text-white p-4 lg:p-0" data-aos="fade-left">
        <p className="font-poppins text-[2rem]   font-light text-[#F6FEFF]">
          WHO <span className="font-semibold text-[3rem] sm:text-[4rem] ">WE ARE</span>
        </p>
        <p className="font-poppins text-white text-[0.8rem] sm:text-[0.9rem] lg:text-[1.1rem] max-w-[32.75rem]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
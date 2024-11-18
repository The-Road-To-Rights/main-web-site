"use client";

import React from "react";
import slYouthImg from "../../images/home-partners-section/sl-youth.png";
import aiesecImg from "../../images/home-partners-section/aiesec.png";
import belougaImg from "../../images/home-partners-section/belouga.png";
import worldLargestLessonImg from "../../images/home-partners-section/world-largest-lesson.png";
import presidentSecImg from "../../images/home-partners-section/president-secr.png";


const HomePartnersSection: React.FC = () => {
  const images = [
    slYouthImg.src,
    presidentSecImg.src,
    worldLargestLessonImg.src,
    belougaImg.src,
    aiesecImg.src,
  ];

  const clonedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <section className="py-8 bg-blue-50" >
      {/* Title Section */}
      <div className="flex justify-center mb-1" data-aos="fade-up">
        <div className="p-4 text-start">
          <p className="text-2xl font-semibold text-black tracking-widest font-poppins">
            OUR
          </p>
          <p className="text-5xl font-bold text-black tracking-wide font-poppins">
            PARTNERS
          </p>
        </div>
      </div>

      {/* Marquee Section associated with tailwind.config.ts */}
      <div className="relative overflow-x-hidden w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" data-aos="fade-left">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {clonedImages.map((image, index) => (
            <div
              key={index}
              className="mx-8 inline-block rounded-3xl shadow-lg bg-white min-w-60 min-h-36"
            >
              <img
                src={image}
                alt={`Partner Logo ${index}`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePartnersSection;

import React from "react";
import { Tweet } from "react-tweet";
import layereImg from "../../images/newsletter-section/dsigned layer.png";

const HomeNewsLetterSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-center bg-blue-50 py-8 lg:py-16 px-4 lg:px-8 pb-24">
      {/* Tweet Section */}
      <div className="light w-full lg:w-96 bg-white shadow-lg rounded-[30px] overflow-hidden mx-auto lg:mx-0 mb-8 lg:mb-0 p-5 lg:py-0 sm:py-0 relative ">
        <Tweet id="1854537712914596018"  />
      </div>

      {/* Newsletter Form Section */}
      <div
        className="relative bg-[#6F2D8D] text-white w-full lg:w-[35rem] p-6 lg:p-16 rounded-[30px] lg:rounded-l-none flex flex-col justify-center mx-auto lg:mx-0 overflow-hidden"
        style={{ marginTop: '5.25rem', marginBottom: '-6.12rem' }} 
      >
        {/* Layer Image with Zoom */}
        <div className="absolute inset-0 transform scale-[1.35] opacity-[0.06] pl-[5rem] pointer-events-none rounded">
          <img src={layereImg.src} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content Over Image */}
        <div className="relative z-10">
          <p className="text-center lg:text-left font-poppins tracking-wider mb-2">
            <span className="text-4xl lg:text-5xl font-bold">SUBSCRIBE </span>
            <span className="text-xl lg:text-2xl">to our</span>
          </p>
          <p className="text-4xl lg:text-5xl font-bold tracking-wider text-center lg:text-left font-poppins pl-5 mb-2">
            NEWSLETTER
          </p>
          <p className="text-center lg:text-left font-poppins mb-3 text-base lg:text-lg">
            Be the first to get exclusive offers<br />and the latest news
          </p>

          {/* Form Fields */}
          <form className="space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start">
            <input
              type="text"
              placeholder="First name"
              className="bg-transparent border border-gray-400 rounded w-full lg:w-[25.0625rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:font-poppins text-sm lg:text-base"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-transparent border border-gray-400 rounded w-full lg:w-[25.0625rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:font-poppins text-sm lg:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-400 rounded w-full lg:w-[25.0625rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:font-poppins text-sm lg:text-base"
            />
            <button
              type="submit"
              className="w-full lg:w-[25.0625rem] bg-[#0076A1] hover:bg-blue-600 text-white rounded py-2 lg:py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsLetterSection;
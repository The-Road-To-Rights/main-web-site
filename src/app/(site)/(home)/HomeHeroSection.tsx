const HomeHeroSection = () => {
  return <div className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-blue-200 mx-auto px-4">
    <div className="text-center">
      <h1 className="text-[#272C30] font-bold leading-[142.113%] lg:text-8xl md:text-8xl sm:text-5xl">
        TOGETHER!
      </h1>
      <p className="text-[#272C30] font-normal leading-[142.113%] font-2x1 md:text-base sm:text-xs mx-2 mt-3">
        To sustain a better future<br /> Creating endless opportunities for future generations!
      </p>
      <button className="mt-10 inline-flex flex-col justify-center items-center gap-2.5 [background:rgba(228,235,255,0.50)] sm:px-5 sm:py-1 md:text-xs rounded-[20px] border-2 border-solid border-[#AD2CE8]">
        Explore More
      </button>
    </div>
  </div>;
};

export default HomeHeroSection;
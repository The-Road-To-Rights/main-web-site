



import Image from "next/image";
import imageOne from '../../images/history-section/a.png';
import imageTwo from '../../images/history-section/b.png';
import imageThree from '../../images/history-section/c.png';

const HomeHistorySection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-purple-200 via-purple-100 flex flex-col md:flex-row p-4 md:p-0">

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full max-w-[700px] h-[400px] md:h-[800px] flex flex-col items-center">

          {/* Image Two */}
          <div className="absolute top-[110px] left-[220px] transform -translate-x-1/2 md:top-[110px] md:left-[220px] md:rotate-0 shadow-lg">
            <Image
              src={imageTwo}
              alt='Image Two'
              className="rounded-[15px] opacity-100"
              width={400}
              height={550}
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Image Three - Bottom-most image */}
          <div className="absolute top-[225px] left-[40px] transform -translate-x-1/2 md:top-[225px] md:left-[40px] shadow-lg">
            <Image
              src={imageThree}
              alt='Image Three'
              className="rounded-tl-[15px] opacity-100"
              width={300}
              height={700}
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Image One */}
          <div className="absolutetop-[365px] left-[240px] transform -translate-x-1/2 md:top-[365px] md:left-[240px] shadow-lg">
            <Image
              src={imageOne}
              alt='Image One'
              className="rounded-[15px] opacity-100"
              width={550}
              height={600}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 md:pl-14 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-black font-poppins pb-6 md:pb-20">HISTORY</h1>
        <p className="text-black text-base md:text-xl text-justify mb-4 md:mb-6 pr-2 md:pr-6 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <a href="#" className="text-purple-900 font-semibold flex items-center mt-4 hover:underline focus:underline transition-all duration-300 transform hover:-translate-y-1 pt-8">
          <span>Take me there</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path fill="#4B0082" fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

    </div>
  );
};

export default HomeHistorySection;
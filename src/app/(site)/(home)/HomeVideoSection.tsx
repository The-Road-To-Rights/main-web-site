import Image from "next/image";
import r2rImage from "../../images/video-section/background.jpg";

const HomeVideoSection = () => {
  return (
    <div className="relative w-full h-80">
      <Image
        src={r2rImage}
        alt='no image'
        layout="fill"
        objectFit="cover"
        className='opacity-40'
      />

      <div className='absolute inset-0 flex items-center justify-center z-10 columns-2 p-10 gap-20 '>

        <p className='text-[#6F2D8D] text-2xl lg:text-4xl md:text-3xl text-right font-poppins font-bold text-shadow-custom leading-8'>
          WE <span className='text-black font-normal'>RECEIVED THE</span> UNITED<br />
          NATIONS <span className='text-black font-normal'> SDG </span> ACTION<br />
          AWARDS <span className='text-black font-normal'>IN </span> 2018
        </p>

        <iframe
          className="h-80 hover:aspect-square w-2/4"
          src="https://www.youtube.com/embed/GkZgdGhLhwM"
          title="UN SDG Action Award 2018 - UN Global Festival of Action, Bonn, Germany."
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>





    </div>
  );
};

export default HomeVideoSection;

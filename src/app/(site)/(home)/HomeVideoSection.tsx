import Image from 'next/image';
import r2rImage from '../../images/video-section/background.jpg';

const HomeVideoSection = () => {
  return (
    <div className='relative w-full h-96'>
      <Image
        src={r2rImage}

        alt='no image'
        layout="fill"
        objectFit="cover"
        className='opacity-35  '
      />
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <p className='text-[#6F2D8D] text-4xl text-right font-poppins'>WE <span className='text-black'>RECEIVED THE</span> UNITED NATIONS <span className='text-black'> SDG </span> ACTION AWARDS <span className='text-black'>IN </span> 2018</p>
      </div>

      {/* <div>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/ZanucI2pjUg" title="Day 320 : මලින්ද අය්යගෙ අලුත් ගෙදරට ගියා" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div> */}

    </div>


  );
};

export default HomeVideoSection;




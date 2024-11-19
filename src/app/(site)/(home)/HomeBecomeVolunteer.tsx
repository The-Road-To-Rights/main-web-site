import backGroundImg from '../../images/Become-Volunteer section/JoinUs.svg';
import Image from 'next/image';
import React from 'react';

const HomeBecomeVolunteer = () => {
  return (
    <div className='relative w-full h-full bg-[#e4ebff]'>
      <Image
        src={backGroundImg}
        alt='no image'
        objectFit='cover'
      />

      <div className='absolute z-10 top-[50%] left-[6%]'>
        <h1 className='text-white font-poppins text-left'><span className='lg:text-5xl md:text-4xl text-2xl'>Become a</span><br />
          <span className='font-bold tracking-wide lg:text-7xl md:text-6xl text-3xl'>Volunteer</span></h1>
      </div>

      <div className='absolute z-10 top-[65%] left-[6%] lg:mt-7 md:mt-10 mt-6 flex items-center justify-center'>
        <p className='text-left text-white font-poppins lg:text-[15px] md:text-[11px] text-[9px] leading-relaxed'>their books and go through them in earnest. This was the primary reason that inspired our founder<br />
          to start the United Children’s Club with them as members of the initiative. their books and go <br />
          through them in earnest. This was the primary reason that inspired our founder to start the United <br />
          Children’s Club with them as members of the initiative.</p>
      </div>
      
      <div className='absolute z-10 top-[80%] left-[6%] lg:mt-8 md:mt-11 mt-9'>
        <button className="lg:px-8 lg:py-3 md:px-5 md:py-2 px-4 py-2 bg-[#151513] text-white font-poppins font-semibold 
                          rounded-lg shadow-lg hover:bg-[#2a2a27] transition-colors lg:text-[20px] md:text-[14px] text-[10px] ">
          Join Us
        </button>
      </div>
    </div>

  );
}

export default HomeBecomeVolunteer;
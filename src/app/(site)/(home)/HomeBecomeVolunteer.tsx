import Image from 'next/image';
import React from 'react';
import picture from '../../images/Become-Volunteer section/join-img 1.png';

const HomeBecomeVolunteer = () => {
    return (
        <div className='absolute  w-full lg:h-37 md:h-96 h-72 bg-[#e4ebff]'>
            <div className='w-full h-full bg-[#6f2d8d] '
                style={{
                    clipPath: 'polygon(0 30%, 75% 45%, 97% 100%, 0 100%)',
                }}
            >
            </div>

            <div className='justify-'></div>

            
            <div className='absolute rounded-full z-10 overflow-hidden bg-[#09132e] opacity-30
                            lg:top-[18%] lg:left-[64%] md:top-[14.5%] md:left-[63.5%] left-[62.5%] top-[13%]
                            lg:w-[27rem] lg:h-[27rem] md:w-[18.5rem] md:h-[18.5rem] w-[13.5rem] h-[13.5rem]'>
            </div>
            <div className='absolute rounded-full z-10 overflow-hidden bg-[#09132e] opacity-20
                            lg:top-[22%] lg:left-[65.5%] md:top-[18.5%] md:left-[65.5%] left-[65.2%] top-[18%]
                            lg:w-[24rem] lg:h-[24rem] md:w-[16.5rem] md:h-[16.5rem] w-[11.5rem] h-[11.5rem]'>
            </div>
            <div className='absolute rounded-full z-10 overflow-hidden 
                            lg:top-[24.7%] top-[22%] left-[66.7%]
                            lg:w-22 lg:h-22 md:w-60 md:h-60 w-40 h-40'>
                <Image
                    src={picture}
                    alt='no picture'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    );
};

export default HomeBecomeVolunteer;




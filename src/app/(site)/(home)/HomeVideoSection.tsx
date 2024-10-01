import Image from 'next/image';
import r2rImage from '../../images/video-section/r2r.jpg';

const HomeVideoSection = () => {
  return (
    <div className='relative h-screen w-full '>
      <Image
        src={r2rImage}
        width={1920}
        height={542}
        alt='no image'
        className='opacity-35'
      />
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <h1 className="text-black text-4xl">Your Text Here</h1>
      </div>
    </div>


  );
};

export default HomeVideoSection;




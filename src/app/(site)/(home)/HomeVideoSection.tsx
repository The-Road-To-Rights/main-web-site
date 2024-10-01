import Image from 'next/image';
import img from './r2r.jpg';


const HomeVideoSection = () => {
  return (
    <div className="h-72 bg-transparent bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-2">

        <div className="p-4 bg-blue-100">
          <p className='text-lg font-medium text-align:left p-20'>WE RECEIVED THE UNITED NATIONS SDG ACTION AWARDS IN 2018</p>
        </div>
        <div className="p-4 bg-blue-200">
          <iframe src="https://www.youtube.com/watch?v=nIk2gzsKAtg&t=1s" frameBorder="10" className='h-64 w-72'></iframe>
        </div>
      </div>

      <div>
        <img src="./r2r.jpg" alt="" />
      </div>
      
    </div>

  );
};

export default HomeVideoSection;

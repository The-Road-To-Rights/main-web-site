import Image from "next/image";
import PillarOne from '../../images/four-core-pilars/Asset 1.svg';
import PillarTwo from '../../images/four-core-pilars/Asset 2.svg';
import PillarThree from '../../images/four-core-pilars/Asset 3.svg';
import PillarFour from '../../images/four-core-pilars/Asset 4.svg';
import Stroke from '../../images/four-core-pilars/Stroke.svg';


const FourCorePilars = () => {
    return (
        <>
            <div className="relative w-full min-h-screen bg-[#F6FEFF] ">

                <div className=" flex flex-col items-center">
                    <h1 className="font-poppins text-4xl mt-10">
                        FOUR CORE
                        <span className="text-6xl text-[#6F2D8D] font-bold"> PILLARS </span>
                    </h1>
                    <Image
                        src={Stroke}
                        alt='stroke'
                        className="w-80 h-10 "
                    />
                    <div className="text-center items-center mt-5 w-2/3">
                        <span >These four pillars are not separate entities, but rather interconnected strands that weave together the vision of The Road to Rights. By cultivating humanity, working towards shared goals, empowering youth, and fostering collaboration, we can create a world where everyone thrives.</span>
                    </div>
                </div>

                <div className="flex items-center ml-[90px] columns-2 gap-5 mt-20">
                    <div className="w-[250px] text-left" data-aos="fade-right">
                        <h1 className="font-bold text-2xl mb-4">
                            Cultivating Humanity
                        </h1>
                        <span className="">
                        This pillar goes beyond simply understanding human rights. We believe in fostering a values-based education that emphasizes critical thinking, empathy, respect for human rights, and environmental stewardship. By integrating these values into education.
                        </span>
                    </div>

                    <Image
                        src={PillarOne}
                        alt='stroke'
                        className="w-[650px]"
                        data-aos="fade-left"
                    />
                </div>

                <div className="flex items-center ml-[350px] columns-2 gap-5 mt-10">
                    <Image
                        src={PillarTwo}
                        alt='stroke'
                        className="w-[650px]"
                        data-aos="fade-right"
                    />
                    <div className="w-[250px] text-left" data-aos="fade-left">
                        <h1 className="font-bold text-2xl mb-4">
                            Sustainable Peace & Development
                        </h1>
                        <span className="">
                            This pillar goes beyond simply understanding human rights. We believe in fostering a values-based education that emphasizes critical thinking, empathy, respect for human rights, and environmental stewardship. By integrating these values into education.
                        </span>
                    </div>      
                </div>

                <div className="flex items-center ml-[90px] columns-2 gap-5 mt-20">
                    <div className="w-[250px] text-left" data-aos="fade-right">
                        <h1 className="font-bold text-2xl mb-4">
                            Transformative Youth Leadership</h1>
                        <span className="">
                            This pillar goes beyond simply understanding human rights. We believe in fostering a values-based education that emphasizes critical thinking, empathy, respect for human rights, and environmental stewardship. By integrating these values into education.
                        </span>
                    </div>

                    <Image
                        src={PillarThree}
                        alt='stroke'
                        className="w-[650px]"
                        data-aos="fade-left"
                    />
                </div>

                <div className="flex items-center ml-[350px] columns-2 gap-5 mt-10 ">
                    <Image
                        src={PillarFour}
                        alt='stroke'
                        className="w-[650px]"
                        data-aos="fade-right"
                    />
                    <div className="w-[250px] text-left" data-aos="fade-left" mb-20>
                        <h1 className="font-bold text-2xl mb-4">
                            Collaboration for Lasting Change</h1>
                        <span className="">
                            This pillar goes beyond simply understanding human rights. We believe in fostering a values-based education that emphasizes critical thinking, empathy, respect for human rights, and environmental stewardship. By integrating these values into education.
                        </span>
                    </div>      
                </div>

            </div>




        </>
    );


}

export default FourCorePilars;
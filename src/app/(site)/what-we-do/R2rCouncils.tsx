import Image from "next/image";
import stroke from "../../images/r2r-councils/Vector 204 (Stroke).svg"
import vision from "../../images/r2r-councils/vission.svg"
import mission from "../../images/r2r-councils/mission.svg"

const R2rCouncils = () => {
    return (
        <div className=" [background:var(--bg-gradient,radial-gradient(121.04%_57.38%_at_50%_50%,#363B44_0%,#181A1E_100%))]">

            <div className="max-w-6xl mx-auto mb-8 pb-20">
                <div className="text-center leading-normal pt-14 ">
                    <h1 className="text-[color:var(--azure-off-white-variant,#F6FEFF)] text-4xl font-poppins">R2R  <span className="font-poppins text-[color:var(--azure-off-white-variant,#F6FEFF)] text-[50px] font-bold">COUNCILS</span></h1>
                </div>

                <Image
                    src={stroke}
                    alt="R2R Councils"
                    className="w-80 ml-[415px] mt-3 mx-auto"
                />
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 pt-12 pb-36">

                <div className="absolute top-[210px] left-[243px]">
                    <Image
                        src={vision}
                        alt="R2R Councils"
                        className="w-[450px] "
                    />
                </div>



                <div className=" static justify-center items-center [background:radial-gradient(104.43%_69%_at_50%_50%,#7F7988_0%,#676669_100%)]  rounded-[30px_0px_0px_30px]">

                    <div className="  text-lg text-white font-poppins  leading-normal font-light pl-16 pr-7 pt-36 pb-20">
                        <p className="py-5">
                            The Human Rights Council is a division of Road to Rights dedicated
                            exclusively to promoting human rights values and responsibilities. Our
                            team comprises subject matter experts, aspiring lawyers, and researchers
                            who possess extensive knowledge in this field. Together, we work to
                            advocate for and uphold human rights principles.
                        </p>
                    </div>
                </div>


                <div className="inline-flex justify-end items-center [background:radial-gradient(125.86%_70.78%_at_50%_50%,#35AE59_0%,#009454_100%)]  rounded-[0px_30px_30px_0px]">
                    <div className=" text-white font-poppins text-lg font-light leading-normal pl-16 pr-7 mb-28">
                        <p className="">
                            The Climate Council is dedicated to addressing climate change,
                            biodiversity, ocean conservation, and responsible consumption. Led by
                            subject matter experts, we conduct research and organize educational
                            camps to enhance the knowledge of youth, children, and the wider public.
                            Our initiatives and activities aim to foster greater awareness and
                            action on these critical issues.
                        </p>
                    </div>
                </div>

                <div className="absolute right-[240px] top-[620px]">
                    <Image
                        src={mission}
                        alt="R2R Councils"
                        className="w-[450px] "
                    />
                </div>

            </div>

        </div>
    );
};

export default R2rCouncils;


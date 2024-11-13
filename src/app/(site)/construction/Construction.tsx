import Image from "next/image";
import sideImg from '../../images/construction-page/side-img.jpeg';
import logo from '../../images/construction-page/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faSquareTwitter,faSquareInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Construction() {
    return (
        <div className="bg-white shadow-lg overflow-hidden flex flex-col lg:flex-row h-screen">

            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-md w-full">

                    <div className="flex w-full object-left-top mb-10 -mt-10">
                        <Image
                            src={logo}
                            alt="Road to Rights Logo"
                            width={200}

                        />
                    </div>


                    <div className="text-left">
                        <h2 className=" text-[40px] font-poppins font-extrabold text-ellipsis text-left text-[#333]">
                            Under<br />Construction
                        </h2>
                        <p className="w-[511px] h-[97px] shrink-0 text-[color:var(--Gray-3,#828282)] font-poppins pr-10 text-base mt-5 font-normal leading-[normal] tracking-[0.2px]">
                            Our team is working on the issue. You can subscribe to our mailing list so you can be notified when things are livelier.
                        </p>
                    </div>


                    <div className="-mt-5">
                        <input
                            className="w-[375px] h-[50px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            type="email"
                            placeholder="Email"
                        />
                        <button className="mt-4 w-[375px] h-[50px] bg-[#0076A1] text-white px-4 py-2 rounded-md hover:bg-black">
                            Subscribe
                        </button>
                    </div>

                    <div className="mt-10">
                        <h2>You can also follow us on</h2>
                    </div>
                    <div className="relative bottom-5 left-40 ml-10">
                        <ul className="flex space-x-4">
                            <li className="w-5 h-5"><FontAwesomeIcon icon={faFacebook} /></li>
                            <li className="w-5 h-5"><FontAwesomeIcon icon={faSquareTwitter} /></li>
                            <li className="w-5 h-5"><FontAwesomeIcon icon={faSquareInstagram} /></li>
                            <li className="w-5 h-5"><FontAwesomeIcon icon={faLinkedin} /></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex-1 hidden lg:block">
                <Image
                    className="object-cover h-full w-full"
                    src={sideImg}
                    alt="Team Image"
                />
            </div>
        </div>
    );
}
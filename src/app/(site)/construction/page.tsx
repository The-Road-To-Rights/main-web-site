import Image from "next/image";
import sideImg from '../../images/construction-page/side-img.jpeg';
import logo from '../../images/construction-page/logo.png';

export default function Construction() {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row h-screen">

            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-md w-full">

                    <div className="flex justify-center mb-8">
                        <Image
                            src={logo}
                            alt="Road to Rights Logo"
                            width={220}
                            height={75}
                        />
                    </div>


                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            Under Construction
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Our team is working on the issue. You can subscribe to our mailing list so you can be notified when things are livelier.
                        </p>
                    </div>


                    <div className="mt-8">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Subscribe
                        </button>
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
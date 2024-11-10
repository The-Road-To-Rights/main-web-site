import React from "react"
import Image from "next/image";
import bg1 from "../../images/project-section/01.jpg"
import bg2 from "../../images/project-section/02.jpg"
import bg3 from "../../images/project-section/03.jpg"
import bg4 from "../../images/project-section/04.jpg"



const HomeProjectSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-200 to-blue-200 px-4">
      <div className="flex items-start justify-start w-full lg:w-2/3 bg-gradient-to-b from-purple-200 to-blue-200 px-4">
        <div className="text-left pl-8 pt-8">
        <span className="font-medium text-2xl lg:text-4xl">OUR</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">PROJECTS</h1>

          
          <div className="flex flex-wrap justify-between gap-6">
            

          <div className="card mb-3 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden">
         <div className="flex">
         <div className="w-20 h-30"> {/* Set the height of the image */}
             <Image
             src={bg1}
             className="object-cover rounded-lg w-full h-full"  
             alt="Project background"
             layout="intrinsic" 
              />
       </div>
              <div className="w-2/3 p-4">
            <h5 className="text-xl font-semibold mb-2 text-gray-800">NEW SERVICES</h5>
                  <p className="text-gray-700 text-base">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                  </p>
                  
                   <button className="mt-4 px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    View All News
                  </button>
                </div>
              </div>
            </div>

            <div className="card mb-3 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <Image src={bg2} className="object-cover rounded-lg" alt="Project background" layout="responsive" />
                </div>

                
                <div className="w-2/3 p-4">
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">NEW SERVICES</h5>
                  <p className="text-gray-700 text-base">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                  </p>
                  
                   <button className="mt-4 px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    View All News
                  </button>
                </div>
              </div>
            </div>

           
            <div className="card mb-3 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <Image src={bg3} className="object-cover rounded-lg" alt="Project background" layout="responsive" />
                </div>
                <div className="w-2/3 p-4">
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">NEW SERVICES</h5>
                  <p className="text-gray-700 text-base">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                  </p>
              
                   <button className="mt-4 px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    View All News
                  </button>
                </div>
              </div>
            </div>

           
            <div className="card mb-3 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <Image src={bg4} className="object-cover rounded-lg" alt="Project background" layout="responsive" />
                </div>
                <div className="w-2/3 p-4">
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">NEW SERVICES</h5>
                  <p className="text-gray-700 text-base">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
                  </p>


                  
                   <button className="mt-4 px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                    View All News
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
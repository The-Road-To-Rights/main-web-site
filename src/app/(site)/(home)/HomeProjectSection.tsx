import React from "react"
import Image from "next/image";
import bg1 from "../../images/project-section/01.jpg"
import bg2 from "../../images/project-section/02.jpg"
import bg3 from "../../images/project-section/03.jpg"
import bg4 from "../../images/project-section/04.jpg"



const HomeProjectSection = () => {
  const projects = [
    { id: 1, imageSrc: bg1, title: 'New Services', description: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.' },
    { id: 2, imageSrc: bg2, title: 'New Services', description: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.' },
    { id: 3, imageSrc: bg3, title: 'New Services', description: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.' },
    { id: 4, imageSrc: bg4, title: 'New Services', description: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.' },
  ];

  return (
    <section className="bg-[#EAF1FF] py-12">
      <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="font-medium text-2xl lg:text-4xl">OUR </span>PROJECTS
        </h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  mx-4 lg:mx-8 max-w-[90%] sm:max-w-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex transform transition duration-300 hover:scale-105 hover:shadow-2xl w-[500px] mx-auto"
            >

              <div className="w-1/2  h-50 sm:h-60">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-1/2">
                <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{project.description}</p>


                <button className="w-[100px] h-[25px] mt-9 px-4 py-2 text-[10px] text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 flex items-center justify-center">
                  View All News
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProjectSection;
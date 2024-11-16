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
        <div className="text-left pl-5 pt-5">
          <span className="font-medium text-2xl lg:text-4xl">OUR</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">PROJECTS</h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              
              <div className="w-1/2">
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
                <a
                  href="#"
                  className="mt-4 px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                >
                  View All News
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProjectSection;
import React from 'react';
<<<<<<< HEAD

// News Item component
=======
// News Item component 
>>>>>>> 5493985a8c347ef9811d02d9b91fa9e0f2c520f5
const NewsItem = ({ title, content }) => (
  <div className="bg-white border-0 rounded-2xl shadow-md p-6 mb-4 hover:scale-105 hover:shadow-lg transition-transform duration-300 hover:border-purple-500 hover:border-2">
  <h3 className="text-purple-700 font-normal mb-2">{title}</h3>
  <p className="text-{#151513} font-Poppins mb-4">{content}</p>
  <a href="#" className="text-blue-500 flex items-center justify-end">
    <span className='sr-only'>Read more</span>
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 32L32 24M32 24L24 16M32 24H16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#0076A1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/> 
    </svg>
  </a>
</div>
);

// NEWS AND UPDATES component
const NewsAndUpdates = () => {
  return (
    <div className="bg-blue-50 p-8 lg:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/3 flex flex-col justify-center text-left">
          <div>
            <h2 
              className="text-black text-4xl lg:text-6xl font-bold leading-tight tracking-tighter"
              style={{ textShadow: '-2px 4px 4px rgba(0, 0, 0, 0.36)' }}
            >
              NEWS <span className="font-medium text-2xl lg:text-4xl">AND</span> UPDATES
            </h2>
            <p className="text-gray-900 text-lg mt-10 mb-8 lg:mb-32"> 
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>

          {/* View All News button */}
          <a href="#" className="text-purple-700 text-center text-xl lg:text-2xl font-semibold flex items-center -mt-18 hover:underline focus:underline transition-all duration-300 transform hover:-translate-y-1">
            <span>View All News</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
              <path fill="#6B21A8" fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>

        {/* News Items */}
        <div className="News Items">
          <NewsItem
            title="Latest"
            content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />

          <NewsItem
            title="Latest"
            content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />

          <NewsItem
            title="Latest"
            content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        </div>
      </div>
    </div>
  );
}

export default NewsAndUpdates;
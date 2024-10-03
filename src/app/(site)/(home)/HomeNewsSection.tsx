import React from 'react';


// News Item component
const NewsItem = ({ title , content }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-purple-600 font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{content}</p>
    <a href="#" className="text-blue-500 flex items-center justify-end">
      <span className="sr-only">Read more</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </a>
  </div>
);


// NEWS AND UPDATES component
const NewsAndUpdates = () => {
  return (
    <div className="bg-blue-50 p-16">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="w-full max-w-md flex flex-col justify-center text-left">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800">NEWS <span className="text-gray-600 font-bold">AND</span> UPDATES</h2>
            <p className="text-gray-600 text-lg mt-4">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          
          
          {/* View All News Button */}
          <a href="#" className="text-purple-600 font-semibold flex items-center mt-6">
            <span>View All News</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        
        {/* News Items */}
        <div className="ml-8 w-full max-w-lg flex flex-col space-y-4">
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
};

export default NewsAndUpdates;
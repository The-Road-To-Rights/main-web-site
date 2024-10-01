const HomeNewsSection = () => {
  return(
    <section className="flex justify-between py-10 px bg-blue-50">
      <div className="w-2/5">
        <h2 className="text-4xl font-bold">
          <span>NEWS</span> AND UPDATES
          </h2>
        <p className="mt-6 text-gray-600">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries 
        for previewing layouts and visual mockups.
        </p>
        <a href="#" className="mt-6 inline-flex items-center text-purple-600 font-semibold hover:underline">
          View All News <span className="m1-2">➔</span>
        </a>
      </div>
      
      {/* News Cards */}
      <div className="w-3/5 space-y-6">
      {/* News Card 01 */}
        <div className="flex justify-between p-6 bg-white rounded-lg shadow-md hover:border-2 hover:border-blue-500 transition-all">
          <div className="news-content">
            <span className="bloc text-purple-600 font-semibold mb-2">Latest</span>
            <p className="text-gray-700">
            Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries 
            for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="arrow text-blue-500 text-2xl self-center">➔</div>
        </div>

        {/* News Card 02 */}
        <div className="flex justify-between p-6 bg-white rounded-lg shadow-md hover:border-2 hover:border-blue-500 transition-all">
          <div className="news-content">
            <span className="block text-purple-600 font-semibold mb-2">Latest</span>
            <p className="text-gray-700">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
            for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="arrow text-blue-500 text-2xl self-center">➔</div>
        </div>

        {/* News Card 03 */}
        <div className="flex justify-between p-6 bg-white rounded-lg shadow-md hover:border-2 hover:border-blue-500 transition-all">
          <div className="news-content">
            <span className="block text-purple-600 font-semibold mb-2">Latest</span>
            <p className="text-gray-700">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries 
            for previewing layouts and visual mockups.
            </p>
          </div>
           <div className="arrow text-blue-500 text-2xl self-center">➔</div>
        </div>
      </div>
    </section>

  );
};

export default HomeNewsSection;



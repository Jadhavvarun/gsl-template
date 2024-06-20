import dashboard from "../assets/dashboard.jpg";

export default function Home() {
  return (
    <>
      {/* Section 1: Unlock Insights */}
      <div className="h-screen bg-brand-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column: Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Unlock Insights: Elevate Your URL Experience with Advanced
                Analytics
              </h2>
              <p className="text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel justo sit amet urna congue suscipit eget et lorem. Aliquam
                erat volutpat. Sed dignissim odio et purus vulputate, in
                lobortis eros ultrices. Sed nec diam id libero fringilla dictum.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={dashboard}
                alt="Dashboard"
                className="max-w-full h-auto md:h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Additional Section (Placeholder) */}
      <div className="h-[450px] bg-gradient-to-br from-blue-900 via-brand-200 via-brand-300 via-purple-600 to-indigo-900">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
      The Simplest URL Shortener You Were Waiting For
    </h2>
    <p className="text-gray-300 text-lg md:text-xl mb-6 text-center">
      Shorten your links effortlessly with our easy-to-use tool.
    </p>
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter Your Link"
        className="p-3 border border-white bg-transparent rounded-lg text-white placeholder-gray-300 focus:outline-none "
      />
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
        Generate Shortlink
      </button>
    </div>
  </div>
      </div>

      {/* Section 3: Additional Section (Placeholder) */}
      <div className="h-screen bg-white"></div>
    </>
  );
}

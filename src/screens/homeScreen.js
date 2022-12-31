import image1 from "../assets/image1.webp";

export const HomeScreen = () => {
  return (
    <div>
      <div className="bg-landing h-96 flex items-end relative">
        <div className="h-full w-full flex bg-opacity-70 absolute top-0 bottom-0 bg-gray-900 z-10" />
        <div className="flex max-w-6xl mx-auto h-auto  p-4 relative z-20 flex-col justify-end ">
          <div className="py-8">
            <p className="text-white text-6xl mb-2 font-serif text-center">
              Join The Club
            </p>
            <p className="text-gray-200 font-mono text-center text-lg">
              Join our email list and get access to special deals exclusive to our
              customers
            </p>
          </div>
          <form className="w-full block mx-auto mt-6">
            <div className="flex flex-wrap px-8 mb-6">
              <div className="w-full">
                <label
                  className="block tracking-wide text-gray-400 text-base font-bold mb-2"
                  htmlFor="email-address"
                >
                  Enter your email address here*
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-blue-500 focus:outline-none focus:border-8 focus:bg-white"
                    id="email-address"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submt"
                    className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-gray-300 flex flex-col justify-center items-center h-96 py-6">
        <div className="container w-full  bg-gray-200 p-6 rounded-md">
          <p className="text-gray-700 font-serif text-4xl text-center mb-4">
            Grow Your Vision
          </p>
          <p className="text-gray-400 w-3/5 text-center mx-auto">
            Prepared to change the way you do business? In little less than two
            years, start your quest to becoming a billionaire. There are short
            cuts, no constraints, and untold secrets to finding new meaning in
            your career as a dentist.
          </p>
        </div>

        <button className="bg-blue-500 mt-5 self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Now
        </button>
      </div>

      {/* box2 */}
      <div
        className={`bg-image1 bg-cover py-11 flex flex-col justify-end items-center h-96`}
      >
        <div className="w-full h-full bg-opacity-5 bg-gray-700 p-4">
          <p className="text-gray-100 font-serif text-4xl text-center mb-4">
            Our Sample
          </p>
          <p className="text-gray-400 w-3/5 text-center mx-auto text-lg">
            Prepared to change the way you do business? In little less than two
            years, start your quest to becoming a billionaire. There are short
            cuts, no constraints, and untold secrets to finding new meaning in
            your career as a dentist.
          </p>
        </div>

        <button className="bg-blue-500 mt-5 self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Now
        </button>
      </div>



      {/* box3 */}
      <div
        className={`bg-meetings bg-fixed bg-opacity-5  bg-cover flex flex-col items-center h-96 py-11 relative`}
      >
        <div className="h-full w-full  bg-opacity-60 bg-gray-900 z-10 bottom-0 absolute" />
        <div className="w-full h-full bg-opacity-5 p-6 py-11 absolute z-20 top-8 left-0">
          <p className="text-gray-100 font-serif font-bold text-6xl max-w-2xl mx-auto text-center mb-4 ">
            Achieving Billionaire Dentist Status: A Master's Course
          </p>

        </div>

        <button className="bg-blue-500 mt-5 bottom-5 absolute z-20 self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>

  );
};

import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="bg-gray-800 p-4 h-200">
    <div className="container mx-auto h-200 flex items-center justify-between">
      <div>
        <p className="text-white text-center">Call Now</p>
        <p className="text-white text-center">+(2)555-66-73</p>
      </div>

      <Link to="/" className="flex-1 font-sans text-blue-400 text-2xl md:text-4xl text-center ">
        Oaklands Consultium
      </Link>


      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:hidden">Open</button>


      <div className="flex-2 justify-between gap-6 hidden lg:flex ">
        <Link to="/" className="text-white text-lg hover:text-blue-400">
          Home
        </Link>
        <Link
          to="price-and-plan"
          className="text-white text-lg hover:text-blue-400"
        >
          Plan&Prices
        </Link>
        <Link to="/more" className="text-white text-lg hover:text-blue-400">
          More
        </Link>
        <Link to="/about" className="text-white text-lg hover:text-blue-400">
          About
        </Link>
        <Link to="/login" className="text-white text-lg hover:text-blue-400">
          Login
        </Link>
      </div>
    </div>
  </div>
);

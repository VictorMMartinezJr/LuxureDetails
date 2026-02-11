import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className="relative h-[8vh] w-full px-4 flex justify-between items-center xl:px-8">
      <h2 className="md:text-lg xl:text-2xl">LuxureDetails</h2>

      {/* Mobile Nav */}
      <ul
        className={`absolute top-full text-gray-500 right-0 w-full flex flex-col items-center gap-5 py-2 md:hidden ${navActive ? "opacity-100 z-10" : "opacity-0 -z-10"} transition-opacity duration-200 ease-in-out`}
      >
        <li>Pricing</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
        <button className="text-white border px-6 py-2 rounded-md">
          Get a quote
        </button>
      </ul>

      {navActive ? (
        <IoIosClose
          className="h-8 w-8 cursor-pointer md:hidden"
          onClick={() => setNavActive(false)}
        />
      ) : (
        <IoIosMenu
          className="h-6 w-6 cursor-pointer md:hidden"
          onClick={() => setNavActive(true)}
        />
      )}

      {/* Desktop Nav */}
      <ul className="hidden md:flex justify-between items-center gap-5 text-gray-500 md:gap-10 xl:text-xl">
        <li>Pricing</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="hidden md:inline-block border px-6 py-2 rounded-md xl:text-xl">
        Get a quote
      </button>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/Asset 6.png'
const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <nav
      style={{ background: "#FF9903" , "position" : "fixed" , "zIndex" : "100"  }}
      className="w-full shadow-md"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src={img}
            className="h-16 w-28	"
            alt="codewithfaraz Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuHidden ? 'false' : 'true'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuHidden ? 'hidden' : ''}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center	 font-medium p-4 md:p-0 mt-16  rounded-lg  md:flex-row md:space-x-8 md:mt-0 ">
            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
              to={'/'}
            >
              Home
            </Link>

            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
              to={'/Services'}
            >
              Services
            </Link>
            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/AMAZON-FBA'}
            >
              Amazon FBA Automation
            </Link>

            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/shopify-dropshipping'}
            >
              Shopify Dropshipping
            </Link>
            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/about-us'}
            >
              About
            </Link>
            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
              to={'/Contact-us'}
            >
              Contact Us
            </Link>


            <Link
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0 "
              to={'/Contact-us'}
            >
            <button   style={{"background" : "#232F3F"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full  ">
            GET A QUOTE
            </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Container } from "../index"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      to: "",
      name: 'Home',
      icon: <i className="fas fa-home mr-2"></i>
    },
    {
      to: "about",
      name: 'About',
      icon: <i className="fas fa-user mr-2"></i>
    },
    {
      to: "projects",
      name: 'Projects',
      icon: <i className="fa-solid fa-laptop-code mr-2"></i>
    },
    {
      to: "all-repos",
      icon: <i className="fas fa-code-branch mr-2"></i>,
      name: 'All Repos'
    },
    {
      to: "resume",
      icon: <i className="fas fa-file-alt mr-2"></i>,
      name: 'Resume',
    },

  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 md:top-8 md:animate-bounce m-auto md:w-[95%] max-w-[50rem]  backdrop-blur-sm shadow-lg z-50 md:rounded-full">
        <Container>
          <div className="flex justify-start md:justify-center items-center py-4">
            <div className="space-x-4 hidden md:flex">
              <ul className='flex space-x-4'>
                {
                  navItems.map((item) =>
                    <li key={item.name}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => `hover:text-orange-600 px-3 transition-all duration-300 py-2 rounded-md text-lg font-medium  ${isActive ? 'text-orange-500 ' : 'text-white'}`}
                      >{item.icon} {item.name}</NavLink>
                    </li>
                  )
                }
              </ul>
            </div>
            {/* Responsive Ham-burger Menu */}

            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Drop down menu for Small Screen */}
          <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`} id="mobile-menu">
            <div className="py-4 space-y-1">
              <ul className='flex flex-col justify-end gap-2 ml-auto'>
                {
                  navItems.map((item) =>
                    <li key={item.name}>
                      <NavLink
                        onClick={toggleMenu}
                        to={item.to}
                        className={({ isActive }) => ` hover:text-orange-600 px-3 py-2 rounded-md transition-all duration-300 text-lg font-medium  ${isActive ? 'text-orange-500 ' : 'text-white'}`}
                      >{item.icon} {item.name}</NavLink>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </Container>
      </nav>



    </>
  );
};

export default Navbar;
import React, { useState } from 'react';
import logo from '../Assets/logoweb.jpeg';
import { CgMenuRight, CgClose } from "react-icons/cg";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
   
      <nav className="bg-white rounded-full px-6 sm:px-4 py-3 flex items-center justify-between border-[1px] border-b-[5px] border-blue-900 w-full h-full ">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img 
            src={logo}
            alt="logo" 
            className="h-6"
            loading='lazy'
          />
          <span className="text-blue-900 font-semibold text-lg sm:text-[16px]">
          Corewebfusion
          </span>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="block lg:hidden z-10">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-600 text-[30px]">
            {isMenuOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>

        <div className={`transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? 'flex flex-col items-start boxShadow1 rounded-lg space-y-4 absolute top-[50px] sm:w-[180px] md:w-[200px] right-0 bg-white shadow-lg p-4 z-10'
              : 'hidden lg:flex lg:space-x-4'
          } text-[25px] lg:relative flex items-center`}>
         <HashLink smooth to="/#service" className="text-black text-[16px] font-semibold  hover:border-b hover:border-black cursor-pointer ">
            Services
          </HashLink>
         
          <HashLink smooth to="/#blog" className="text-black text-[16px] font-semibold hover:border-b hover:border-black cursor-pointer">
            Blog
          </HashLink>
         
         <HashLink smooth to="/#form"
            className="bg-blue-100 text-black text-[14px] py-1 px-4 rounded-full border-[1px] border-black  hover:bg-blue-900 hover:text-white hover:border-blue-900 duration-300 cursor-pointer font-bold "
          >
            Contact
            </HashLink>
          <a 
            href="#" 
            className="border-[1px] border-blue-900 text-black text-[14px] py-1 px-4 rounded-full hover:bg-blue-900 hover:text-white duration-300 font-bold cursor-pointer"
          >
            Join
          </a>
        </div>
      </nav>
  
  );
};

export default Navbar;

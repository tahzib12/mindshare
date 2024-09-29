import React from 'react';
import logo from '../Assets/mindsharelogo.png';

const Navbar = () => {
  return (
   
      <nav className="bg-white rounded-full px-6 py-3 flex items-center justify-between border-[1px] border-b-[5px] border-blue-900 w-full h-full ">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img 
            src={logo}
            alt="logo" 
            className="h-6"
          />
          <span className="text-blue-900 font-semibold text-lg">
            Mindshare Partners
          </span>
        </div>
        <div className="flex space-x-6 items-center">
          <a href="#service" className="text-black hover:border-b hover:border-black cursor-pointer">
            Services
          </a>
          <a href="#caseStudies" className="text-black hover:border-b hover:border-black cursor-pointer">
            Case Studies
          </a>
          <a 
            href="#" 
            className="bg-blue-100 text-black text-[14px] py-1 px-4 rounded-full border-[1px] border-black  hover:bg-blue-900 hover:text-white hover:border-blue-900 cursor-pointer"
          >
            Contact
          </a>
          <a 
            href="#" 
            className="border-[1px] border-blue-900 text-black text-[14px] py-1 px-4 rounded-full hover:bg-blue-900 hover:text-white cursor-pointer"
          >
            Join
          </a>
        </div>
      </nav>
  
  );
};

export default Navbar;

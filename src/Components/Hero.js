import React from 'react';
import Hero1 from '../Assets/hero1.jpeg'
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
    <section className="bg-[#f9f5f2] py-16 pt-40">
      <div className="container mx-auto flex gap-5 sm:flex-col sm:w-[95%] sm:items-start lg:flex-row md:flex-col items-center justify-between px-4 w-[90%]">
        {/* Left Section: Text Content */}
        <div className="w-[40%] md:w-full sm:w-full">
          <h1 className="text-4xl sm:text-xl md:text-3xl font-bold text-[#2c3d9b] mb-6 leading-tight">
          EVERYTHING WE DO IS MADE BY EXPERIENCE
          </h1>
          <p className="text-gray-700 mb-6 sm:text-[12px] md:text-[16px]">
          Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment.
          </p>
          <div className="space-x-4">
          <HashLink smooth to="/#form" className="bg-[#d4d8ff] border-[1px] border-b-[5px] border-black text-black  font-semibold py-2 px-6 rounded-full hover:bg-blue-900 hover:text-white hover:border-blue-900 transition duration-300 cursor-pointer sm:text-[10px] md:text-[16px]">
              Contact
            </HashLink>
            <button className="bg-[#d4d8ff] border-[1px] border-b-[5px] border-black text-black  font-semibold py-2 px-6 rounded-full hover:bg-blue-900 hover:text-white hover:border-blue-900 transition duration-300 cursor-pointer sm:text-[10px] md:text-[16px]">
              Join
            </button>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="w-[60%] mt-10 md:mt-0 md:w-full sm:w-full">
          <img
            src={Hero1}
            alt="Business Insights Illustration"
            className="w-full rounded-3xl bg-transparent"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

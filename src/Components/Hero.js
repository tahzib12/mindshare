import React from 'react';
import Hero1 from '../Assets/hero1.jpeg'

const HeroSection = () => {
  return (
    <section className="bg-[#f9f5f2] py-16 pt-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-[90%]">
        {/* Left Section: Text Content */}
        <div className="w-[40%]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3d9b] mb-6 leading-tight">
          EVERYTHING WE DO IS MADE BY EXPERIENCE
          </h1>
          <p className="text-gray-700 mb-6">
          Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment.
          </p>
          <div className="space-x-4">
            <button className="bg-[#d4d8ff] border-[1px] border-b-[5px] border-black text-black  font-semibold py-2 px-6 rounded-full hover:bg-blue-900 hover:text-white hover:border-blue-900 transition duration-300 cursor-pointer">
              Contact
            </button>
            <button className="bg-[#d4d8ff] border-[1px] border-b-[5px] border-black text-black  font-semibold py-2 px-6 rounded-full hover:bg-blue-900 hover:text-white hover:border-blue-900 transition duration-300 cursor-pointer">
              Join
            </button>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="w-[60%] mt-10 md:mt-0">
          <img
            src={Hero1}
            alt="Business Insights Illustration"
            className="w-full rounded-3xl bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

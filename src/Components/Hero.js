import React from 'react';
import image1 from '../Assets/image1.png'

const HeroSection = () => {
  return (
    <section className="bg-[#f9f5f2] py-16 pt-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-[90%]">
        {/* Left Section: Text Content */}
        <div className="w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3d9b] mb-6 leading-tight">
            Unleash Your Business Potential with Data-Driven Insights
          </h1>
          <p className="text-gray-700 mb-6">
            Your Path to Deeper Market Understanding
            <br />
            With our Expert Consumer Data and Analysis
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
        <div className="w-2/3 mt-10 md:mt-0">
          <img
            src={image1}
            alt="Business Insights Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

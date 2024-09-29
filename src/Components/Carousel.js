import React, { useState, useEffect } from 'react';
import vegs from '../Assets/vegsmind.png';
import g1 from '../Assets/g1.png';
import g2 from '../Assets/g2.png';
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: g1, 
      title: 'From Farm to Fork: Optimizing the Consumer Journey',
      client: 'Leafy F&B',
      industry: 'Food & Beverage',
      project: 'Brand Positioning and Product Development',
      description:
        'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    },
    {
      image: vegs, 
      title: 'Digital Transformation for Retail',
      client: 'Retail Corp',
      industry: 'Retail',
      project: 'Digital Strategy',
      description:
        'This project focused on transforming the digital presence of a retail company, including online and mobile experiences.',
    },
    {
      image: g2, 
      title: 'Sustainable Energy Solutions',
      client: 'Green Energy',
      industry: 'Energy',
      project: 'Sustainability Strategy',
      description:
        'We provided sustainable energy strategies for the client to reduce environmental impact and increase efficiency.',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease',
    });
    AOS.refresh();
}, []);

  return (
    <div id='caseStudies' className="relative w-full mx-auto p-14 bg-[#f9f5f2]">
        <div className='text-center text-[40px] font-bold text-blue-900 py-10'>
            Case Studies
        </div>
      <div className="flex items-center justify-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white border-[1px] border-blue-900 p-2 text-blue-900 rounded-full text-[25px] hover:bg-blue-900 hover:text-white cursor-pointer"
        >
          <IoMdArrowBack />
        </button>

        {/* Card Content */}
        <div className="overflow-hidden w-full py-8 px-0 border-[1px] border-b-[10px] border-black rounded-3xl" data-aos="zoom-in">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center "
              >
                <div className="flex flex-col md:flex-row gap-6 bg-blue-200 rounded-xl overflow-hidden w-full px-10 py-14 mx-8">
                  <div className="h-[350px] w-[400px]">
                    <img
                      src={slide.image}
                      alt="Slide"
                      className="object-cover h-full w-full rounded-xl border-[1px] border-blue-900"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center border-[1px] border-blue-900 rounded-xl bg-white">
                    <div className="text-[36px] font-bold mb-4 text-blue-900">
                      {slide.title}
                    </div>
                    <p className="text-gray-700 mb-2 text-[14px]">
                      <strong>Client: </strong>{slide.client} /
                      <strong> Industry: </strong>{slide.industry} /
                      <strong> Project: </strong>{slide.project}
                    </p>
                    <p className="text-gray-700 text-[14px]">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white  border-[1px] border-blue-900 p-2 text-blue-900 rounded-full shadow-sm hover:bg-blue-900 hover:text-white text-[25px] cursor-pointer"
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

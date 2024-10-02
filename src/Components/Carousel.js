import React, { useState, useEffect } from 'react';
import g1 from '../Assets/g1.jpeg';
import g2 from '../Assets/g2.jpeg';
import g3 from '../Assets/g3.jpeg';
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: g1,
      title: 'How to Increase Your Brand Value',
      description: `In today's highly competitive market, building a strong brand is crucial for success. 
    A powerful brand not only helps you stand out from competitors but also builds trust, loyalty, 
    and recognition among consumers. Whether you are a startup or an established business, 
    understanding how to increase your brand value is essential for long-term growth. In this blog, 
    we will explore actionable steps to elevate your brand and drive more value.`,
        link: '/Blogpage1', 
    },
    {
      image: g2,
      title: 'Grow Your Business:',
      description:
        `Growing a business requires careful planning, strategic execution, and constant adaptation. Whether you're a startup or an established company, scaling up can seem overwhelming. However, with the right approach, you can unlock the potential of your business and reach new heights.`,
        link: '/Blogpage2', 
    },
    {
      image: g3,
      title: 'Top Tips to Become Rich in 2025',
      description:
        `Everyone dreams of becoming wealthy, but few have a clear strategy on how to achieve that
goal. As we approach 2025, the landscape for wealth creation is evolving rapidly, offering
both challenges and opportunities. To help you get ahead, we’ve compiled a list of actionable
tips that can pave your path to financial success in the coming year.`,
        link: '/Blogpage3', 
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
    <div id='blog' className="relative w-full mx-auto p-14 sm:px-2 bg-[#f9f5f2]">
      <div className='text-center text-[40px] font-bold text-blue-900 py-10'>
        Blog
      </div>
      <div className="flex items-center justify-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white border-[1px] border-blue-900 p-2 sm:p-1 text-blue-900 rounded-full text-[25px] sm:text-[20px] hover:bg-blue-900 hover:text-white cursor-pointer"
        >
          <IoMdArrowBack />
        </button>

        {/* Card Content */}
        <div className="overflow-hidden w-full py-8 sm:py-2 px-0 border-[1px] border-b-[10px] border-black rounded-3xl" data-aos="zoom-in">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center "
              >
                <div className="flex flex-col lg:justify-between sm:flex-col md:flex-col lg:flex-row gap-6 bg-blue-200 rounded-xl overflow-hidden w-full px-10 sm:p-5 py-14 mx-8 sm:mx-2">
                  <div className="h-[350px] sm:h-[200px] lg:w-1/2 sm:w-full">
                    <img
                      src={slide.image}
                      alt="Slide"
                      className="object-fill h-full w-full rounded-xl border-[1px] border-blue-900"
                      loading='lazy' />
                  </div>
                  <div className="w-1/2 sm:w-full md:w-full h-[350px] lg:h-auto sm:h-auto sm:pb-14 p-6 flex flex-col justify-start border-[1px] border-blue-900 rounded-xl bg-white relative">
                    <div className="text-[34px] sm:text-[20px] font-bold mb-4 text-blue-900">
                      {slide.title}
                    </div>
                    <p className="text-gray-700 text-[14px] sm:text-[14px]">{slide.description}</p>
                    <div className='text-right absolute bottom-4 right-4'>
                    <a
                      href={slide.link}
                      className="bg-blue-100 text-black text-[14px] py-2 px-4 rounded-full border-[1px] border-black  hover:bg-blue-900 hover:text-white hover:border-blue-900 cursor-pointer"
                    >
                      Read More
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white  border-[1px] border-blue-900 p-2 sm:p-1 text-blue-900 rounded-full shadow-sm hover:bg-blue-900 hover:text-white text-[25px] sm:text-[20px] cursor-pointer"
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react'
import SlideCard from './SlideCard'
import image6 from '../Assets/joinus.jpeg'


function OurClients() {
  return (
    <div className='bg-[#f9f5f2] py-10 relative'>
        <p className='text-[40px] sm:text-[30px] text-blue-900 font-bold text-center'>OUR CLIENTS</p>
        <p className='text-[16px] sm:text-[14px] sm:w-[300px] text-black text-center w-[350px] mx-auto mb-10'>WHEN MONEY AND REPUTATION IS INVOLVED, IT’S IMPORTANT YOU CHOOSE PEOPLE THAT FIERCELY PROTECT IT.</p>
    <div className='flex items-center justify-between sm:justify-center sm:flex-col md:flex-col'>
      <div className="w-1/2 sm:w-[300px] mt-10 md:mt-0">
          <img
            src={image6}
            alt="Business Insights Illustration"
            className="w-full"
          />
        </div>
        <div className='absolute sm:static md:static right-0 z-20 w-full'>
        <SlideCard/>
        </div>
    </div>
    </div> 
  )
}

export default OurClients;
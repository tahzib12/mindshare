import React from 'react'
import vegs from '../Assets/vegsmind.png';
import g1 from '../Assets/g1.png';
import g2 from '../Assets/g2.png';
function BlogHero() {
  return (
    <div className='pt-20  w-full h-auto bg-[#f9f5f2] px-10 '>
      <div className='flex flex-col justify-center items-start mt-10 py-10 px-10 border-[1px] border-black'>
        <img
            src={vegs}
            alt="Business Insights Illustration"
            className="w-[500px] h-[300px] rounded-3xl mb-10"
          />
          <div className='text-[30px] w-[600px]  font-bold text-[#2c3d9b] mb-6'>Why do people work remotly?</div>
          <p className='text-gray-700 w-[600px] text-[16px]'>Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.</p>

          <img
            src={g1}
            alt="Business Insights Illustration"
            className="w-[500px] h-[300px] rounded-3xl mt-20 mb-10"
          />
          <div className='text-[30px] w-[600px]  font-bold text-[#2c3d9b] mb-6'>Why do people work remotly?</div>
          <p className='text-gray-700 w-[600px] text-[16px]'>Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.</p>

          <img
            src={g2}
            alt="Business Insights Illustration"
            className="w-[500px] h-[300px] rounded-3xl mt-20 mb-10"
          />
          <div className='text-[30px] w-[600px]  font-bold text-[#2c3d9b] mb-6'>Why do people work remotly?</div>
          <p className='text-gray-700 w-[600px] text-[16px]'>Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.</p>
    </div>

    </div>
  )
}

export default BlogHero
import React from 'react'
import Hero1 from '../Assets/blog.jpeg'

function BlogHero() {
  return (
    <div className='py-20 w-full h-[500px] bg-[#f9f5f2] flex justify-center items-center'>
        <img
            src={Hero1}
            alt="Business Insights Illustration"
            className="w-[500px] h-full rounded-3xl mt-36"
          />
    </div>
  )
}

export default BlogHero
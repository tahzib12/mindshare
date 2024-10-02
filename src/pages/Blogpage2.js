import React from 'react'
import Navbar from '../Components/Navbar'
import CursorDisk from '../Components/CursorDisk'
import Footer from '../Components/Footer'
import Blog2 from '../Components/Blog2'

function BlogPage2() {
  return (
    <div className="cursor-none">
    <CursorDisk/>
    <section className='fixed top-10 z-40 w-[90%] left-1/2 transform -translate-x-1/2'>
      <Navbar/>
    </section>
    <Blog2 />
    <Footer/>
  </div>
  )
}

export default BlogPage2
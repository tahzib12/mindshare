import React from 'react'
import Navbar from '../Components/Navbar'
import CursorDisk from '../Components/CursorDisk'
import Footer from '../Components/Footer'
import Blog1 from '../Components/Blog1'

function BlogPage1() {
  return (
    <div className="cursor-none">
    <CursorDisk/>
    <section className='fixed top-10 z-40 w-[90%] left-1/2 transform -translate-x-1/2'>
      <Navbar/>
    </section>
    <Blog1 />
    <Footer/>
  </div>
  )
}

export default BlogPage1
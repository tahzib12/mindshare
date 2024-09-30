import React from 'react'
import Navbar from '../Components/Navbar'
import CursorDisk from '../Components/CursorDisk'
import Footer from '../Components/Footer'
import BlogHero from '../Components/BlogHero'

function Blog() {
  return (
    <div className="cursor-none">
    <CursorDisk/>
    <section className='fixed top-10 z-40 w-[90%] left-1/2 transform -translate-x-1/2'>
      <Navbar/>
    </section>
    <BlogHero />
    <Footer/>
  </div>
  )
}

export default Blog
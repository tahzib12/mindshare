import React from 'react'
import CursorDisk from '../Components/CursorDisk'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Hero'
import ServiceSection from '../Components/Service'
import Industries from '../Components/Industries'
import Carousel from '../Components/Carousel'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import ContactForm from '../Components/Form'

function Home() {
  return (
    <div className="cursor-none">
    <CursorDisk/>
    <section className='fixed top-10 z-40 w-[90%] left-1/2 transform -translate-x-1/2'>
      <Navbar/>
    </section>
    <HeroSection />
    <ServiceSection/>
    <Industries/>
    <Carousel/>
    <JoinUs/>
    <ContactForm/>
    <Footer/>
  </div>
  )
}

export default Home
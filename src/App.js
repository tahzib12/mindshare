import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import ServiceSection from './Components/Service';
import Carousel from './Components/Carousel';
import ContactForm from './Components/Form';
import Footer from './Components/Footer';
import Industries from './Components/Industries';
import CursorDisk from './Components/CursorDisk';
import JoinUs from './Components/JoinUs';


function App() {
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
  );
}

export default App;

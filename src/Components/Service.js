import React , { useEffect }from 'react';
import image2 from '../Assets/box1.jpeg';
import image3 from '../Assets/box2.jpeg';
import image4 from '../Assets/box3.jpeg';
import image5 from '../Assets/box4.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Bring your vision to life with sleek, responsive websites designed to captivate and convert. From Figma wireframes to complete front-end and back-end solutions, we ensure seamless user experiences that make your brand stand out',
    image: image2, 
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Tap into the power of social platforms with tailored strategies that boost engagement and brand awareness. We manage your social media presence, grow your following, and deliver content that makes people click and engage with your brand',
    image: image3, 
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    description: 'Get found where it matters most. With in-depth keyword research, on-page and off-page optimization, and technical SEO services, we ensure your website ranks high, driving organic traffic and boosting your online presence',
    image: image4, 
  },
  {
    id: 4,
    title: 'Graphic Designing',
    description: 'From logos to custom Canva templates, our graphic design services bring your brand’s identity to life. Our creative team crafts visually stunning assets that communicate your message and make a lasting impression',
    image: image5, 
  },
];

const ServiceCard = ({ service }) => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease',
    });
    AOS.refresh();
}, []);

  return (
   
    <div  className="w-[520px] sm:w-[290px] h-full bg-white rounded-3xl border-[1px] border-b-[10px] border-black p-10 sm:p-4" data-aos="zoom-in">
      <div className="flex justify-between sm:flex-col mb-4 w-full items-center">
        <img src={service.image} alt={service.title} loading='lazy' className="h-[170px] w-1/2 sm:w-full bg-cover rounded-2xl" />
        <div className="text-[32px] font-bold text-blue-800 w-1/2 sm:w-full sm:text-xl md:text-2xl pl-6">{service.title}</div>
      </div>
      <div className='p-5 border-[1px] border-blue-900 rounded-2xl pr-[60px] bg-[#f9f5f2]'>
      <p className="text-blue-900 text-[15px] sm:text-[12px] md:text-[14px]">{service.description}</p>
      </div>
    </div>
   
  );
};

const ServiceSection = () => {
  return (
    <div id='service' className="bg-[#f9f5f2] py-10 sm:px-5">
      <div className='text-blue-800 font-bold text-[40px] text-center pb-14 sm:text-2xl md:text-3xl'>
        Our Services
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

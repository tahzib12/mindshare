import React , { useEffect }from 'react';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'Market Research',
    description: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    image: image2, // Add the path to the corresponding image
  },
  {
    id: 2,
    title: 'Consumer Insights',
    description: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    image: image3, // Add the path to the corresponding image
  },
  {
    id: 3,
    title: 'Market Research',
    description: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    image: image4, // Add the path to the corresponding image
  },
  {
    id: 4,
    title: 'Consumer Insights',
    description: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    image: image5, // Add the path to the corresponding image
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
   
    <div  className="w-[520px] h-full bg-white rounded-3xl border-[1px] border-b-[10px] border-black p-10 " data-aos="zoom-in">
      <div className="flex justify-between mb-4 w-full ">
        <img src={service.image} alt={service.title} className="h-[170px] w-1/2 bg-cover" />
        <div className="text-[32px] text-left font-bold text-blue-800 pt-16 w-1/2">{service.title}</div>
      </div>
      <div className='p-5 border-[1px] border-blue-900 rounded-2xl pr-[60px] bg-[#f9f5f2]'>
      <p className="text-blue-900 text-[15px]">{service.description}</p>
      </div>
    </div>
   
  );
};

const ServiceSection = () => {
  return (
    <div id='service' className="bg-[#f9f5f2] py-10">
      <div className='text-blue-800 font-bold text-[40px] text-center pb-14'>
        Our Services
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

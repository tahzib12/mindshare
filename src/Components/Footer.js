import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Assets/logo.png';
import insta from '../Assets/insta.png'
import LinkedIn from '../Assets/linkedin.png'
import gmail from '../Assets/gmail.png'
import x from '../Assets/x.png'
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease',
        });
        AOS.refresh();
    }, []);

    return (
        <footer className="bg-[#f9f5f2] p-8 sm:px-2 pb-5 mx-auto w-full">
            <div className="bg-[#F7C9AF] p-8 lg:md-12 md:p-12 rounded-3xl mx-auto my-10 max-w-[90%] shadow-lg border-[1px] border-b-[10px] border-blue-900 relative" data-aos="zoom-in">
                <div className="flex flex-col gap-44 md:gap-24 sm:gap-3 lg:flex-row md:flex-row justify-start items-start space-y-6 lg:space-y-0 md:space-y-0">

                    {/* Contact Section */}
                    <div className="space-y-3 text-center sm:text-start lg:text-left md:text-left">
                        <h2 className="font-bold text-blue-900 text-xl">Connect with us and stay updated!</h2>
                        <a href="mailto:corewebfusion@gmail.com" className="flex items-center gap-5"><img src={gmail} alt='logo' className='w-10 h-10'/> <span className="text-blue-900 hover:underline cursor-pointer">corewebfusion@gmail.com</span></a>
                        <a href='https://www.instagram.com/corewebfusion/' className="flex items-center gap-5"><img src={insta} alt='logo' className='w-10 h-10'/> <span className="text-blue-900 hover:underline cursor-pointer">corewebfusion</span></a>
                        <a href='https://www.linkedin.com/in/coreweb-fusion-2162ab329/' className="flex items-center gap-5"><img src={LinkedIn} alt='logo' className='w-10 h-10'/> <span className="text-blue-900 hover:underline cursor-pointer">@corewebfusion</span></a>
                        <a href='https://x.com/corewebfusion' className="flex items-center gap-5"><img src={x} alt='logo' className='w-10 h-10'/> <span className="text-blue-900 hover:underline cursor-pointer">Coreweb Fusion</span></a>
                       
                    </div>

                    {/* Navigate Section */}
                    <div className="space-y-3 text-center  sm:text-start lg:text-left md:text-left">
                        <h2 className="font-bold text-blue-900 text-xl">Navigate</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-900 hover:underline cursor-pointer">Home</a></li>
                            <li> <HashLink smooth to="/#service"  className="text-blue-900 hover:underline cursor-pointer">Our Services</HashLink></li>
                            <li><HashLink smooth to="/#clients" className="text-blue-900 hover:underline cursor-pointer">Our CLIENTS</HashLink></li>
                        </ul>
                    </div>

                    {/* Logo Section */}
                    <div className="flex justify-center lg:justify-start md:justify-start text-pink-500 absolute top-10 right-10 sm:top-[50%] md:top-[50%] sm:right-0 md:right-0">
                        <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="150" width="150" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="" fill='#ffffff'
                            stroke='#1C1E87'   className="animate-up-down sm:w-[30%] sm:h-[30%] md:w-[50%] md:h-[50%]">
                            <g>
                                <path d="M20 100.002c41.21 6.266 54.993 20.886 54.993 20.886C92.289 135.827 99.952 180 99.952 180h.097s7.896-44.037 24.958-59.111c0 0 13.783-14.62 54.993-20.886v-.005c-41.21-6.266-54.993-20.886-54.993-20.886C107.944 64.037 100.048 20 100.048 20h-.097s-7.663 44.173-24.958 59.111c0 0-13.783 14.62-54.993 20.886v.005z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="flex flex-col items-center md:items-start lg:items-start space-y-3 mt-10">
                    <a href="#" className="bg-white px-4 py-2 rounded-full border border-blue-700 flex items-center justify-center cursor-pointer">
                        <img src={logo} alt="Logo" className="h-8 w-8 mr-2 object-contain" loading='lazy'/>
                        <span className="text-blue-900 font-bold">Corewebfusion</span>
                    </a>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;

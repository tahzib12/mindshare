import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Assets/logoweb.jpeg';

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
        <footer className="bg-[#f9f5f2] p-8 pb-5 mx-auto w-full">
            <div className="bg-[#F7C9AF] p-8 md:p-12 rounded-3xl mx-auto my-10 max-w-5xl shadow-lg border-[1px] border-b-[10px] border-blue-900 relative" data-aos="zoom-in">
                <div className="flex flex-col gap-44 md:flex-row justify-start items-start space-y-6 md:space-y-0">

                    {/* Contact Section */}
                    <div className="space-y-3 text-center md:text-left">
                        <h2 className="font-bold text-blue-900 text-xl">Contact</h2>
                        <p className="text-blue-900">info@mysite.com</p>
                        <p className="text-blue-900">123-456-7890</p>
                        <p className="text-blue-900">500 Terry Francine Street, <br /> San Francisco, CA 94158</p>
                    </div>

                    {/* Navigate Section */}
                    <div className="space-y-3 text-center md:text-left">
                        <h2 className="font-bold text-blue-900 text-xl">Navigate</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-900 hover:underline cursor-pointer">Home</a></li>
                            <li><a href="#" className="text-blue-900 hover:underline cursor-pointer">Privacy Policy</a></li>
                            <li><a href="#" className="text-blue-900 hover:underline cursor-pointer">Accessibility Statement</a></li>
                        </ul>
                    </div>

                    {/* Logo Section */}
                    <div className="flex justify-center md:justify-start text-pink-500 absolute top-10 right-10">
                        <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="150" width="150" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="" fill='#ffffff'
                            stroke='#1C1E87'   className="animate-up-down">
                            <g>
                                <path d="M20 100.002c41.21 6.266 54.993 20.886 54.993 20.886C92.289 135.827 99.952 180 99.952 180h.097s7.896-44.037 24.958-59.111c0 0 13.783-14.62 54.993-20.886v-.005c-41.21-6.266-54.993-20.886-54.993-20.886C107.944 64.037 100.048 20 100.048 20h-.097s-7.663 44.173-24.958 59.111c0 0-13.783 14.62-54.993 20.886v.005z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="flex flex-col items-center md:items-start space-y-3 mt-10">
                    <a href="#" className="bg-white px-4 py-2 rounded-full border border-blue-700 flex items-center justify-center cursor-pointer">
                        <img src={logo} alt="Logo" className="h-6 w-6 mr-2 object-contain" />
                        <span className="text-blue-900 font-bold">Corewebfusion</span>
                    </a>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;

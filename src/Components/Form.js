import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease',
        });
        AOS.refresh();
    }, []);

    return (
        <div id='form' className="min-h-screen md:h-auto sm:h-auto flex items-center justify-center bg-[#f9f5f2] md:px-28 sm:px-10">
            <div className="flex flex-col  lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-start space-y-6 lg:space-y-0 lg:space-x-12 md:space-y-0  md:space-x-0 sm:space-y-0  sm:space-x-0 md:w-full" >
                {/* Form Section */}
                <div className="bg-white shadow-lg rounded-3xl md:w-full sm:w-full p-8 w-1/2 border-[1px] border-b-[10px] border-black" data-aos="fade-up">
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="firstName">First name</label>
                            <input
                                id="firstName"
                                className="w-full p-2 border-[1px] rounded-lg focus:outline-none  focus:border-[#ee9866] border-black cursor-text"
                                type="text"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="lastName">Last name</label>
                            <input
                                id="lastName"
                                className="w-full p-2 border-[1px] rounded-lg focus:outline-none  focus:border-[#ee9866] border-black cursor-text"
                                type="text"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1" htmlFor="email">Email *</label>
                            <input
                                id="email"
                                className="w-full p-2 border-[1px] rounded-lg focus:outline-none  focus:border-[#ee9866] border-black cursor-text"
                                type="email"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm mb-1" htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                className="w-full p-2 border-[1px] rounded-lg focus:outline-none  focus:border-[#ee9866] border-black cursor-text"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 border-[1px] cursor-pointer border-blue-900 bg-[#d0d1ff] text-black rounded-full hover:bg-blue-900 hover:text-white transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Text and Arrow Section */}
                <div className="text-center md:text-left  sm:text-left lg:text-left w-1/2 md:w-[100%] md:h-[300px] sm:w-[100%] sm:h-[300px] flex relative">
                    <div className='justify-start items-start md:w-full sm:w-full'>
                        <h2 className="text-[34px] font-semibold text-[#324b81] md:text-[25px] sm:text-[25px] md:w-[400px]">
                            Ready to unlock your business's potential?
                        </h2>
                        <p className="text-[40px] text-[#324b81] font-bold md:text-[30px] sm:text-[30px]">
                            Contact us today.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start md:justify-start sm:justify-start text-pink-500 absolute top-[60%] right-0  md:top-[25%] sm:top-[40%] md:right-[-40px] sm:right-[-40px]">
                        <svg
                            preserveAspectRatio="none"
                            data-bbox="39.501 20 120.999 159.999"
                            viewBox="39.501 20 120.999 159.999"
                            height="200"
                            width="200"
                            xmlns="http://www.w3.org/2000/svg"
                            data-type="shape"
                            role="presentation"
                            aria-hidden="true"
                            aria-label=""
                            fill='#F7C9AF'
                            stroke='#1C1E87'
                            className="animate-up-down md:w-[70%] md:h-[70%] sm:w-[40%] sm:h-[40%]"
                        >
                            <g>
                                <path d="M159.944 81.896c-.697-1.165-1.859-1.864-3.021-1.864h-55.08V23.406c0-1.631-.93-3.029-2.556-3.262-1.394-.466-3.021.233-3.951 1.631l-55.312 94.376c-.697 1.165-.697 2.33 0 3.495s1.859 1.631 3.021 1.631h52.059v55.227c0 1.631.93 2.796 2.556 3.262.232 0 .697.233.93.233 1.162 0 2.324-.466 3.021-1.631l58.566-93.211c.464-.931.464-2.329-.233-3.261z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;

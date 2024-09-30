import React from "react";

const SlideCard = () => {
    return (
        <div className="bg-transparent h-[530px] overflow-y-scroll scrollbar-hide flex flex-col gap-40 items-end justify-start pr-10 ">
             {/* First Card */}
            <div className="relative max-w-[550px] p-6 bg-white rounded-3xl border-[1px] border-b-[5px] border-black z-10 sticky top-16">
                <div className="absolute -top-12 left-6">
                    <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="100" width="100" xmlns="http://www.w3.org/2000/svg" data-type="shape" fill='#F7C9AF' stroke='#1C1E87'>
                        <g>
                            <path d="M180 78.564L141.411 100 180 121.436l-44.137-.73 22.701 37.858-37.858-22.701.73 44.137L100 141.411 78.564 180l.73-44.137-37.858 22.701 22.701-37.858-44.137.73L58.589 100 20 78.564l44.137.73-22.701-37.858 37.858 22.701L78.564 20 100 58.589 121.436 20l-.73 44.137 37.858-22.701-22.701 37.858 44.137-.73z"></path>
                        </g>
                    </svg>
                </div>
                <h2 className="text-[40px] font-bold text-indigo-800 pt-16">Consumer Insights Analyst 1</h2>
                <p className="text-blue-900 mt-4">
                    This is the space to tell people about an open position. Describe the role, its requirements and the qualities the business wants to see in candidates. 
                    List the benefits that come with the job and tell interested readers what to include in their applications.
                </p>
                <div className="mt-6">
                    <button className="px-4 py-2 bg-indigo-100 text-black rounded-full shadow-sm hover:bg-blue-900 hover:text-white border-[1px] border-black focus:outline-none hover:border-blue-900 cursor-pointer">
                        Apply
                    </button>
                </div>
            </div>

 {/* Second Card */} 
            <div className="relative max-w-[550px] p-6 bg-white rounded-3xl border-[1px] border-b-[5px] border-black z-20 sticky top-16">
                <div className="absolute -top-12 left-6">
                    <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="100" width="100" xmlns="http://www.w3.org/2000/svg" data-type="shape" fill='#F7C9AF' stroke='#1C1E87'>
                        <g>
                            <path d="M180 78.564L141.411 100 180 121.436l-44.137-.73 22.701 37.858-37.858-22.701.73 44.137L100 141.411 78.564 180l.73-44.137-37.858 22.701 22.701-37.858-44.137.73L58.589 100 20 78.564l44.137.73-22.701-37.858 37.858 22.701L78.564 20 100 58.589 121.436 20l-.73 44.137 37.858-22.701-22.701 37.858 44.137-.73z"></path>
                        </g>
                    </svg>
                </div>
                <h2 className="text-[40px] font-bold text-indigo-800 pt-16">Consumer Insights Analyst 2</h2>
                <p className="text-blue-900 mt-4">
                    This is the space to tell people about an open position. Describe the role, its requirements and the qualities the business wants to see in candidates. 
                    List the benefits that come with the job and tell interested readers what to include in their applications.
                </p>
                <div className="mt-6">
                    <button className="px-4 py-2 bg-indigo-100 text-black rounded-full shadow-sm hover:bg-blue-900 hover:text-white border-[1px] border-black focus:outline-none hover:border-blue-900 cursor-pointer">
                        Apply
                    </button>
                </div>
            </div>
  
  {/* Third Card */}
            <div className="relative max-w-[550px] p-6 bg-white rounded-3xl border-[1px] border-b-[5px] border-black z-30 sticky top-[220px] mb-[50px]">
                <div className="absolute -top-12 left-6">
                    <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="100" width="100" xmlns="http://www.w3.org/2000/svg" data-type="shape" fill='#F7C9AF' stroke='#1C1E87'>
                        <g>
                            <path d="M180 78.564L141.411 100 180 121.436l-44.137-.73 22.701 37.858-37.858-22.701.73 44.137L100 141.411 78.564 180l.73-44.137-37.858 22.701 22.701-37.858-44.137.73L58.589 100 20 78.564l44.137.73-22.701-37.858 37.858 22.701L78.564 20 100 58.589 121.436 20l-.73 44.137 37.858-22.701-22.701 37.858 44.137-.73z"></path>
                        </g>
                    </svg>
                </div>
                <h2 className="text-[40px] font-bold text-indigo-800 pt-16">Consumer Insights Analyst 3</h2>
                <p className="text-blue-900 mt-4">
                    This is the space to tell people about an open position. Describe the role, its requirements and the qualities the business wants to see in candidates. 
                    List the benefits that come with the job and tell interested readers what to include in their applications.
                </p>
                <div className="mt-6">
                    <button className="px-4 py-2 bg-indigo-100 text-black rounded-full shadow-sm hover:bg-blue-900 hover:text-white border-[1px] border-black focus:outline-none hover:border-blue-900 cursor-pointer">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlideCard;

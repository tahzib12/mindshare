import React from 'react'
import g3 from '../Assets/g3.jpeg';
import blog1 from '../Assets/blog3.1.jpeg';
import blog2 from '../Assets/blog3.2.jpeg';
import blog3 from '../Assets/blog3.3.jpeg';
import blog4 from '../Assets/blog3.4.jpeg';

function Blog3() {
  return (
    <div className='pt-10  w-full h-auto bg-[#f9f5f2] px-20 sm:px-5'>
      <div className='flex justify-center items-start mt-10 py-10 pb-0 w-full sm:flex-col-reverse md:flex-col-reverse'>
        <div className='flex flex-col w-1/2 bg-[#EFF1E1] h-[400px] items-start justify-center px-10 sm:w-full md:w-full sm:h-auto sm:py-10'>
          <div className='text-[40px] font-bold text-black mb-6 sm:text-[25px] md:text-[30px] sm:w-full'>Top Tips to Become Rich in 2025</div>
          <p className='text-black text-[16px] sm:text-[14px]'>Everyone dreams of becoming wealthy, but few have a clear strategy on how to achieve that
            goal. As we approach 2025, the landscape for wealth creation is evolving rapidly, offering
            both challenges and opportunities. To help you get ahead, we’ve compiled a list of actionable
            tips that can pave your path to financial success in the coming year.</p>
        </div>
        <img
          src={g3}
          alt="Business Insights Illustration"
          className="w-1/2 sm:w-full md:w-full h-[400px] sm:h-[300px]"
          loading='lazy'
        />
      </div>


      <div className='bg-white w-full pt-20 sm:pt-8 px-8'>

        <div className='flex text-black text-[16px] gap-36 sm:gap-10 pb-10 w-full sm:flex-col-reverse md:flex-col-reverse'>
          <div className='w-[550px] flex flex-col md:w-full sm:w-full sm:text-left'>
            <div className='text-black font-bold text-[25px]'>Introduction</div>
            <p className='sm:text-[14px]'>Everyone dreams of becoming wealthy, but few have a clear strategy
              on how to achieve that goal. As we approach 2025, the landscape
              for wealth creation is evolving rapidly, offering both challenges
              and opportunities. To help you get ahead, we’ve compiled a list
              of actionable tips that can pave your path to financial success
              in the coming year</p>

          </div>
          <div className="w-[40%] md:mt-0 md:w-full sm:w-full">
            <h2 className="text-[33px] font-bold text-[#282A8C] md:text-[26px] sm:text-[22px]">
              Ready to unlock your business's potential?
            </h2>
            <h2 className="text-[40px] font-bold text-[#282A8C] mb-10 md:text-[30px] sm:text-[25px]">
              Contact us today.
            </h2>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#111926] text-white py-2 rounded hover:bg-blue-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex md:flex-row gap-10">
          <div className="w-[60%] pr-6 md:w-full sm:w-full">
            <img
              src={blog1}
              alt="Two people working together at a computer"
              className="w-full h-auto rounded-lg mb-4"
              loading='lazy'
            />
            <p className="text-[23px] text-black font-bold my-8">
              1.Invest in the Stock Market
            </p>
            <p className="text-black text-[16px] sm:text-[14px]">
              The stock market remains one of the most reliable avenues for wealth creation.
              With companies innovating and expanding, investing in the right stocks can yield impressive returns.
              To get started: Research industries poised for growth, such as technology, renewable energy, and healthcare.
              Diversify your portfolio to minimize risk. Take advantage of apps like Robinhood or Zerodha
              to make low-cost investments. Remember, it's essential to invest for the long term
              and avoid panic selling during market dips.
            </p>
          </div>

        </div>

        <div className='text-black text-[16px] flex flex-col gap-8 w-[590px] md:w-full sm:w-full'>
          <p className="text-[23px] text-black font-bold my-8 sm:mb-0">
            2.Tap into Real Estate Opportunities
          </p>
          <p className='sm:text-[14px]'>Real estate has always been a cornerstone of wealth. As housing markets continue to grow,
            especially in developing areas, there are opportunities to invest in both residential
            and commercial properties. In 2025: Look for emerging markets where property prices
            are still affordable. Consider rental properties for steady passive income
            . Real estate crowdfunding platforms like Fundrise allow you to invest
            in properties with minimal capital.</p>

        </div>

        <div className="w-[60%] pr-6 pt-10 md:w-full sm:w-full">
          <img
            src={blog3}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8">
            3.Develop High-Income Skills
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            Relying solely on your primary job won’t make you rich. In 2025, the key to wealth is
            developing high-income skills that are in demand . These include:
            <br /> - Digital marketing
            <br />- Coding and software development
            <br />- Graphic design
            <br />- Public speaking
            <br />- Copywriting  </p>
          <p className='sm:text-[14px]'>
            Platforms like Udemy and Coursera offer courses that can help you sharpen these skills.
            The more valuable you become in the marketplace, the higher the income you can
            command.
          </p>
        </div>

        <div className="w-[60%] pr-6 py-5 md:w-full sm:w-full">
          <img
            src={blog4}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8">
            4.Start a Side Hustle
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            A side hustle can help accelerate your path to wealth. Whether it's freelancing, starting an
            online store, or offering consulting services, the extra income can be funneled into savings or
            investments. Some profitable side hustles for 2025 include:
            Dropshipping businesses using platforms like Shopify.
            Content creation on YouTube or TikTok.
            Affiliate marketing through blogs or social media.
          </p>
          <p className='sm:text-[14px]'>

            The beauty of a side hustle is that you can build it on your terms and scale it over time.
          </p>
        </div>

        <div className="w-[60%] pr-6 py-10 md:w-full sm:w-full">
          <img
            src={blog2}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8">
            5.Embrace Cryptocurrency and Blockchain
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            Cryptocurrency continues to gain mainstream attention, and while it can be volatile, it's worth
            exploring. Blockchain technology is revolutionizing industries like finance, logistics, and even
            real estate. To capitalize on this:
            Start by learning the basics of cryptocurrency, including Bitcoin, Ethereum, and
            decentralized finance (DeFi).
            Consider investing small amounts in well-established coins or innovative blockchain projects.
            Keep an eye on NFTs (non-fungible tokens) as they may offer unique opportunities for
            wealth creation in 2025.
          </p>
          <p className="text-[23px] text-black font-bold my-8 ">
            6.Network and Surround Yourself with Wealthy Individuals
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            The people you surround yourself with can greatly influence your mindset and financial
            habits. In 2025, networking with successful and financially savvy individuals can open doors
            to new opportunities. You can:
            Attend conferences or seminars in your industry.
            Join mastermind groups or business networks.
            Engage with mentors or coaches who have already achieved the level of success you aspire
            to.
            These connections can provide valuable advice, partnerships, or investment opportunities.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Blog3
import React from 'react'
import g2 from '../Assets/g2.jpeg';
import blog1 from '../Assets/blog2.1.jpeg';
import blog2 from '../Assets/blog2.2.jpeg';
import blog3 from '../Assets/blog2.3.jpeg';
import blog4 from '../Assets/blog2.4.jpeg';

function Blog2() {
  return (
    <div className='pt-10  w-full h-auto bg-[#f9f5f2] px-20 sm:px-5'>
      <div className='flex justify-center items-start mt-10 py-10 pb-0 w-full sm:flex-col-reverse md:flex-col-reverse'>
        <div className='flex flex-col w-1/2 bg-[#EFF1E1] h-[400px] items-start justify-center px-10 sm:w-full md:w-full sm:h-auto sm:py-10'>
          <div className='text-[40px] font-bold text-black mb-6 sm:text-[25px] md:text-[30px] sm:w-full'>Grow Your Business:</div>
          <p className='text-black text-[16px] sm:text-[14px]'>Growing a business requires careful planning, strategic execution, and constant adaptation. Whether you're a startup or an established company, scaling up can seem overwhelming. However, with the right approach, you can unlock the potential of your business and reach new heights.</p>
        </div>
        <img
          src={g2}
          alt="Business Insights Illustration"
          className="w-1/2 sm:w-full md:w-full h-[400px] sm:h-[300px]"
          loading='lazy'
        />
      </div>


      <div className='bg-white w-full pt-20 sm:pt-8 px-8'>

        <div className='flex text-black text-[16px] gap-36 sm:gap-10 pb-10 w-full sm:flex-col-reverse md:flex-col-reverse'>
          <div className='w-[550px] flex flex-col md:w-full sm:w-full sm:text-left'>
            <div className='text-black font-bold text-[25px]'>Introduction</div>
            <p className='sm:text-[14px]'>Growing a business requires careful planning, strategic execution,
              and constant adaptation. Whether you're a startup or an established
              company, scaling up can feel overwhelming. However,
              with the right approach, you can unlock the potential of you
              r business and reach new heights. Here are some essential strategies
              to help you grow effectively.</p>

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
              src={blog2}
              alt="Two people working together at a computer"
              className="w-full h-auto rounded-lg mb-4"
              loading='lazy'
            />
            <p className="text-[23px] text-black font-bold my-8 sm:mb-3">
              1. Understand Your Target Audience
            </p>
            <p className="text-black text-[16px] sm:text-[14px]">
              The foundation of business growth lies in knowing who your customers are. Conducting thorough market research is crucial to identify their needs, preferences, and pain points. When you tailor your products or services to solve their specific problems, you're not only attracting new customers but also retaining your existing ones. Customer-centric solutions will differentiate your business from competitors and build long-term loyalty.
            </p>
          </div>

        </div>

        <div className='text-black text-[16px] flex flex-col gap-8 w-[590px] md:w-full sm:w-full'>
          <p className="text-[23px] text-black font-bold my-8 sm:mb-0">
            2. Leverage Digital Marketing
          </p>
          <p className='sm:text-[14px]'>n today’s digital age, having a strong online presence is non-negotiable.
            To maximize reach, invest in digital marketing strategies such as Search Engine Optimization (SEO),
            social media marketing, and content creation. These strategies will help you connect with a broader audience.
            Utilize platforms like Facebook, Instagram, and LinkedIn to actively engage with your customers, share updates,
            and promote your offerings. Additionally, email marketing and influencer collaborations can be powerful
            tools to expand your digital footprint.</p>

        </div>

        <div className="w-[60%] pr-6 pt-10 md:w-full sm:w-full">
          <img
            src={blog1}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8">
            3. Build Strong Customer Relationships
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            Customer loyalty is the backbone of sustainable business growth. Providing excellent
            customer service and nurturing long-term relationships should be a top priority. Focus on
            exceeding customer expectations by offering personalized experiences and prompt support.
            Satisfied customers are more likely to refer your business to others, generating organic growth
            through word-of-mouth. Implement loyalty programs, seek feedback, and continually improve
            to keep your customers coming back.
          </p>
        </div>

        <div className="w-[60%] pr-6 py-5 md:w-full sm:w-full">
          <img
            src={blog3}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8">
            4. Optimize Your Sales Process
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            A streamlined and efficient sales process can dramatically boost your revenue. Train your
            sales team to understand customer pain points and offer personalized solutions that
            meet their unique needs. Providing value at every stage of the sales funnel will improve
            conversion rates and customer satisfaction.
            Consider using Customer Relationship Management (CRM) tools to manage customer
            interactions, track leads, and streamline the sales process. Automation can also reduce manual
            tasks, freeing up time for more strategic efforts.
          </p>
        </div>

        <div className="w-[60%] pr-6 py-10 md:w-full sm:w-full">
          <img
            src={blog4}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black font-bold my-8 sm:mb-0">
            5. Expand Your Offerings and Adapt
          </p>
          <p className="text-[16px] text-black my-8 sm:text-[14px]">
            As your business grows, consider expanding your product or service offerings. Keep an eye
            on market trends and evolving customer needs, and be ready to adapt. Diversifying your
            offerings not only attracts new customers but also provides more value to existing ones, increasing
            customer lifetime value.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Blog2
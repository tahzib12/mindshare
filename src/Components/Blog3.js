import React from 'react'
import g3 from '../Assets/g3.jpeg';
import blog1 from '../Assets/blog3.1.jpeg';
import blog2 from '../Assets/blog3.2.jpeg';
import blog3 from '../Assets/blog3.3.jpeg';
import blog4 from '../Assets/blog3.4.jpeg';

function Blog3() {
  return (
    <div className='pt-10  w-full h-auto bg-[#f9f5f2] px-20 '>
      <div className='flex justify-center items-start mt-10 py-10 pb-0 w-full'>
        <div className='flex flex-col w-1/2 bg-[#EFF1E1] h-[400px] items-start justify-center px-10'>
          <div className='text-[40px] font-bold text-black mb-6'>Top Tips to Become Rich in 2025</div>
          <p className='text-black text-[16px]'>Everyone dreams of becoming wealthy, but few have a clear strategy on how to achieve that
goal. As we approach 2025, the landscape for wealth creation is evolving rapidly, offering
both challenges and opportunities. To help you get ahead, we’ve compiled a list of actionable
tips that can pave your path to financial success in the coming year.</p>
        </div>
        <img
          src={g3}
          alt="Business Insights Illustration"
          className="w-1/2 h-[400px]"
          loading='lazy'
        />
      </div>


      <div className='bg-white w-full pt-20 px-8'>
        <div className='text-black font-bold text-[25px]'>Introduction</div>
        <div className='flex text-black text-[16px] gap-36 py-10 w-full'>
          <div className='w-[500px] flex flex-col gap-8 justify-between'>
            <p>Remote work is a flexible work style where you work outside a traditional office
              environment. It comes in many forms depending on a company's size, stage, and
              philosophy.</p>
            <p>At one extreme, employees may work from home occasionally. At the other end of the
              spectrum, fully remote employees stop commuting entirely and work whenever and
              wherever they're most productive.</p>
            <p>This article outlines how and why people work remotely, how to find a remote job,
              common misconceptions about remote work and the different types of remote companies.</p>
          </div>
          <div className='w-1/3 flex flex-col gap-10'>
            <p>Introduction</p>
            <p>Why do people work remotely?</p>
            <p>How remote work benefts all</p>
            <p>What jobs can be done remotely?</p>
          </div>
        </div>

        <div className="flex md:flex-row gap-10">
          <div className="w-[60%] pr-6">
            <img
              src={blog1}
              alt="Two people working together at a computer"
              className="w-full h-auto rounded-lg mb-4"
              loading='lazy'
            />
            <p className="text-[23px] text-black font-bold my-8">
              Remote work has gained traction because the coronavirus pandemic forced organizations to adopt it. However, the long-term popularity of remote work is driven by its benefits to employees and employers.
            </p>
            <p className="text-[15px] text-gray-500 my-8 pl-8">
              Mix or Silva Product Designer
            </p>
          </div>
          <div className="w-[40%] mt-6 md:mt-0">
            <h2 className="text-[33px] font-bold text-[#282A8C]">
              Ready to unlock your business's potential?
            </h2>
            <h2 className="text-[40px] font-bold text-[#282A8C] mb-10">
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

        <div className='text-black text-[16px] flex flex-col gap-8 w-[590px]'>
          <p>The most common way to work remotely is to be a remote employee who works full-time
            at a company and receives employee benefits.Remote employees never commute to the
            office. Instead, they work from a home office, co-working space, or coffee shops.</p>
          <p>Remote workers may be allowed to work remotely from anywhere or be bound to specific
            countries or time zones.</p>
          <p>Another option is to be a contractor who works full-time for a company for a set period.
            Contractors typically don't receive employee benefits like healthcare, parental leave, etc.</p>
          <p>However, many fully remote companies employ their staff as contractors to avoid
            international tax compliance and payroll complexities while still offering remote
            employee benefts or additional compensation as a substitute.</p>
          <p>Digital nomads earn their living online while traveling, working whenever and wherever
            they please.Digital nomads can be full-time employees, freelancers contractors, or
            entrepreneurs</p>
          <p>If you run your own business, you can choose to work remotely. It's never been easier to
            manage a remote workforce, and it's a fantastic way to attract and retain talent. Many
            employees got a taste of remote work during the coronavirus pandemic and don't want
            to return to the office.</p>
          <p>Freelancers can work remotely by contracting out at an hourly rate or charge by the
            project. Freelancers are typically self-employed but can work through employmentagencies or marketplaces.</p>
          <p>Telecommuting or working from home (WFH) is becoming increasingly common. For
            example, you may ask to work from home Monday through Thursday but head into the
            office on Friday to catch up with co-workers.</p>
        </div>

        <div className="w-[60%] pr-6 pt-10">
          <img
            src={blog2}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black my-8">
            Why do people work remotely?
          </p>
          <p className="text-[15px] text-black my-8">
            Remote work has gained traction because the coronavirus pandemic forced
            organizations to adopt it. However, the long-term popularity of remote work is driven by
            its benefits to employees and employers.
          </p>
        </div>

        <div className="w-[60%] pr-6 py-5">
          <img
            src={blog3}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[23px] text-black my-8">
            How remote work benefts all
          </p>
          <p className="text-[15px] text-black my-8">
            Remote work benefts employees by improving their work-life balance.Remote workers
            have more control over their schedules and can adapt their work hours to suit their
            lifestyles. Working from home also means you have control over your work environment
            which can lead to high levels of productivity and performance.
          </p>
        </div>


        <div className='flex flex-col text-black text-[16px] w-[590px] gap-8'>
          <p>Open office plans are penny-wise and pound-foolish. The overwhelming scientific
            consensus is that open-plan offices reduce productivity by at least 15%.</p>
          <p>You'll also spend less time commuting saving nearly ten days per year (based on the
            average commute time for the U.S. workforce of 26.1 minutes each way). You can invest
            the time you save commuting into improving your health by exercising, preparing
            healthy meals, or spending time with friends and family.</p>
          <p>Less commuting leads to lower environmental impact. KPMG estimates 13 to 27 million
            people will continue working from home, reducing commuting by 70 to 140 billion miles
            per year. Less commuting also means less air pollution. Air pollution has adverse effects
            on numerous health outcomes and general morality that are widely documented and has
            high cognitive costs.</p>
          <p>Fully remote workers who aren't bound by specific time zones or countries can work from
            anywhere and can move to cheaper locales or live where they want instead of where is
            close to the office. Even if you are bound to a country or time zone, you can still move
            somewhere with lower living costs.</p>
          <p>Remote work is a great way to avoid paying expensive rent or having a large mortgage.
            You'll also save money in other ways. The average American commuter spends as much
            as $5,000 per year on their daily commute - including the cost of gas, maintenance costs,
            public transport, etc.</p>
          <p>Not only can you save money, but you can also earn more money. There's a myth that
            remote workers are underpaid, but reality shows the opposite. Research from PayScale
            that controlled for job title and location found employees who work remotely make 1.9%
            more than their equivalent in-office colleagues.</p>
          <p>Remote workers also have access to more job opportunities.When your job search isn't
            bound by your ability to commute to the office, you can find a role that's perfect for you,
            and the cOviD pandemic has only increased the number of remote jobs.</p>
          <p>And because roles aren't bound by geographic location, remote companies tend to be
            more inclusive and diverse giving you exposure to more cultures and people from
            different backgrounds. A great example of this is GitLab which has remote employees in
            over 68 countries</p>
          <p>If you're lucky enough to work at a global remote company, you'll build strong bonds
            with people from around the world. If you've ever played video games, you know you
            don't need to be physically around someone to become good friends.</p>
          <p>You'llprobably also experience less office politics.While avoiding office politics
            completely is impossible, remote teams tend to hire great communicators which reduces
            miscommunication and politicking.</p>
          <p>And because you can't tap your colleagues on the shoulder, you'll become more self
            sufficient, a better communicator, and a more compelling writer.</p>
        </div>

        <div className="w-[60%] pr-6 py-10">
          <img
            src={blog4}
            alt="Two people working together at a computer"
            className="w-full h-auto rounded-lg mb-4"
            loading='lazy'
          />
          <p className="text-[36px] text-black my-8 font-bold">
            What jobs can be done remotely?
          </p>
          <p className="text-[15px] text-black my-8">
            Remote work has never been more popular, forcing companies to adapt their jobs to fit
            into a remote-first world. Any job where you can do most work of your work online is fair
            game, but below are popular remote jobs and industries.
          </p>
          <p className="text-[15px] text-black my-8">
            Popular remote jobs: Developers, software engineering, sales, customer success, product management, user research, marketing, design product designers, and finance.
          </p>
          <p className="text-[15px] text-black my-8">
            Popular industries for remote companies: Saas, marketplaces enterprise software,
            eCommerce, software, blockchain, cryptocurrency, web3, fintech, financial services, and
            education.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Blog3
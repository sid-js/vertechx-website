import React from 'react';
import Navbar from '@/Components/Navbar';
import aboutimg from '../public/vertechx-about.png';
import Image from 'next/image';

const Home = () => {
  return (
    <main className='flex flex-col w-full'>
      <Navbar />
      <header className='z-20 bg-[url(/grid.svg)] min-h-screen bg-cover bg-center bg-no-repeat bg-fixed'>
        <div className='min-h-screen'>
          <div className='flex items-center justify-center h-full min-h-screen top-layer'>
            <span className='bg-clip-text text-transparent font-space text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer '>
              TECH IN MOMENTUM
            </span>
          </div>
        </div>
      </header>

      <section className=''>
        <div className='flex items-center justify-center flex-col '>
          <span className='text-white text-7xl font-medium font-space mt-8'>
            ABOUT
          </span>
          <span className='text-5xl font-medium font-space text-[#535353]'>
            VERTECHX
          </span>
        </div>
        <article className='flex items-center justify-center mt-6 '>
          <div className='flex items-center justify-center w-[80%] gap-10 bg-white bg-opacity-5 backdrop-blur-sm border h-full border-gray-700 rounded-lg p-14'>
            <div className='flex items-center justify-center text-left basis-1/2 text-xl'>
              <span className='text-white'>
                VertechX is an annual technical fest conducted by MVJ College of
                Engineering in Bangalore, India. It is a platform for students
                and tech enthusiasts from different colleges and universities to
                showcase their technical skills and knowledge. The fest includes
                a series of competitions, workshops, and seminars in various
                fields of technology such as robotics, artificial intelligence,
                machine learning, and cybersecurity. Participants get a chance
                to interact with industry experts and learn about the latest
                advancements in technology. VertechX also provides opportunities
                for networking, career guidance, and exposure to the industry.
                The event attracts a large number of participants and is
                considered one of the most prestigious technical fests in the
                region.
              </span>
            </div>
            <div className='basis-1/2'>
              <Image src={aboutimg} width={1430} height={953} alt='about' />
            </div>
          </div>
        </article>
      </section>
      <section className=''>
        <div className='flex flex-col items-center justify-center'>
          <span className='mt-6 text-white text-7xl font-space font-medium'>
            OUR
          </span>
          <span className='text-5xl font-medium font-space text-[#535353]'>
            SPONSORS
          </span>
        </div>
        <div className='flex justify-center items-center gap-64 mt-6'>
          <div className='w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent '>
            a
          </div>
          <div className='w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent'>
            a
          </div>
          <div className='w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent'>
            a
          </div>
        </div>
        <div className='flex justify-center items-center gap-64 mt-40'>
          <div className='w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent '>
            a
          </div>
          <div className='w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent '>
            a
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

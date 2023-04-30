import MainLayout from '@/Components/MainLayout';
import ReactPlayer from 'react-player'
import Head from 'next/head';
import Image from 'next/image';
const About = () => {
  return (
    <MainLayout>
       <div className='w-full  bg-no-repeat items-center bg-cover md:px-32 mt-24 flex flex-col  dark:text-white min-h-screen h-full gap-8 p-6'>
        <div className='flex flex-col md:flex-row-reverse justify-between gap-4 md:gap-36 w-[95%] md:w-[100%] items-start h-max bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-10'>
          <div className='basis-1/3 bg-blue-500 rounded-lg h-max'>
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            width={400}
            height={700}
            className='w-full h-full'
            url={'https://ik.imagekit.io/vertechx/gokart.mp4https://ik.imagekit.io/vertechx/vertechx-about.mp4?updatedAt=1682004280148'}
          />
          </div>
          <div className='basis-2/3  flex flex-col gap-2 justify-between items-start min-h-full h-max'>
            <div className='flex flex-col h-max'>
              <h1 className=' text-4xl md:text-6xl font-semibold'>
              About | Vertechx 11.0
              </h1>
              <p className='text-xl md:text-2xl mt-6 '>
                <br />
                The place where it all began, the origin of life, and the unexplored realms. What can we gain by sailing to the moon if we are not able to cross the abyss that separates us from ourselves? This is the most important of all voyages of discovery, and without it, all the rest are not only useless but disastrous. There is a fifth dimension, beyond that which is known to man. It is a dimension as vast as space and as timeless as infinity. It is the middle ground between light and shadow, between science and superstition. Let's unravel these mysteries of the universe that is purely geometric- a beautiful shape twisting around and dancing over space-time.
            Hold your breaths and get ready to launch yourselves into this abyssal realm and embark upon this expedition at the 11th edition of Vertechx. Mark your calendars! 19th-20th May 2023 it is!
              </p>
            </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default About;

import aboutimg from '../public/gocart.JPG';
import Image from 'next/image';

const about = () => {
  return (
    <>
      <section className='h-screen snap-start shrink-0 z-10 pt-20'>
        <div className='flex flex-col items-start justify-center w-full mt-8'>

        </div>
        <article className='flex items-center justify-center mt-6'>
          <div className='flex flex-col justify-center w-full gap-10 bg-white bg-opacity-5 backdrop-blur-sm border h-full border-gray-700 rounded-lg p-14'>
            <div className='text-left text-white text-7xl font-medium mb-9'>
              <span className='absolute top-0 left-0 mt-10 ml-10'>
                What is vertechx?
              </span>
            </div>
            <div className='flex items-center justify-center text-left basis-1/2 text-xl'>
              <span className='text-white'>
                VertechX is an annual technical fest conducted by MVJ College of Engineering in Bangalore,
                 India. It is a platform for students and tech enthusiasts from different colleges and universities 
                 to showcase their technical skills and knowledge. The fest includes a series of competitions, workshops,
                  and seminars in various fields of technology such as robotics, artificial intelligence, machine learning,
                 and cybersecurity.
              </span>
            </div>
            <div className='basis-1/2'>
              <Image src={aboutimg} width={1430} height={400} alt='about' />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default about;

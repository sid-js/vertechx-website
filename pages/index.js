import React from 'react';
import Navbar from '@/Components/Navbar';
import aboutimg from '../public/vertechx-about.png';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import FeaturedEvents from '@/Components/FeaturedEvents';
import MainLayout from '@/Components/MainLayout';
import { prisma } from '@/prisma/client';
import Link from 'next/link';
import { VscGithub } from 'react-icons/vsc';
import { HiOutlineCursorClick } from 'react-icons/hi';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Home = ({ events }) => {
  return (
    <>
      <Head>
        <title>VertechX - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='TECH IN MOMENTUM' />
        <meta name='keywords' content='TECH IN MOMENTUM' />
        <meta
          property='og:image'
          content='https://vertechx.vercel.app/public/logo.svg'
        />
      </Head>
      <MainLayout>
        <main className='flex flex-col items-center w-full h-screen px-4 md:px-32 '>
          <header className='flex flex-col w-full h-screen justify-center items-center shrink-0 relative'>
            <div className='w-full h-1/2 blur-lg bg-black absolute opacity-10 top-50 z-[-1] rounded-full'></div>
            <h1 className='bg-clip-text drop-shadow-sm text-transparent text-center self-center font-space text-6xl md:text-8xl lg:text-9xl font-extrabold  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 cursor-pointer '>
              TECH IN MOMENTUM
            </h1>
            <p className='text-white text-center self-center drop-shadow-md  font-space text-xl md:text-2xl lg:text-2xl font-regular  bg-gradient-to-r cursor-pointer '>
              Experience the future at VertechX: The ultimate annual tech fest
              where students flaunt their skills in robotics, AI, ML, and
              cybersecurity and more!
            </p>
          </header>

          <section className='h-screen shrink-0'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center justify-center  w-full '>
              <span className='text-slate-300 text-2xl md:text-7xl font-semibold font-space'>
                PRESENTING
              </span>
              <span className='bg-clip-text text-transparent text-6xl md:text-7xl font-bold font-space bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                VERTECHX
              </span>
            </div>
            <article className='flex items-center justify-center mt-6 overflow-x-auto'>
              <div className='flex flex-col lg:flex-row items-center justify-center max-w-screen w-full gap-10 bg-white bg-opacity-10 backdrop-blur-md border h-full border-gray-700 rounded-lg p-4 md:p-6 '>
                <div className='basis-3/5'>
                  <ReactPlayer
                    playing={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    className='w-full h-full'
                    url='https://ik.imagekit.io/vertechx/gokart.mp4'
                  />
                </div>
                <div className='flex items-center justify-center text-left basis-2/5 text-wrap md:text-xl'>
                  <span className='text-white'>
                    VertechX is an annual technical fest conducted by MVJ
                    College of Engineering in Bangalore, India. It is a platform
                    for students and tech enthusiasts from different colleges
                    and universities to showcase their technical skills and
                    knowledge. The fest includes a series of competitions,
                    workshops, and seminars in various fields of technology such
                    as robotics, artificial intelligence, machine learning, and
                    cybersecurity.
                  </span>
                </div>
              </div>
            </article>
          </section>
          <section className='max-h-screen  mb-96 shrink-0'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center justify-center w-full '>
              <span className='text-white text-2xl md:text-7xl font-semibold font-space'>
                MARK YOUR CALENDARS
              </span>
              <span className='bg-clip-text w-full items-center md:items-end text-transparent flex flex-col text-6xl md:text-9xl font-bold font-space bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                <span>MAY</span>
                <span>18 & 19</span>
              </span>
            </div>
          </section>
          <footer className='w-full bg-cover bg-center text-white bg-black bg-opacity-40 backdrop-blur-lg border border-gray-700 rounded-lg p-8 md:p-10'>
            <div className='flex flex-col md:flex-row justify-start items-start gap-2 md:gap-14 w-[95%] md:w-[100%] h-max '>
              <div className='lg:flex lg:items-center lg:justify-start'>
                <div className='flex flex-col justify-start items-start lg:justify-start md:max-w-md'>
                  <Link href={'https://mvjce.edu.in'}>
                    <img
                      className='h-24 w-auto'
                      src='/mvjlogo.svg'
                      alt='VertechX logo'
                    />
                  </Link>

                  <div className=''>
                    <ul className='mt-4'>
                      <li className='mt-4'>
                        <Link
                          href='https://www.google.com/maps/place/MVJ+College+of+Engineering/@12.984114,77.7599852,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae0e0ddee6891b:0xbde773e8a7f7189d!8m2!3d12.984114!4d77.7621739!16s%2Fm%2F0b6ltsx'
                          className='hover:underline text-lg text-gray-300'
                        >
                          {' '}
                          Near ITPB, Channasandra, Bangalore - 560067
                          <br /> T: +91 80 4299 1000
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hidden h-36 lg:block border-l-2 border-gray-500 rounded-xl  ml-8'></div>
              </div>
              <div className='flex flex-col justify-center items-start md:flex-row md:justify-center md:items-start'>
                <div className='mt-8 lg:mt-0'>
                  <div className='tracking-wide text-2xl text-purple-400 font-bold '>
                    Social Media
                  </div>
                  <ul className='mt-4'>
                    <li className='mt-4'>
                      <Link
                        href='https://www.youtube.com/@vertechxofficial8784'
                        className='hover:underline text-xl text-gray-300'
                      >
                        Youtube
                      </Link>
                    </li>
                    <li className='mt-4'>
                      <Link
                        href='https://www.instagram.com/vertechx/'
                        className='hover:underline text-xl text-gray-300'
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='mt-8 md:mt-0 md:ml-10'>
                  <div className='tracking-wide text-2xl text-purple-400 font-bold '>
                    Links
                  </div>
                  <ul className='mt-4'>
                    <li className='mt-4'>
                      <Link
                        href='/'
                        className='hover:underline text-xl text-gray-300'
                      >
                        Home
                      </Link>
                    </li>
                    <li className='mt-4'>
                      <Link
                        href='/about'
                        className='hover:underline text-xl text-gray-300'
                      >
                        About
                      </Link>
                    </li>
                    <li className='mt-4'>
                      <Link
                        href='/events'
                        className='hover:underline text-xl text-gray-300'
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='mt-8 md:mt-0 md:ml-10'>
                  <div className='tracking-wide text-2xl text-purple-400 font-bold '>
                    Visitors Registration
                  </div>
                  <ul className='mt-4'>
                    <li className='mt-4'>
                      <Link
                        href='https://forms.gle/oPpUedEVqXprKHRZ6'
                        className='hover:underline text-xl text-gray-300'
                      >
                        {' '}
                        Register now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link
              href={'https://github.com/sid-js/vertechx-website'}
              className='text-left pt-12 md:pt-28 text-gray-300 text-base md:text-lg flex flex-row gap-4 items-center justify-start  hover:text-purple-400'
            >
              <VscGithub size={30} />
              <span className='flex flex-row gap-4'>
                Made with love by <br />
                VertechX Dev Team (GitHub)
              </span>
            </Link>
          </footer>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let events;
  try {
    events = await prisma.event.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        name: true,
        slug: true,
        poster: true,
        date: true,
        registrationFee: true,
        prizeMoney: true,
        departmentId: true,
        department: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(events);
    return {
      props: { events },
      revalidate: 30, // will be passed to the page component as props
    };
  } catch (e) {
    console.log(e);
  }
}

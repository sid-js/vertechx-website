import React from 'react';
import samplePoster from '../../public/sample-poster.jpg';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import moment from 'moment/moment';
import { FiCalendar } from 'react-icons/fi';
import { TbCoinRupee } from 'react-icons/tb';
import parse from 'html-react-parser';
import Navbar from '@/Components/Navbar';

function EventPage({ eventData }) {
  console.log(eventData);
  return (
    <div className='w-full  bg-no-repeat items-center bg-cover md:px-32 flex flex-col  dark:text-white min-h-screen h-full gap-8 p-3'>
      <Navbar />
      <div className='flex flex-col md:flex-row-reverse justify-between gap-32 md:gap-36 w-[95%] md:w-[100%] items-start min-h-full bg-white bg-opacity-5 backdrop-blur-sm border h-full border-gray-700 rounded-lg p-8 md:p-10'>
        <div className='basis-1/3 bg-blue-500 rounded-lg max-h-min'>
          <Image
            className='object-cover rounded-lg'
            alt='poster'
            src={samplePoster}
          />
        </div>
        <div className='basis-2/3  flex flex-col gap-2 justify-between items-start min-h-full'>
          <div className='flex flex-col'>
            <h1 className=' text-4xl md:text-6xl font-semibold'>
              {eventData.name}
            </h1>
            <h3 className=' text-xl md:text-2xl font-normal text-slate-400'>
              {eventData.department.name}
            </h3>
            <div className='text-xl md:text-2xl mt-6 flex flex-row gap-2 items-center'>
              <FiCalendar className='text-purple-500' />
              <span>
                {moment(eventData.date).format('MMMM Do YYYY, h:mm: a')}
              </span>
            </div>
            <p className='text-xl md:text-2xl mt-6'>
              {eventData.summary}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in.
            </p>
          </div>

          <div className='flex flex-col w-full gap-6'>
            <div className='text-xl md:text-2xl mt-6 flex flex-row gap-2 items-center'>
              <TbCoinRupee className='text-purple-500' />
              <span>Registration Fee : </span>
              <span>{eventData.registrationFee}</span>
            </div>
            <Link legacyBehavior={true} href={eventData.formLink}>
              <a
                target='_blank'
                ref
                className='w-full md:w-2/5 flex flex-row justify-center items-center rounded-md text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-pointer py-2 px-4'
              >
                Register Now
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between gap-4 w-[95%] md:w-full items-start bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-10'>
        <h3 className=' text-2xl md:text-3xl font-normal text-slate-100'>
          Event Overview
        </h3>
        <div className='prose prose-neutral dark:prose-invert prose-xl'>
          {parse(eventData.content)}
        </div>
      </div>
    </div>
  );
}

export default EventPage;

export const getServerSideProps = async (ctx) => {
  const slug = ctx.params.slug;
  const prisma = new PrismaClient();
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
    include: {
      department: true,
    },
  });
  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      eventData: event,
    },
  };
};

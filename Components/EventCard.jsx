import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { TbTrophy } from 'react-icons/tb';

const EventCard = ({ eventData }) => {
  return (
    <Link
      href={`/events/${eventData.slug}`}
      className='flex flex-col justify-between mx-auto gap-4 hover:scale-105 group transition-all duration-200  text-white  items-center max-h-[520px] max-w-[380px] bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-6'
    >
      <div className='basis-1/3  rounded-lg'>
        <Image
          className='object-cover rounded-lg aspect-auto w-60'
          alt='poster'
          width={904}
          height={1280}
          src={eventData.poster}
        />
      </div>
      <div className='basis-2/3  flex flex-col gap-2 justify-center items-start self-start'>
        <div className='flex flex-col'>
          <h1 className=' text-2xl  font-semibold group-hover:text-purple-500'>
            {eventData.name}
          </h1>
          <h3 className=' text-lg  font-normal text-slate-400'>
            {eventData.department.name}
          </h3>
          <div className='text-md md:text-md mt-2 flex flex-row gap-2 items-center'>
            <FiCalendar className='text-purple-500' />
            <span>{moment(eventData.date).format('MMMM Do YYYY')}</span>
          </div>
          <div className='text-md md:text-md mt-2 flex flex-row gap-2 items-center'>
            <TbTrophy className='text-purple-500' />
            <span>{eventData.prizeMoney + ' INR'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

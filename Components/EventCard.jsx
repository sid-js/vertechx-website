import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const EventCard = ({ eventData }) => {
  return (
    <div className='flex flex-col justify-between mx-auto gap-4  text-white  items-center max-h-[450px] max-w-[290px] bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-6'>
      <div className='basis-1/3 bg-blue-500 rounded-lg'>
        <Image
          className='object-cover rounded-lg aspect-auto w-60'
          alt='poster'
          width={904}
          height={1280}
          src={eventData.poster}
        />
      </div>
      <div className='basis-2/3  flex flex-col gap-2 justify-center items-start'>
        <div className='flex flex-col'>
          <h1 className=' text-xl  font-semibold'>{eventData.name}</h1>
          <h3 className=' text-lg  font-normal text-slate-400'>
            {eventData.department.name}
          </h3>
          <div className='text-lg md:text-2xl mt-6 flex flex-row gap-2 items-center'>
            <FiCalendar className='text-purple-500' />
            <span>
              {moment(eventData.date).format('MMMM Do YYYY, h:mm: a')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

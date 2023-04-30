import React from 'react';
import EventCard from '@/Components/EventCard';
import 'react-multi-carousel/lib/styles.css';

import deparments from '@/constants/departments';

function EventsGrid({ events, departmentId = '' }) {
  return (
    <section id='Featured Events' className='w-full flex flex-col gap-5 h-full'>
      <span className='text-white text-3xl md:text-5xl font-semibold font-space self-center md:self-start'>
        {departmentId
          ? deparments.filter((department) => department.id === departmentId)[0]
              .name
          : 'All Events'}
      </span>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-y-scroll scrollbar-hide h-full p-4'>
        {events?.map((event, index) => {
          console.log(departmentId);
          if (event.departmentId === departmentId || departmentId === '') {
            return <EventCard eventData={event} key={index} />;
          }
        })}
      </div>
    </section>
  );
}

export default EventsGrid;

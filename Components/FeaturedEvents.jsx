import React from 'react';
import EventCard from '@/Components/EventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function FeaturedEvents({ events }) {
  let prevDept = '';
  return (
    <section
      id='Featured Events'
      className='w-full flex flex-col gap-4 min-h-screen'
    >
      <h1 className='text-4xl md:text-7xl text-white font-semibold text-center'>
        FEATURED EVENTS
      </h1>
      <div>
        <Carousel
          responsive={responsive}
          className='w-full gap-10 py-8'
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
          showDots={true}
          swipeable={true}
          renderDotsOutside={true}
          dotListClass='dots'
        >
          {
            events?.map((event, index) => {
              console.log(event, index);
              if(!(event.departmentId === prevDept)){
                prevDept = event.departmentId;
                return <EventCard eventData={event} />;
              }
              else
                return;
            })
          }
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedEvents;

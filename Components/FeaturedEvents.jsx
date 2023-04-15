import React from 'react';
import EventCard from '@/Components/EventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const sampleEvent = {
  id: 'clgacco97000394icyi0ftrhx',
  name: 'Capture with Linux',
  slug: 'capture-with-linux',
  summary:
    "Capture with Linux is all about finding and exploiting various weaknesses and loopholes in the system. Let's find the embedded strings using Linux.",
  content: `<p><strong>Oh no, it looks like the VertechX team forgot to send us the content for this section.</strong> Maybe they're off searching for the Loch Ness Monster or trying to find the source of the Nile. Who knows? In the meantime, here's a weird Wikipedia article to entertain you: did you know that in the 19th century, some people believed that a race of mole people lived beneath the streets of London? Yes, you read that right. It was believed that these mole people had their own society and even a royal family. Of course, there's no evidence to support these claims, but it's still a fascinating and bizarre piece of history.</p><p style="text-align: start">Speaking of bizarre things, have you ever heard of the Voynich Manuscript? It's a book that was written in an unknown script and contains strange illustrations of plants, animals, and other objects. Despite years of study, no one has been able to decipher the manuscript, and its origin and purpose remain a mystery.</p><p style="text-align: start">Anyway, we'll keep waiting for that content from the VertechX team. In the meantime, we hope they're not lost in some mysterious underground tunnel or trapped in a puzzle box somewhere. We'll just have to make do with weird Wikipedia articles for now.</p>`,
  poster:
    'https://ik.imagekit.io/vertechx/capture-with-linux?updatedAt=1681101151134',
  type: 'event',
  date: new Date(),
  location: 'CSE Lab 256',
  registrationFee: '200',
  maximumRegistration: 100,
  formLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  createdAt: new Date(),
  departmentId: 'clg0c7igq000494xw4v4vjfif',
  department: { id: 'clg0c7igq000494xw4v4vjfif', name: 'Department of CSE' },
};
function FeaturedEvents() {
  return (
    <section id='Featured Events' className='w-full'>
      <h1 className='text-4xl text-white font-bold mb-10'>Featured Events</h1>
      <Carousel
        responsive={responsive}
        className='w-full'
        autoPlay={true}
        autoPlaySpeed={4000}
        showDots={true}
        renderDotsOutside={true}
        renderButtonGroupOutside={true}
      >
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
        <EventCard eventData={sampleEvent} />
      </Carousel>
    </section>
  );
}

export default FeaturedEvents;

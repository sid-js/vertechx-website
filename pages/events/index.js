import DepartmentFilterSidebar from '@/Components/DepartmentFilterSidebar';
import EventsGrid from '@/Components/EventsGrid';
import { prisma } from '@/prisma/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

function AllEventsPage({ events }) {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const onDepartmentChange = (departmentId) => {
    setSelectedDepartment(departmentId);
    console.log(departmentId);
  };
  return (
    <>
      <Head>
        <title>Events -VertechX</title>
      </Head>
      <main className='mt-36 px-3 md:px-20 flex flex-row gap-10 w-full'>
        <DepartmentFilterSidebar
          className='basis-1/3'
          selected={selectedDepartment}
          onDepartmentChange={onDepartmentChange}
        />
        <EventsGrid events={events} departmentId={selectedDepartment} />
      </main>
    </>
  );
}

export default AllEventsPage;

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

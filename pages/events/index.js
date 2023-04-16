import DepartmentFilterSidebar from '@/Components/DepartmentFilterSidebar';
import DepartmentFilterTabs from '@/Components/DepartmentFilterTabs';
import EventsGrid from '@/Components/EventsGrid';
import MainLayout from '@/Components/MainLayout';
import { prisma } from '@/prisma/client';
import { init } from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
const deparments = [
  {
    name: 'All',
    id: '',
  },
  {
    name: 'Computer Science',
    id: 'clg0c7igq000494xw4v4vjfif',
  },
  {
    name: 'Electronics & Communication',
    id: 'clghw9sis0002jj085k1pmlm2',
  },
  {
    name: 'Mechanical',
    id: 'clghwa0b70004jj087r2enlb2',
  },
  {
    name: 'Science Humanities',
    id: 'clghwaltw0006jj08g4w8p408',
  },
  {
    name: 'Information Science',
    id: 'clghwaz2h0008jj08u2mkfi9o',
  },
  {
    name: 'Aeronautical & Aerospace',
    id: 'clghwbi84000ajj08sz57ub0e',
  },
  {
    name: 'Chemical',
    id: 'clghwbr7o000cjj08byfykcg4',
  },
  {
    name: 'Civil',
    id: 'clghwc5ex000ejj08qc36ncu1',
  },
  {
    name: 'Electrical & Electronics',
    id: 'clghwd5km000gjj089ndxj2ry',
  },
];

function AllEventsPage({ events }) {
  const router = useRouter();
  const initialDepartment = router.query.initialDepartment;
  console.log(initialDepartment);
  const initial = initialDepartment ? initialDepartment : '';
  console.log(initial);
  const [selectedDepartment, setSelectedDepartment] = useState(initial);
  const onDepartmentChange = (departmentId) => {
    setSelectedDepartment(departmentId);
    console.log(departmentId);
  };
  return (
    <>
      <Head>
        <title>Events -VertechX</title>
      </Head>
      <MainLayout>
        <main className='mt-28 px-3 md:px-20 flex flex-col gap-10 w-full h-full'>
          <div className='flex flex-col md:flex-row gap-10 w-full h-full'>
            <DepartmentFilterSidebar
              className='basis-1/3'
              selected={selectedDepartment}
              onDepartmentChange={onDepartmentChange}
            />
            <DepartmentFilterTabs
              selected={selectedDepartment}
              onDepartmentChange={onDepartmentChange}
            />
            <EventsGrid events={events} departmentId={selectedDepartment} />
          </div>
        </main>
      </MainLayout>
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

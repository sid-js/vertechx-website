import GridEvents from '@/Components/GridEvents';
import Head from 'next/head';

function AllEventsPage() {
  return (
    <>
      <Head>
        <title>Events -VertechX</title>
      </Head>
      <main className='mt-36 px-3 md:px-20 flex flex-col w-full'>
        <GridEvents />
      </main>
    </>
  );
}

export default AllEventsPage;

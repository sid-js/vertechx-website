import React from 'react';

function AllEventsPage() {
  return <div>AllEventsPage</div>;
}

export default AllEventsPage;

export const getServerSideProps = async (ctx) => {
  const prisma = new PrismaClient();
  const events = await prisma.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      name: true,
      slug: true,
      poster: true,
      date: true,
      registrationFee: true,
      department: {
        select: {
          name: true,
        },
      },
    },
  });
  return {
    props: {
      events,
    },
  };
};

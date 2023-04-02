import React from 'react'

function AllEventsPage() {
  return (
    <div>AllEventsPage</div>
  )
}

export default AllEventsPage


export const getServerSideProps = async (ctx) => {
    const prisma = new PrismaClient();
    const events = await prisma.event.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
    return {
        props: {
            events,
        }
    }
}
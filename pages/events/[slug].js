import React from 'react'
import samplePoster from "../../public/sample-poster.jpg"
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

function EventPage(props) {
  return (
    <div className='w-full px-32 flex flex-col pt-20 dark:bg-gray-950 dark:text-white h-screen'>
        <div className='flex flex-row justify-center gap-4 items-start'>
        <div className='basis-2/3  flex flex-col gap-4 justify-start items-start'>
            <h1 className='text-5xl font-semibold'>DRONE RACING</h1>
            <h3 className='text-2xl font-normal text-slate-300'>Department of Aeronautics</h3>
            <h3 className='text-2xl font-normal text-slate-300'></h3>
        </div>
        <div className='basis-1/3 bg-blue-500 rounded-lg'>
            <Image className='object-cover rounded-lg' alt='poster' src={samplePoster}/>
        </div>
        </div>
        <div>
            Bottom
        </div>
    </div>
  )
}

export default EventPage




export const getServerSideProps = async (ctx) => {
  const slug = ctx.params.slug;
  const prisma = new PrismaClient();
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  })
  if(!event){
    return notFound();
  }
  return {
    props: {
      id: event.id,
      name: event.name,
      slug: event.slug,
      summary: event.summary,
      content: event.content,
      poster: event.poster,
      type: event.type,
      date: event.date,
      location: event.location,
      registrationFee: event.registrationFee,
      maximumRegistration: event.maximumRegistration,
      formLink: event.formLink,
      createdAt: event.createdAt,
      department: event.department,
      departmentId: event.departmentId,
    }
  }
}


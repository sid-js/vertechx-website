import React from "react";
import samplePoster from "../../public/sample-poster.jpg";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

function EventPage({eventData}) {
  console.log(eventData)
  return (
    <div className="w-full px-32 flex flex-col pt-20 dark:bg-gray-950 dark:text-white h-screen">
      <div className="flex flex-row justify-center gap-4 items-start">
        <div className="basis-2/3  flex flex-col gap-4 justify-start items-start">
          <h1 className="text-5xl font-semibold">{eventData.name}</h1>
          <h3 className="text-2xl font-normal text-slate-300">
            Department of Aeronautics
          </h3>
          <h3 className="text-2xl font-normal text-slate-300"></h3>
        </div>
        <div className="basis-1/3 bg-blue-500 rounded-lg">
          <Image
            className="object-cover rounded-lg"
            alt="poster"
            src={samplePoster}
          />
        </div>
      </div>
      <div>Bottom</div>
    </div>
  );
}

export default EventPage;

export const getServerSideProps = async (ctx) => {
  const slug = ctx.params.slug;
  const prisma = new PrismaClient();
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
    include:{
      department:true
    },
  });
  if (!event) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      eventData: event
    },
  };
};

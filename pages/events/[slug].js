import React from "react";
import samplePoster from "../../public/sample-poster.jpg";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import moment from "moment/moment";
import { FiCalendar } from "react-icons/fi";

function EventPage({ eventData }) {
  console.log(eventData);
  return (
    <div className="w-full bg-[url('/bgtry.jpg')] bg-opacity-25 bg-no-repeat bg-cover px-32 flex flex-col pt-20 bg-[#111111] dark:text-white h-screen">
      <div className="flex flex-row justify-between gap-36 w-full items-start bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-10">
        <div className="basis-1/3 bg-blue-500 rounded-lg max-h-min">
          <Image
            className="object-cover rounded-lg"
            alt="poster"
            src={samplePoster}
          />
        </div>
        <div className="basis-2/3  flex flex-col gap-2 justify-start items-start">
          <h1 className="text-6xl font-semibold">{eventData.name}</h1>
          <h3 className="text-2xl font-normal text-slate-400">
            {eventData.department.name}
          </h3>
          <div className="text-2xl mt-6 flex flex-row gap-2 items-center">
            <FiCalendar className="text-purple-500" />
            <span>
              {moment(eventData.date).format("MMMM Do YYYY, h:mm: a")}
            </span>
          </div>
          <p className="text-2xl mt-6">{eventData.summary}</p>
          <Link
            href={eventData.formLink}
            className=" w-1/3 flex flex-row justify-center items-center rounded-sm text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-pointer py-2 px-4"
          >
            Register Now
          </Link>
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
    include: {
      department: true,
    },
  });
  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      eventData: event,
    },
  };
};

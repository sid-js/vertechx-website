import React from "react";
import Navbar from "@/Components/Navbar";
import aboutimg from "../public/vertechx-about.png";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>VertechX - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="TECH IN MOMENTUM" />
        <meta name="keywords" content="TECH IN MOMENTUM" />
        <meta
          property="og:image"
          content="https://vertechx.vercel.app/public/logo.svg"
        />
      </Head>
      <div className="w-full ">
        <main className="flex flex-col items-center w-full h-screen px-14 md:px-32 snap-y snap-mandatory ">
          <header className="flex flex-col w-full h-screen justify-center items-center snap-start shrink-0">
            <h1 className="bg-clip-text text-transparent text-center self-center font-space text-6xl md:text-8xl lg:text-9xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer ">
              TECH IN MOMENTUM
            </h1>
          </header>

          <section className="h-screen snap-start shrink-0">
            <div className="flex flex-col items-start justify-center  w-full ">
              <span className="text-white text-4xl md:text-7xl font-medium font-space mt-8">
                PRESENTING VERTECHX
              </span>
            </div>
            <article className="flex items-center justify-center mt-6 ">
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 bg-white bg-opacity-5 backdrop-blur-sm border h-full border-gray-700 rounded-lg p-7 md:p-14 ">
                <div className="basis-1/2 w-full ">
                  <Image src={aboutimg} width={1430} height={953} alt="about" />
                </div>
                <div className="flex items-center justify-center text-left basis-1/2 text-wrap md:text-xl">
                  <span className="text-white">
                    VertechX is an annual technical fest conducted by MVJ
                    College of Engineering in Bangalore, India. It is a platform
                    for students and tech enthusiasts from different colleges
                    and universities to showcase their technical skills and
                    knowledge. The fest includes a series of competitions,
                    workshops, and seminars in various fields of technology such
                    as robotics, artificial intelligence, machine learning, and
                    cybersecurity.
                  </span>
                </div>
              </div>
            </article>
          </section>
          <section className="snap-start w-full ">
            <div className="flex flex-col items-center justify-center">
              <span className="mt-6 text-white text-7xl font-space font-medium">
                OUR
              </span>
              <span className="text-5xl font-medium font-space text-[#535353]">
                SPONSORS
              </span>
            </div>
            <div className="flex justify-center items-center gap:32 md:gap-64 mt-6 flex-wrap">
              <div className="w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent ">
                a
              </div>
              <div className="w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent">
                a
              </div>
              <div className="w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent">
                a
              </div>
            </div>
            <div className="flex justify-center items-center gap-64 mt-40">
              <div className="w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent ">
                a
              </div>
              <div className="w-64 h-24 border-white bprder-4 text-white bg-gradient-to-b from-[#161616] to-transparent ">
                a
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;

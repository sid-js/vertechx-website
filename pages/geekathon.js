import React from 'react';
import MainLayout from '@/Components/MainLayout';
import Image from 'next/image';
import { FiCalendar } from 'react-icons/fi';
import moment from 'moment';
import Link from 'next/link';
import Head from 'next/head';
const geekathon = () => {
    return (
        <MainLayout>
            <Head>
                <title>Geekathon</title>
                <meta name='description' content='Speed!! Speed!! Speed!! Battle of Brains is a Technical Quiz game of questions and answers on all topics of TECHNICAL knowledge that is played by students. 

With science and technology growing at an alarming rate, facts and figures keep adding up. To match the influx of this humongous amount of data we need a brain that&apos;s sharp as a razor and pliable as a rubber band. And the quest to search for this perfect brain ends at a technical quiz! With a wide array of questions from numerous technical topics, this is one event that will breach the boundaries of your technical lore.' />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className='w-full  bg-no-repeat items-center bg-cover md:px-32 mt-24 flex flex-col  dark:text-white min-h-screen h-full gap-8 p-6'>
                <div className='flex flex-col md:flex-row-reverse justify-between gap-4 md:gap-36 w-[95%] md:w-[100%] items-start h-max bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-10'>
                    <div className='basis-1/3 bg-blue-500 rounded-lg h-max'>
                        <Image
                            className='object-cover rounded-lg'
                            alt='poster'
                            src={'https://ik.imagekit.io/pgvf1rv1sw/Geekathon2.jpg?updatedAt=1682879686332'}
                            height={800}
                            width={900}
                        />
                    </div>
                    <div className='basis-2/3  flex flex-col gap-2 justify-between items-start min-h-full h-max'>
                        <div className='flex flex-col h-max'>
                            <h1 className=' text-4xl md:text-6xl font-semibold'>
                                GEEKathon
                            </h1>
                            <h3 className=' text-xl md:text-2xl font-normal text-slate-400'>
                            </h3>
                            <div className='text-xl md:text-2xl mt-6 flex flex-row gap-2 items-center'>
                                <FiCalendar className='text-purple-500' />
                                <span>
                                    {moment().format('MMMM Do YYYY')}
                                </span>
                            </div>
                            <p className='text-xl md:text-2xl mt-6 '>
                                <ul>
                                    <li>
                                        Register and win free DJ passes
                                    </li>
                                </ul><br/>
                                Speed!! Speed!! Speed!! GEEKathon is a Technical Quiz game of questions and answers on all topics of TECHNICAL knowledge that is played by students.

                                With science and technology growing at an alarming rate, facts and figures keep adding up. To match the influx of this humongous amount of data we need a brain that&apos;s sharp as a razor and pliable as a rubber band. And the quest to search for this perfect brain ends at a technical quiz! With a wide array of questions from numerous technical topics, this is one event that will breach the boundaries of your technical lore.
                            </p>
                        </div>

                        <div className='flex-col w-full gap-6 h-full flex'>
                            <div className='text-xl md:text-2xl mt-6 flex flex-row gap-2 items-center'>
                                <div className='text-purple-500' />
                                <span>Registration Fee : </span>
                                <span>Free</span>
                            </div>
                            <Link legacyBehavior={true} href={'https://presenter.jivrus.com/p/1MX6mkbVpXaSg4M-QjlpvNrwIQuwv0HNRiWJY0_r46mY'}>
                                <a
                                    target='_blank'
                                    ref
                                    className='w-full md:w-2/5 flex flex-row justify-center items-center rounded-md text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-pointer py-2 px-4'
                                >
                                    Register Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-4 w-[95%] md:w-full items-start bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-10 mb-6'>
                    <h3 className=' text-2xl md:text-4xl font-normal text-slate-100'>
                        Quiz Overview
                    </h3>
                    <div className='prose prose-neutral dark:prose-invert prose-xl'>
                        <ul>
                            <li>This is a solo event for students across various colleges from the Bangalore region </li>
                            <li>The quiz will be held in a single round. The participant with the highest score in the stipulated time of 20 mins will be declared the winner.</li>
                            <li>The decision of the quiz master will be final and binding.</li>
                            <li>Secure your position in order to grab the DJ passes!!!</li>
                            <li>1st place: 3 DJ passes</li>
                            <li>2nd place: 2 DJ passes</li>
                            <li>3rd place: 1 DJ pass</li>
                        </ul>
                        <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                            <h3 className="text-xl font-medium text-white underline decoration-purple-500">Student Co-ordinators:</h3>
                            <p className="mt-2 text-white">
                            Reethika Shree H -{" "}
                                <Link
                                    href="tel:+917795236841"
                                    className="underline font-bold text-pink-500 hover:text-pink-400"
                                >
                                   7795236841
                                </Link>
                            </p>
                            <p className="mt-2 text-white">
                                Abhinav -{" "}
                                <Link
                                    href="tel:+918017991099"
                                    className="underline font-bold text-pink-500 hover:text-pink-400"
                                >
                                    8017991099
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default geekathon;
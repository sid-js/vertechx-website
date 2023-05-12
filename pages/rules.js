import MainLayout from '@/Components/MainLayout';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Image from 'next/image';
const About = () => {
  return (
    <>
      <Head>
        <title>General guidelines:</title>
      </Head>
      <MainLayout>
        <div className='w-full  bg-no-repeat items-center bg-cover md:px-32 mt-24 flex flex-col  dark:text-white min-h-screen h-full gap-8 p-6'>
          <div className='flex flex-col md:flex-row-reverse justify-between gap-4 md:gap-36 w-[95%] md:w-[100%] items-start h-max bg-black bg-opacity-40 backdrop-blur-md border border-gray-700 rounded-lg p-8 md:p-10'>
            <div className='basis-6/7  flex flex-col gap-2 justify-between items-start min-h-full h-max'>
              <div className='flex flex-col h-max'>
                <h1 className=' text-4xl md:text-6xl font-semibold no-underline hover:underline text-purple-600'>
                  General guidelines
                </h1>
                <p className='text-xl md:text-xl mt-6  '>
                  <ul>
                    <li>
                      1. Valid College ID cards will have to be worn at all
                      times.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      2. On-spot registrations are available but we encourage
                      participants to register beforehand since the
                      registrations on website will be closed on 16th May 2023.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      3. The college reserves the right to cancel any event if
                      the requirement of minimum registrations are not met. 
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      4. Entrants are expected to be modestly dressed. The
                      college dress code is to be strictly abided by, failure of
                      which will lead to expulsion from the campus. Any kind of
                      malpractice/ misbehavior will not be tolerated.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>5. No outside food or beverages will be allowed.</li>
                  </ul>
                  <br />
                  <ul>
                    <li>6. Cosmetics are not allowed.</li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      7. Tobacco or Tobacco products such as Cigarettes,
                      E-cigarette, Vapes etc are strictly prohibited.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      8. Anyone under the influence of alcohol or in the
                      possession of unlawful or illicit substances will not be
                      allowed entry and if found will be asked to exit the
                      premises immediately.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      9. Weapons of any kind-pocket knives, sharp objects,
                      flammable items/liquids inclusive of aerosols and
                      fireworks are strictly prohibited.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      10. Confiscated items will NOT be returned under any
                      circumstance.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>
                      11. Participants must abide by the rules and regulations
                      of MVJ College of Engineering at all times.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li>12. Any kind of refund will not be entertained .</li>
                  </ul>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default About;

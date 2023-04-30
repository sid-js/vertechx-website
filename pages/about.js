import MainLayout from '@/Components/MainLayout';
import ReactPlayer from 'react-player'

const About = () => {
  return (
    <MainLayout>
      <section className="h-screen pt-24">
        <article className="mx-auto max-w-3xl p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border-4 border-gradient-to-r from-purple-500 to-pink-500">
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            width={'100%'}
            height={'100%'}
            className='w-full h-full'
            url='https://ik.imagekit.io/vertechx/gokart.mp4'
          />
          <h1 className="text-5xl font-bold text-white mb-8 underline decoration-gradient-to-r from-purple-500 to-pink-500">What is Vertechx?</h1>
          <p className="text-xl text-white">
            The place where it all began, the origin of life, and the unexplored realms. What can we gain by sailing to the moon if we are not able to cross the abyss that separates us from ourselves? This is the most important of all voyages of discovery, and without it, all the rest are not only useless but disastrous. There is a fifth dimension, beyond that which is known to man. It is a dimension as vast as space and as timeless as infinity. It is the middle ground between light and shadow, between science and superstition. Let's unravel these mysteries of the universe that is purely geometric- a beautiful shape twisting around and dancing over space-time.
            Hold your breaths and get ready to launch yourselves into this abyssal realm and embark upon this expedition at the 11th edition of Vertechx. Mark your calendars! 19th-20th May 2023 it is!
          </p>
        </article>
      </section>
    </MainLayout>
  );
};
export default About;

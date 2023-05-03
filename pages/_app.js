import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/Components/Navbar';
import { useEffect, useRef, useState } from 'react';
import { Space_Grotesk } from 'next/font/google';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const containerRef = useRef(null);
  const [satellitePos, setSatellitePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const satelliteWidth = container.querySelector('.satellite').offsetWidth;
      const satelliteHeight =
        container.querySelector('.satellite').offsetHeight;
      const newSatelliteX = mouseX - container.offsetLeft - satelliteWidth / 2;
      const newSatelliteY = mouseY - container.offsetTop - satelliteHeight / 2;
      setRotation(Math.abs(Math.random() * 90));
      setSatellitePos({ x: newSatelliteX, y: newSatelliteY });
    };
    console.log('RAN');
    console.log(rotation);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [satellitePos]);
  return (
    <SessionProvider session={session}>
      <main
        className={`font-space h-screen w-full flex flex-col dark mb-8 ${spaceGrotesk.className}`}
      >
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <Component {...pageProps} />
      </main>
      <div className='-z-10 bg-fixed fixed top-0' ref={containerRef}>
        <div
          className='satellite'
          style={{
            transform: `translate(${satellitePos.x}px, ${satellitePos.y}px) rotate(${rotation}deg)`,
          }}
        ></div>
        <div className='planet'></div>
        <div className='gradient-light'></div>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <div className='clouds'></div>
        <div className='stars'></div>

        <div className='twinkling'></div>
        <div className='black-overlay'></div>
        <div className='clouds'></div>
      </div>
      <Analytics />
    </SessionProvider>
  );
}

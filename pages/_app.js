import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/Components/Navbar';
import { useEffect, useRef, useState } from 'react';
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
      <main className='font-space h-screen w-full flex flex-col dark mb-8'>
        <Navbar />
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

        <div className='clouds'></div>
      </div>
    </SessionProvider>
  );
}

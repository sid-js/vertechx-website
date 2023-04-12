import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/Components/Navbar';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className='font-space '>
        <Component {...pageProps} />
      </main>
      <div className='-z-10 bg-fixed fixed top-0'>
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

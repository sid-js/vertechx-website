import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/Components/Navbar";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className="font-space">
      <Component {...pageProps} />
      </main>
      
    </SessionProvider>
  );
}

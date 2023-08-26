import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </SessionProvider>
  );
}

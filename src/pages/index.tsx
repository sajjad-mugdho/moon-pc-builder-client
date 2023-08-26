import Hero from "@/components/UI/hero";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>PC-Builder</title>
      </Head>
      <Hero />
    </div>
  );
}

import FeaturesCard from "@/components/UI/featuresCard";
import Hero from "@/components/UI/hero";
import componentCategories from "@/globalTypes/Pc-types";
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
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold my-5">Featured product</h2>
        <div className="grid grid-cols-3 gap-5 m-5">
          {componentCategories.map((card, i) => (
            <FeaturesCard card={card} key={i}></FeaturesCard>
          ))}
        </div>
      </div>
    </div>
  );
}



import Image from "next/image";

import { Hero, About, Experience, Work, Contact } from "@/components";
import herobg from "@/public/assets/herobg.png";
import cont from "@/public/assets/cont.jpg";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <Image
          src={herobg}
          alt="hero"
          fill
          objectPosition="center"
          className="bg-no-repeat object-cover"
        />
        <Hero />
      </div>
      <About />
      <Experience />
      <Work />
      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
}

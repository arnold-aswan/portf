import Image from "next/image";
import Hero from "@/components/Hero";
import herobg from "@/public/assets/herobg.png";
import cont from "@/public/assets/cont.jpg";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <Image
          src={herobg}
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="bg-no-repeat"
        />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
    </>
  );
}

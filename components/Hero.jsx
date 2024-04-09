import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto hero">
      <div className="hero w-full h-screen">
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`heroHeadText text-white`}>
              Hi, I&apos;m <br />
              <span className="text-[#915EFF]">Arnold Aswani</span>
            </h1>
            <p className={`heroSubText mt-2 text-white-100`}>
              I develop web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

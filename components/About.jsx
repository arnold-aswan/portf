"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/utils/motion";

import { Tilt } from "react-tilt";
import { services } from "@/constants";

import SectionWrapper from "@/hoc";

const options = {
  max: 45,
  scale: 1,
  speed: 500,
};
const ServiceCard = ({ icon, title, index }) => (
  <Tilt options={options} className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card  ">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center ">
        <Image src={icon} alt="icon" width={65} height={65} />
        <h3 className="text-white text-[20px] font-bold text-center ">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">INTRODUCTION</p>
        <h3 className="sectionHeadText">Overview.</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js. I&apos;m a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20  flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// export default About;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "@/hoc";
import { textVariant } from "@/utils/motion";
import { experiences, technologies } from "@/constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    visible
    className=" rounded-xl"
    contentStyle={{
      color: "#ffffff",
      background: "#1d1836",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={experience.date}
    iconStyle={{ background: "#fff" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          width={50}
          height={50}
        />
      </div>
    }>
    <div className="z-[50] ">
      <h3 className="text-purple-500 text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold ">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li
          key={index}
          className="text-white-100 text-[14px] pl-1 tracking-wider ">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center ">What I have done so far</p>
        <h2 className="sectionHeadText text-center">Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-5">
        {technologies.map((tech) => (
          <div className="bor bg-white p-5" key={tech.name}>
            <Image src={tech.icon} alt={tech.name} width={64} height={64} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import github from "@/public/assets/github.png";

import SectionWrapper from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { projects } from "@/constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demoUrl,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, speed: 450, scale: 1 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project"
            fill
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
            onClick={() => window.open(demoUrl, "_blank")}
          />

          <div className="absolute top-0 left-0 flex justify-end m-3 ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer ">
              <Image
                src={github}
                alt="project"
                width={25}
                height={25}
                className=" object-contain "
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] ">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-7 mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");

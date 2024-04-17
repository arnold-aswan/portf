"use client";

import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";

import SectionWrapper from "@/hoc";
import { slideIn } from "@/utils/motion";
import planet from "@/public/assets/planet2.json";

const Contact = () => {
  const notify = (status, message) => {
    toast[status](message);
  };
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Arnold Aswani",
          from_email: formData.email,
          to_email: "fredyaswan@gmail.com",
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          console.log("success");
          notify(
            "success",
            "Thank you, i will get back to you as soon as possible"
          );

          // alert("Thank you, i will get back to you as soon as i possibly can");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          notify("error", "Something went wrong");
          // alert("Something went wrong");
          console.log(error);
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex justify-between gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl ">
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="Message ..."
              value={formData.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? (
              <div className="flex items-center justify-between gap-8">
                <div className="dots"> </div>
                <small>Sending...</small>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center  ">
        <Player autoplay loop src={planet} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

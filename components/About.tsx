import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        About
      </h2>
      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.4 }}
        src='https://pbs.twimg.com/profile_images/1579575592415948800/hExHlu7W_400x400.jpg'
        className='mb-20 md:mb-20 rounded-full md:rounded-lg md:w-64 h-95 xl:w-[500] xl:h-[600]'></motion.img>
      <div className='px-0 md:px-10'>
        <h4 className='mb-8 text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{" "}
          background
        </h4>

        <p className='mb-4'>background Info</p>
      </div>
    </motion.section>
  );
};

export default About;

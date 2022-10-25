import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500] md:w-[600] xl:w-[900] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
        className='w-32 h-32 rounded-full mx-auto object-cover onject-center xl:w-32 xl:h-32'
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of SunnyKnights</h4>
        <p className='font-bold mt-1 text-2xl'>SunnyKnights</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg'
            alt=''
          />
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className='upppercase'>Started Work....</p>
        <ul className='last-disc space-y-4 ml-5 text-1'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

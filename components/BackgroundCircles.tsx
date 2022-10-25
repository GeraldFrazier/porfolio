import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52'></div>
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52'></div>
      <div className='rounded-full border border-[#F7AB0A] h-[650px] w-[650px] absolute mt-52 opacity-20 animate-pulse'></div>
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52'></div>
    </div>
  );
};
export default BackgroundCircles;

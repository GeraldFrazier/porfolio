import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Knight",
      "I believe coding will save the world",
      "Thanks for visiting",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src='https://avatars.githubusercontent.com/u/104445879?v=4'
        alt='Knight'
        className='w-32 h-32 rounded-full mx-auto object-cover'
      />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>
            {text}
            <Cursor cursorColor='#F7AB0A' />
          </span>
        </h1>
        <div>
          <button className='heroButton'>About</button>
          <button className='heroButton'>Experience</button>
          <button className='heroButton'>Skills</button>
          <button className='heroButton'>Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

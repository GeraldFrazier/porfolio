import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className='h-screen snap-start relative' id='projects'>
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        Projects
      </h2>

      <div className='h-[500px] w-full absolute top-[30%] left-0 bg-[#f7ab0a]/10 -skew-y-12' />

      <div className='pb-10 w-rull relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
            <img
              src='data:image/jpeg;base64,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'
              alt='project pics'
            />
            <div>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study{i + 1} of {projects.length}
                </span>
                UPS Clone
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7ABOA]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
};

export default Projects;

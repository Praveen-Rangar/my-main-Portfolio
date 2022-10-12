import React from "react";

const About = () => {
  return (
    <div name="" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[900px] w-full  grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right ">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[900px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p className="">
              Hi. I'm Client, nice to meet you. Please take a look around
            </p>
          </div>

          <div className="">
            <p className="">
              I'm a Frontend Web Developer. I can provide clean coad and pixel
              perfect design. I also make the website more & more interecting
              with web animations. A responsive design makes your website
              accessible to all users, regardless of their device. I will not
              let you down at any point.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

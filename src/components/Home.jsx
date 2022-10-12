import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] h-screen w-full ">
      <div className="flex flex-col justify-center h-full px-8 mx-auto max-w-[900px]">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl font-bold sm:text-7xl text-[#ccd6f6]">
          Praveen Rangar
        </h1>
        <h2 className="text-4xl font-bold sm:text-7xl text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I'm a Frontend Web Developer. I can provide clean coad and pixel
          perfect design. I also make the website more & more interecting with
          web animations. A responsive design makes your website accessible to
          all users, regardless of their device. I will not let you down at any
          point.{" "}
        </p>
        <div className="">
          <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
            {" "}
            View Work
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

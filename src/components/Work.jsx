import React from "react";
import workimg from "../assets/workimg.jpeg";
import realestate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Gird Item */}
          <div
            style={{ backgroundImage: `url(${workimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${workimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${workimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1665772484481-954badfa217b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a href="" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

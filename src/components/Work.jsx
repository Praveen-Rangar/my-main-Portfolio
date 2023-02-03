import React from "react";
import { Link } from "react-router-dom";

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
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://github.com/Praveen-Rangar/my-e-commerce">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a href="https://praveenrangar-cart.netlify.app">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://github.com/Praveen-Rangar/tic-tac-toe">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://merry-tiramisu-8bedd0.netlify.app">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1627850604058-52e40de1b847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG8lMjBkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/Praveen-Rangar/todo-repo"
                  target="_blank"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://rangar-todo.netlify.app" target="_blank">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl tracking-wider text-white font bold "></span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/Praveen-Rangar/My-Portfolio"
                  target="_blank"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>

                <a
                  href="https://praveenrangar-portfolio.netlify.app"
                  target="_blank"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"})`,
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

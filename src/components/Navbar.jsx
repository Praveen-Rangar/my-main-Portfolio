import React from "react";
import logo from "../assets/logo1.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => setNav(!nav);

  return (
    <div className="  fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#0a192f] text-gray-300">
      <div className="">
        <img src={logo} alt="logo image" style={{ width: "50px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}

      <div onClick={handleMenu} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-[#0a192f]"
        }
      >
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">About</li>
        <li className="py-4 text-4xl">Skill</li>
        <li className="py-4 text-4xl">Work</li>
        <li className="py-4 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden md:flex flex-col fixed left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Linkdin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
          ] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
          >
            <a
              className="flex items-center justify-between w-full text-gray-300 "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#566f69] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

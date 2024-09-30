import React from "react";
import img from "../assets/herikiimg.gif";
import Btn from "./Btn";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  function Goto() {
    navigate('/Contact')
  }
  return (
    <div className="max-lg:flex-col flex max-lg:h-fit h-[80vh] bg-transparent">
      <div className="w-[100%] max-lg:flex-col max-sm:w-full flex justify-center items-center gap-10 h-full ">
        <img
          src={img}
          alt=""
          className="rounded-[50px] max-sm:rounded max-sm:mt-[0]"
        />
        <div className="max-sm:pl-2">
          <h1 className="max-sm:text-5xl text-5xl p-2 leading-snug mb-6">
            Hi, I'm{" "}
            <span className="text-pink-700">
              Mohammed <br /> Ahmed Khan <br />a
            </span>{" "}
            Mern Stack Developer
          </h1>
          <div className="flex ">
            <Btn contain="Let's Connect" element={Goto} />
            <div className="flex items-center mx-8 px-2 w-fit gap-5">
              <a href="https://www.linkedin.com/in/makhan551/">
                <FaLinkedin className="text-4xl text-pink-950" />
              </a>
              <a href="https://github.com/mak0551">
                <FaGithub className="text-4xl text-pink-950" />
              </a>
              <a href="mailto:mohammedahmedkhan551@gmail.com">
                <IoIosMail className="text-4xl text-pink-950" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

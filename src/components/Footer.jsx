import React from "react";
import { FaLinkedin, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="fontmono absolute bottom-0 w-full flex max-lg:flex-col justify-center items-center gap-4 max-lg:gap-2">
      <div className="flex items-center justify-center fontmono gap-4 max-lg:gap-2">
        <FaPhoneVolume className="text-xl text-pink-950" />
        +917702793710
        <a
          href="https://www.linkedin.com/in/makhan551/"
          className="fontmono flex justify-center items-center gap-2"
        >
          <FaLinkedin className="text-2xl text-pink-950" />
          LinkedIn
        </a>
      </div>
      <a
        href="mailto:mohammedahmedkhan551@gmail.com"
        className="fontmono flex justify-center items-center gap-2"
      >
        <IoIosMail className="text-3xl text-pink-950" />
        mohammedahmedkhan551@gmail.com
      </a>
    </footer>
  );
}

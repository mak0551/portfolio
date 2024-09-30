import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Formconnect from "./Formconnect";
import Viewresume from "./Viewresume";
import img from "../assets/amn.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  var [a, seta] = useState(false);
  return (
    <div>
      <nav
        className={`flex ${
          a ? "mb-[60px]" : ""
        } justify-between items-center bg-[#82a98c] w-full h-[5rem] relative`}
      >
        <img src={img} alt="" className="relative h-[100%] rounded-full pl-3" />
        <div>
          <ul
            className={`${
              a === false ? "max-sm:hidden" : "max-sm:flex"
            } flex gap-[4em] max-sm:flex-col max-sm:right-0 max-sm:top-[5rem] max-sm:absolute text-xl font-medium max-sm:bg-white max-sm:w-full max-sm:items-center max-sm:gap-2 pr-10`}
          >
            <nav className="max-sm:flex-col flex gap-6 justify-between index-10">
              <Link to="/" onClick={()=>{seta(!a)}} className="hover:underline">
                Home
              </Link>
              <Link to="/About" onClick={()=>{seta(!a)}} className="hover:underline">
                About
              </Link>
              <Link to="/Projects" onClick={()=>{seta(!a)}} className="hover:underline">
                Projects
              </Link>
              <Link to="/Contact" onClick={()=>{seta(!a)}} className="hover:underline">
                Contact
              </Link>
            </nav>
          </ul>
        </div>
        <div onClick={() => seta(!a)} className="sm:hidden pr-10">
          {a === false ? <GiHamburgerMenu size={20} /> : <RxCross2 size={25} />}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Formconnect" element={<Formconnect />} />
        <Route path="/Viewresume" element={<Viewresume />} />
      </Routes>
    </div>
  );
}

export default Navbar;

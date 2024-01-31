import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes, FaAlignJustify } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const content = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <ScrollLink to="http://localhost:5173/" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </ScrollLink>

          <ScrollLink to="http://localhost:5173/Contact" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </ScrollLink>

          <ScrollLink to="http://localhost:5173/About" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
          </ScrollLink>
        </ul>
      </div>
    </>;

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 relative">
        <div className="flex-1 flex place-items-center" >
          <span className="text-3xl font-bold">Logo</span>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              <RouterLink to="http://localhost:5173/" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>Home</li>
              </RouterLink>

              <RouterLink to="http://localhost:5173/Contact" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>Contact</li>
              </RouterLink>

              <RouterLink to="http://localhost:5173/About" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>About</li>
              </RouterLink>
            </ul>
          </div>
        </div>
        
        <div className="lg:hidden">
          {click && content}
        </div>
        <button onClick={() => setClick(!click)} className="block sm:hidden ">
          {click ? <FaTimes /> : <FaAlignJustify />} 
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

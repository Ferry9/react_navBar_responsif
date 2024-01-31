// J'importe les bibliothèques nécessaires depuis React et React Router
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// J'importe les icônes du menu depuis la bibliothèque React Icons
import { FaAlignJustify } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

// Je définis le composant NavBar en tant que fonction
const NavBar = () => {
  // J'utilise le hook d'état pour gérer le clic du menu mobile
  const [click, setClick] = useState(false);

  // Je définis le contenu du menu mobile avec react-scroll
  const content = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          {/* Liens pour le menu mobile */}
          <ScrollLink to="Home" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </ScrollLink>

          <ScrollLink to="src/Pages/Contact" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </ScrollLink>

          <ScrollLink to="About" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
          </ScrollLink>
        </ul>
      </div>
    </>;

  // Je retourne la structure du composant NavBar
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 relative">
        {/* Logo de la navigation */}
        <div className="flex-1 flex place-items-center">
          <span className="text-3xl font-bold">Logo</span>
        </div>

        {/* Menu de navigation pour les écrans larges */}
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              {/* Liens pour le menu de navigation */}
              <RouterLink to="/Home" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>Home</li>
              </RouterLink>

              <RouterLink to="/Contact" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>Contact</li>
              </RouterLink>

              <RouterLink to="/About" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-white no-underline">
                <li>About</li>
              </RouterLink>
            </ul>
          </div>
        </div>
        
        {/* Contenu du menu mobile qui s'affiche en fonction du clic */}
        <div className="lg:hidden">
          {click && content}
        </div>
        
        {/* Bouton du menu mobile avec l'icône appropriée en fonction de l'état du clic */}
        <button onClick={() => setClick(!click)} className="block sm:hidden">
          {click ? <RiMenu3Line /> : <FaAlignJustify />} 
        </button>
      </div>
    </nav>
  );
};

// J'exporte le composant NavBar pour pouvoir l'utiliser dans d'autres parties de mon application
export default NavBar;

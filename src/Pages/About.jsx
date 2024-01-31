/**
 * Je recupère mon composant C_Contact
 */

import C_About from "../Components/C_About";
import NavBar from "../Components/Navbar";

/**
 * 
 * Je retourne sur ma route Home, les informations du composant C_About
 */
export default function About(){
    return(
        <>

        <div  className="bg-slate-900">
        <NavBar/>
        </div>
          
          
          <C_About/>
        </>
     
        
    )
}
/**
 * Je recupère mon composant C_Contact
 */
import C_Contact from "../Components/C_Contact";
import NavBar from "../Components/Navbar";


/**
 * 
 * Je retourne sur ma route Home, les informations du composant C_Contact
 */
export default function Contact(){
    return(
        <>
          <div  className="bg-slate-900">
        <NavBar/>
        </div>
           <C_Contact/>




           
        </>
     
        
    )
}
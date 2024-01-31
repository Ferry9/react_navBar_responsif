/**
 * Je recupère mon composant C_Home
 */
import C_Home from "../Components/C_Home";
import NavBar from "../Components/Navbar";

/**
 *
 * Je retourne sur ma route Home, les informations du composant C_Home
 */
export default function Home() {
  return (
    <>
      <div className="bg-slate-900">
        <NavBar />
      </div>

      <C_Home />
    </>
  );
}

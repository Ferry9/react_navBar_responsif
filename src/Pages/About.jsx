import C_About from "../Components/C_About";
import NavBar from "../Components/Navbar";

export default function About() {
  return (
    <>
      {/* Encadrez votre Navbar dans le div ci-dessous pour l'arrière-plan */}
      <div className="bg-slate-900">
        <NavBar />
      </div>

      <C_About />

      
    </>
  );
}

/**
 * 
 * J'exporte le composant C_Contact
 * Ce composant retourne comme information le tite page Contact
 */
export default function C_Contact(){
    return (
        <>
            <h2>Contact.</h2>



       {/* Je crée un formulaire avec une largeur maximale et le centre sur la page */}
<form className="max-w-sm mx-auto">
  {/* J'utilise htmlFor pour associer l'étiquette au champ de saisie */}
  <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Numéro de téléphone :
  </label>
  
  {/* Je crée une structure relative pour le champ de saisie */}
  <div className="relative">
    {/* J'ajoute une icône en utilisant SVG */}
    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-labelledby="phone-icon-label"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 19 18"
      >
        <path
          d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
        />
      </svg>
    </div>
    
    {/* Je crée un champ de saisie avec un modèle de numéro de téléphone */}
    <input
      type="text"
      id="phone-input"
      aria-describedby="helper-text-explanation"
      pattern="\+?(?:00)?\d{1,4}?\s?(?:\d{2,4}\s?){1,5}\d{6,8}"
      placeholder="+214 or 00241 77 749690"
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  
  {/* J'ajoute un paragraphe d'explication sous le champ de saisie */}
  <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    Veuillez entrer un numéro valide.
  </p>

  {/* J'ajoute un bouton "Envoyer" au formulaire */}
  <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
    Envoyer
  </button>
</form>


        </>
    )
}
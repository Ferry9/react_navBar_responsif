/**
 * Importation des modules nécessaire pour mes route : react-router-dom
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'



export default function App(){
  return(
    
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    
    
    </>

    )
    
}

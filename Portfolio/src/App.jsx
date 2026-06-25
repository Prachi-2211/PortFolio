import { Routes, Route } from "react-router-dom";
import {About} from './Components/About'
import {Home} from './Components/Home'
import {Skills  } from './Components/Skills'
import {NavBar} from './Components/NavBar'
import {Footer} from './Components/Footer'
import {Projects} from './Components/Projects'
import {Contact} from './Components/Contact'
import {Landing} from './Components/Landing'


function App(){
  return(
    <>
    <NavBar/>
    <Routes>
       <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
     
  
   
    </>
  )
}
export default App;
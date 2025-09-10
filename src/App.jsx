import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"



const App = () => {
 
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
  )
}

export default App
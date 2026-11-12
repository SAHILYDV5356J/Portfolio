import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  

  return (
    <div>
    <Navbar/>
    <div className="w-full px-1 md:px-2 lg:px-10 ">
      <Home/>
      <Skills/>
      <Projects/>
      <Experience/>
      <About/>
      <Contact/>
    </div>
    
    </div>
  )
}

export default App

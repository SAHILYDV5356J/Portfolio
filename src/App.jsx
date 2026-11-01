import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  

  return (
    <div>
    <Navbar/>
    <div className="w-full px-10">
      <Home/>
      <Skills/>
      <Projects/>
    </div>
    
    </div>
  )
}

export default App

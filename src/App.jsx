import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import NavigationBar from './sections/NavigationBar'
import Info from './sections/Info'
import { useState } from 'react'
import { Spider } from './svgs'
import useMousePosition from './hooks'

function App() {
  const [haunted, setHaunted] = useState(false);
  const position = useMousePosition()

  return (
    <div className={`px-2 lg:px-8 ${haunted ? "haunted" : "bg-slate-200"} transition-all duration-700`}>
      <NavigationBar
      haunted={haunted}
      setHaunted={setHaunted}
      />
      {haunted && <Spider
      position={position}
      />}
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative">
          <Info
          haunted={haunted}
          />
        </div>
        <div className='relative w-[96%]'>
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
)
}

export default App

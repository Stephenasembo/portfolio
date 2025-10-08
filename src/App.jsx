import { useState } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import NavigationBar from './sections/NavigationBar'
import Info from './sections/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-2 lg:px-8 bg-slate-200">
      <NavigationBar />
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative">
          <Info />
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

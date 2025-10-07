import { useState } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
)
}

export default App

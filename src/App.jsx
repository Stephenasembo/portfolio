import { useState } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import NavigationBar from './sections/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavigationBar />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
)
}

export default App

import { useState } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <About />
      <Projects />
      <Services />
    </div>
)
}

export default App

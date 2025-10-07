import { useState } from 'react'
import About from './sections/About'
import Projects from './sections/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <About />
      <Projects />
    </div>
)
}

export default App

import { useState } from 'react'
import About from './sections/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <About />
    </div>
)
}

export default App

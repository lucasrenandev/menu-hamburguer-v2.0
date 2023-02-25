import './App.css'
import { useRef } from 'react'

function App() {
  const containerRef = useRef()

  const toggleMenu = () => {
    containerRef.current.classList.toggle("active")
  }

  return (
    <div ref={containerRef} onClick={toggleMenu} className="container">
      <span></span>
      <span></span>
      <span></span>
    </div>//End container
  )
}

export default App
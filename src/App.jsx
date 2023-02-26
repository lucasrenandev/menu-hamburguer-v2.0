import { useRef } from 'react'
import './App.css'

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
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Nidhi"
  const functionCall = () => {
    console.log("hello")
  }
  return <div> I am {name} 
       <button onClick={functionCall}> Click me </button>
  </div>
}

export default App

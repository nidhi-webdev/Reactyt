import React from 'react'
import './style.css'


const App = () => {
 const submitHandler = (e) => {
  e.preventDefault()
  console.log("hello")
 }

  return (
    <div>
    <form onSubmit={(e) => {
      submitHandler(e)
    }}>
      <input type='text' placeholder='write something' className='px-4 py-4 border border-black m-4'/>
      <button className='bg-emerald-300'> submit </button>
    </form>
    </div>
  )
}

export default App
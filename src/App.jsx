import React, { useState } from 'react'
import './style.css'


const App = () => {
  const [username, setUserName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username)
    setUserName('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          type='text' placeholder='write something' className='px-4 py-4 border border-black m-4' />
        <button className='bg-emerald-300'> submit </button>
      </form>
    </div>
  )
}

export default App
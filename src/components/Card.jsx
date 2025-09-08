import React, { useState } from 'react'
import '../style.css'


const Card = (props) => {
console.log(props.user)

  return (
    <div className='inline-block'>
        <h1> {props.user} </h1>
        <h2> {props.city}, {props.age}</h2>
        <button className='bg-grey'> Add Friend </button>
        
    </div>
  )
}

export default Card
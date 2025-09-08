import React, { useState } from 'react'
import '../style.css'


const Card = (props) => {

  return (
    <div className='inline-block p-6 gap-8'>
        <img className='bg-white text-black inline-block p-6' alt='' src={props.photo}/>
        <h1 className='text-2xl font-semibold mb-4'> {props.name} </h1>
        <h2 > {props.city}, {props.age}</h2>
        <h3> {props.profession} </h3>
        <button className='mt-5 bg-emerald-700 text-white'> Add Friend </button>
        
    </div>
  )
}

export default Card
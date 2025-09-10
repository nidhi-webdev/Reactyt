import React, { useState } from 'react'
import '../style.css'
import Card2 from './Card2'


const Card = (props) => {

  return (
   <>
      Calling form Card one {props.name}
      <Card2 userName = {props.name} />
   </>
        )
}

        export default Card
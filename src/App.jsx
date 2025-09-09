import React from 'react'

import Card from './components/Card'


const App = () => {
  const users = [
    {
      "image": "https://example.com/profiles/arushi.jpg",
      "name": "Arushi Sharma",
      "city": "Berlin",
      "age": 29,
      "profession": "Frontend Developer"
    },
    {
      "image": "https://example.com/profiles/rahul.jpg",
      "name": "Rahul Mehta",
      "city": "Munich",
      "age": 32,
      "profession": "Data Scientist"
    },
    {
      "image": "https://example.com/profiles/nidhi.jpg",
      "name": "Nidhi Verma",
      "city": "Hamburg",
      "age": 30,
      "profession": "Software Engineer"
    },
    {
      "image": "https://example.com/profiles/lukas.jpg",
      "name": "Lukas Weber",
      "city": "Frankfurt",
      "age": 27,
      "profession": "UX Designer"
    },
    {
      "image": "https://example.com/profiles/sofia.jpg",
      "name": "Sofia Klein",
      "city": "Stuttgart",
      "age": 35,
      "profession": "Project Manager"
    }
  ]

  return (
    <div className='p-10'>
      {users.map(function (ele, idx) {
        return <Card
          key={idx}
          name={ele.name}
          age={ele.age}
          city={ele.city}
          profession={ele.profession}
          photo={ele.image}
        />
      })}
    </div>
  )
}

export default App
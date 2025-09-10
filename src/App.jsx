import React, { useEffect, useState } from 'react'
import Card from './components/Card1'
import axios from 'axios'


const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
    setData(res.data)
  }

  return (
    <>
      {/* <Card name="Nidhi" /> */}
      <div className='p-10'>
        <button onClick={getData}
          className='bg-teal-700 text-white rounded py-6 px-10 active:scale-90 cursor-pointer'>
          Get data
        </button>
        <div className='p-5 mt-5 bg-gray-950'>
          {data.map(function (ele, idx) {
            return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded-2xl m-2'>
              <img className='h-80' src={ele.download_url} />
              <h1> {ele.author}</h1>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
import Header from './components/Header'
import Footer from './components/Footer'
import { DataContext } from './Context/userContext'
import { useContext } from 'react'

const App = () => {
 const data = useContext(DataContext)
 
  return (
    <div>
     <h1> This is App {data} </h1> 
      <Header />
      <Footer />
    </div>
  )
}

export default App

// Followed This Video https://www.youtube.com/watch?v=E6tAtRi82QY
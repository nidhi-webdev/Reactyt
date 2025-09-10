import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContaxt from './Context/userContext.jsx'
'react-dom/client'

createRoot(document.getElementById('root')).render(
  <UserContaxt>
    <App />
  </UserContaxt>


)

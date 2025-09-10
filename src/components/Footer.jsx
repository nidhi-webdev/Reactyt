import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../Context/userContext"



const Footer = () => {
    const data = useContext(DataContext)

        return (
           <h1> Footer {data} </h1>     

        )
}

export default Footer
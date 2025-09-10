import { useContext } from "react"
import { DataContext } from "../Context/userContext"


const Header = () => {
const data = useContext(DataContext)
        return (

                <h1>Header {data.Occupation} </h1>
        )
}

export default Header
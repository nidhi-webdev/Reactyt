import { createContext } from "react"

export const DataContext = createContext()

const Context = ({ children }) => {
    const userData = {
        name: "Nidhi",
        age: 30,
        Occupation: "Frontend Developer"
    }

    return (
        <div>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </div>


    )
}

export default Context
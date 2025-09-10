import { createContext } from "react"

export const DataContext = createContext()

const Context = ({ children }) => {
    const username = "Nidhi"

    return (
        <div>
            <DataContext.Provider value={username}>
                {children}
            </DataContext.Provider>
        </div>


    )
}

export default Context
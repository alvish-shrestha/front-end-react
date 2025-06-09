import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (userData, token) => {
        localStorage.setItem("user", JSON.stringify(userData))
        localStorage.setItem("token", token)
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")
        if (token && user) {
            setUser(JSON.parse(storedUser))
        } else {
            logout()
        }
    }, [])
    return (
        <AuthContext.Provider
            value={{user, login, logout, isAuthenticated: user!== null}}
        > 
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
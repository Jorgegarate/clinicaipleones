import {useState, useEffect, createContext} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})

    return (
        //desde este lugar toman todos los datos
        <AuthContext.Provider 
        value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}

export default AuthContext
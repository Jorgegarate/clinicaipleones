import {useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/axios';
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    //validar que este cargando el token de login
    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})
    useEffect(() => {
       const  autenticarUsuario = async () => {
            const  token = localStorage.getItem('token')
            if(!token) {
                setCargando(false)
                return
            }
            console.log('si hay token')
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const {data} = await clienteAxios('/MEDICOS/perfil', config)
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})
            }
            setCargando(false)
       }
       autenticarUsuario()
    }, [])
    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})

    }
    return (
        //desde este lugar toman todos los datos
        <AuthContext.Provider 
        value={{
            auth,
            setAuth,
            cargando,
            cerrarSesion
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}

export default AuthContext
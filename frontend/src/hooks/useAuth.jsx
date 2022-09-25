//traer datos del context
import {useContext} from 'react'
//identificar cual
import AuthContext from '../contex/AuthProvider'

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth
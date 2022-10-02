//traer datos del context
import {useContext} from 'react'
//identificar cual
import PacientesContext from '../contex/PacientesProvider'

const usePacientes = () => {
    return useContext(PacientesContext)
}
export default usePacientes
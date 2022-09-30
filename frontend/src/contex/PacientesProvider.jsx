import {createContext, useState, useEffect} from 'react'
import clienteAxios from '../config/axios';

const PacienteContext = createContext()
export const PacienteProvider = ({children}) => {
    return (
        <PacienteContext.Provider>
        
        </PacienteContext.Provider>
    )

}

export default PacientesContext;
import {createContext, useState, useEffect} from 'react'
import clienteAxios from '../config/axios';

const PacientesContext = createContext()
export const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes ] =useState([])
    const [paciente, setPaciente] =useState({})
    
    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/paciente', config);
                console.log("info", data)
                setPacientes(data)
            } catch (error) {
                console.log(error)
            }
        } 
        obtenerPacientes()
    }, [])

    const guardarPaciente = async (paciente) => {
        if (paciente.id) {
            try {
                const { data} = await clienteAxios.put(`/paciente/${paciente.id}`, paciente, config)
                const pacientesActualizado = paciente.map(pacienteState => pacienteState._id === data._id ? data : pacienteState)
                setPacientes(pacientesActualizado)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios.post('/paciente', paciente, config)
                    const {createdAt, updatedAt, __v, ...pacienteAlmacenado }= data
                    setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log( error.response.data.msg)
            }
        }

    }
    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }

    return (
        <PacientesContext.Provider
        value= {{
            pacientes,
            guardarPaciente,
            setEdicion,
            paciente

        }}
        >
            {children}
        
        </PacientesContext.Provider>
    )

}

export default PacientesContext;
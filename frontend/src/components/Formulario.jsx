import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import usePacientes from '../hooks/usePacientes'
const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [rut, setRut] = useState('')
    const [contacto, setContacto] = useState('')
    const [email, setEmail] = useState('')
    const [emailcontacto, setEmailContacto] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)
    const [alerta, setAlerta ] =  useState({})
    const {guardarPaciente, paciente} = usePacientes()
    useEffect(() => {
        if(paciente?.nombre) {
            setNombre(paciente.nombre)
            setRut(paciente.rut)
            setContacto(paciente.contacto)
            setFecha(new Date(paciente.fecha).toISOString())
            setHora(paciente.hora)
            setEmail(paciente.email)
            setEmailContacto(paciente.emailcontacto)
            setSintomas(paciente.sintomas)
            setId(paciente._id)

        }
    },  [paciente])
    const handleSubmit = e => {
        e.preventDefault()
        //validar el formulario
        if ([nombre, rut, contacto, email, emailcontacto, fecha,hora, sintomas].includes('')) {
            setAlerta({
                msg:'Todos los campos son obligatorio',
                error:true
            })
            return;

        }
        setAlerta({})
        guardarPaciente({nombre, contacto, rut, email, emailcontacto, fecha, hora, sintomas})
        setAlerta({
            msg:'modificación realizada'
        })
        setNombre ('')
        setRut ('')
        setContacto ('')
        setEmail ('')
        setEmailContacto ('')
        setFecha ('')
        setSintomas ('')
        setId ('')

    }
    const {msg} =alerta
    return (
        <>
            <p className="text-3xl text-center">
                Añade los pacientes y {''}
                <span className="color-title font-bold"> Administralos</span>
            </p>
            
            <form className="py-10 px-5 mb:10 lg:mb-0" onSubmit={handleSubmit}>
                <div className="mb-2 ">
                    <label  className="color-title uppercase font-bold" htmlFor="usuario">Nombre</label>
                    <input 
                    type="text" 
                    id="nombre" placeholder="nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}/>

                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="rut">Rut</label>
                    <input 
                    type="string" 
                    id="nombre" placeholder="Rut" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={rut} 
                    onChange={e => setRut(e.target.value)}/>

                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={email} 
                    onChange={e => setEmail(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="contacto">Contacto Emergencia</label>
                    <input 
                    type="text" 
                    id="contacto" placeholder="Nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={contacto} 
                    onChange={e => setContacto(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="emailcontacto">Email Emergencia</label>
                    <input type="emailcontacto" id="emailcontacto" placeholder="Email Emergencia" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={emailcontacto} 
                    onChange={e => setEmailContacto(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="fecha">Fecha</label>
                    <input type="date" id="fecha" placeholder="Solicitud" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={fecha} 
                    onChange={e => setFecha(e.target.value)}  />
    
                </div>
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="alta">Hora</label>
                    <select className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={e => setHora(e.target.value)}>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                    </select>
    
                </div>
                
                <div className="mb-5">
                    <label  className="color-title uppercase font-bold" htmlFor="alta">Sintomas</label>
                    <textarea placeholder=" Describe los Sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={sintomas} 
                    onChange={e => setSintomas(e.target.value)}   />
    
                </div>
                <div className="my-5">
                  {msg && <Alerta alerta={alerta}/> }
                </div>
                
                <input className="color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover uppercase w-full"  type="submit" value={id ? 'Guardar Cambios':"agregar Paciente"} />
            </form>
            
        </>

    )
}
export default Formulario
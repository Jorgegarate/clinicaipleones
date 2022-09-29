import { useState } from "react"
const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [contacto, setContacto] = useState('')
    const [email, setEmail] = useState('')
    const [emailContacto, setEmailContacto] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta ] =  useState({})
   
    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade los pacientes y {''}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>

            <form className="py-10 px-5 mb:10 lg:mb-0">
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="usuario">Nombre</label>
                    <input 
                    type="text" 
                    id="nombre" placeholder="nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}/>

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={email} 
                    onChange={e => setEmail(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="contacto">Contato Emergencia</label>
                    <input 
                    type="text" 
                    id="contacto" placeholder="Nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={contacto} 
                    onChange={e => setContacto(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="emailcontacto">Email Emergencia</label>
                    <input type="emailcontacto" id="emailcontacto" placeholder="Email Emergencia" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={emailContacto} 
                    onChange={e => setEmailContacto(e.target.value)}  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="alta">Fecha</label>
                    <input type="date" id="alta" placeholder="Solicitud" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={fecha} 
                    onChange={e => setFecha(e.target.value)}  />
    
                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="alta">Hora</label>
                    <selected className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option selected value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                    </selected>
    
                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="alta">Sintomas</label>
                    <textarea placeholder=" Describe los Sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    value={sintomas} 
                    onChange={e => setSintomas(e.target.value)}   />
    
                </div>
                <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors cursor-pointer"  type="submit" value="agregar Paciente" />
            </form>
        </>

    )
}
export default Formulario
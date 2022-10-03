import usePacientes from '../hooks/usePacientes';

const Paciente = ({paciente}) => {
    const {setEdicion, eliminarPaciente} = usePacientes()
    const {email, nombre, rut, contacto, emailcontacto, fecha, sintomas, _id} =paciente
    const formatearFecha = (fecha => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', {dataStyle: 'long'}).format(nuevaFecha)
    })
    return (
        <div className="my-10 bg-white shadow-sm px-5 py-10 rounded-xl">
            <p className="font-bold uppercase my-2 color-title">Nombre: {' '}
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {nombre}
                </span>
            </p>
            <p className="font-bold uppercase my-2 color-title">Rut: {' '}
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {rut}
                </span>
            </p>
            <p className="font-bold uppercase color-title">Fecha: {' '} 
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {formatearFecha(fecha)}
                </span>
            </p>
            <p className="font-bold uppercase my-2 color-title">Email: {' '}
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {email}
                </span>
            </p>
            <p className="font-bold uppercase my-2 color-title">Sintomas: {' '}
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {sintomas}
                </span>
            </p>
            <p className="font-bold uppercase my-2 color-title">Contacto Emergencia: {' '} 
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {contacto}
                </span>
            </p>
            <p className="font-bold uppercase my-2 color-title">Email Emergencia: {' '}
                <span className="font-normal normal-case text-[#2f2f2f]">
                    {emailcontacto}
                </span>
            </p>
            <div className="flex justify-between my-5">
                <button type="button" className="color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover uppercase p-3 px-4 rounded-md flex items-center" 
                onClick={() => setEdicion(paciente)}>Reagendar</button>
                <button type="button" className="py-2 px-4 md:px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-lg" onClick={() => eliminarPaciente(_id)}>Finalizar</button>

            </div>
            
        </div>
    );
};
export default Paciente;
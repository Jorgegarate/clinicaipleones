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
            <p className="font-bold uppercase my-2">Nombre: {' '}
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>
            <p className="font-bold uppercase my-2">Rut: {' '}
                <span className="font-normal normal-case">
                    {rut}
                </span>
            </p>
            <p className="font-bold uppercase">Fecha: {' '} 
                <span className="font-normal normal-case">
                    {formatearFecha(fecha)}
                </span>
            </p>
            <p className="font-bold uppercase my-2">Email: {' '}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold uppercase my-2">Sintomas: {' '}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <p className="font-bold uppercase my-2">Contacto Emergencia: {' '} 
                <span className="font-normal normal-case">
                    {contacto}
                </span>
            </p>
            <p className="font-bold uppercase my-2">Email Emergencia: {' '}
                <span className="font-normal normal-case">
                    {emailcontacto}
                </span>
            </p>
            <div className="flex justify-between my-5">
                <button type="button" className="py-2 px-5 md:px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg" 
                onClick={() => setEdicion(paciente)}>Reagendar</button>
                <button type="button" className="py-2 px-5 md:px-10 bg-red-800 hover:bg-red-900 text-white uppercase font-bold rounded-lg" onClick={() => eliminarPaciente(_id)}>Finalizar</button>

            </div>
            
        </div>
    );
};
export default Paciente;
import usePacientes from '../hooks/usePacientes';
import Paciente from './Paciente';

const ListadoPacientes = () => {
    const {pacientes} = usePacientes()
    console.log("pacientes", pacientes)
    return (
        <>{pacientes.length ?
            (
                <>
                <h2 className='font-bol text-3xl'>
                    Tines un total de {`${pacientes.length}`} pacientes por atender
                </h2>
                <p className='text-xl mt-5 mb-10'>
                    Estas realizando un  {' '}
                    <span className='text-indigo-500 font-bold'> buen trabajo</span>
                </p>
                {pacientes.map(paciente => (
                <Paciente
                    key={paciente._id}
                    paciente={paciente}
                />
                ))}

                
                </>
            ) : 
            
            (
                <>
                <h2 className='font-bol text-xl'>
                    No tienes citas medicas por realizar
                </h2>
                <p className='text-xl mt-5 mb-10'>
                    Muy buen trabajo {' '}
                    <span className='text-indigo-500 font-bold'> continua brindando una buena atención</span>
                </p>
                </>
            )
        }
        
        </>
    )
}
export default ListadoPacientes
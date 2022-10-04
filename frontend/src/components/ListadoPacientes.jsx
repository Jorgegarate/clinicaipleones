import usePacientes from '../hooks/usePacientes';
import Paciente from './Paciente';

const ListadoPacientes = () => {
    const {pacientes} = usePacientes()
    console.log("pacientes", pacientes)
    return (
        <>{pacientes.length ?
            (
                <>
                <h2 className='font-bold text-3xl color-title'>
                    Pacientes por atender {`${pacientes.length}`} 
                </h2>
                <p className='text-xl mt-5 mb-10'>
                    Estas realizando un  {' '}
                    <span className='color-title font-bold'> buen trabajo</span>
                </p>
                <div className='grid lg:grid-cols-2 gap-4'>
                {pacientes.map(paciente => (
                
                    <Paciente
                    key={paciente._id}
                    paciente={paciente}
                    />
        
                
                ))}
                </div>

                
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
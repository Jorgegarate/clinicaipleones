import {useState} from 'react';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';


const Main = (props) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    return(
    <>
    <section className={`${props.className}`}>
    <div className='flex justify-end items-center'>
    <p className="text-lg text-center">
                Añade los pacientes y {''}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>
    <button type='button' className={` bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md flex items.center`}  onClick={() => setMostrarFormulario(!mostrarFormulario)}>
    <p>{`${mostrarFormulario?  'Finalizar': 'Agregar'}`}</p> 
    
    
    </button>
    </div>
    <div className='flex flex-col md:flex-row'>
    <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:w-1/3 lg:w-2/5`}>
    
    <Formulario/>
    </div>
    <div className='md:w-2/3 lg:w-3/5'>
    <ListadoPacientes/>
    </div>
    </div>

    </section>
    </>
    );
}
export default Main
import {useState} from 'react';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';

const Main = (props) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    
   
            console.log("nuevo estadp",props)

    
    return(
    <>
    <section className={`${props.className} md:section`}>
    <div className='flex flex-col md:flex-row justify-center md:justify-end items-center my-10'>
    <p className="py-5 md:py-0 text-lg text-center">
                Añade los pacientes y {''}
                <span className="color-title font-bold"> Administralos</span>
            </p>
    <button type='button' className={` color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover uppercase md:ml-10 p-3 rounded-md flex items-center`}  onClick={() => setMostrarFormulario(!mostrarFormulario)}>
    <p>{`${mostrarFormulario?  'Finalizar': 'Agregar'}`}</p> 
    
    
    </button>
    </div>
    <div className={`${mostrarFormulario ? 'block sm:w-full modal-new' : 'hidden' } w-full `}>
        <div className='modal' onClick={() => setMostrarFormulario(!mostrarFormulario)}></div>
    <div className='modal-container'>
        <div className='y'>
            <button className='modal-close color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover uppercase' onClick={() => setMostrarFormulario(!mostrarFormulario)}>x</button>
        <Formulario/>
        </div>

    </div>

    </div>
    <div className='flex flex-col md:flex-row-reverse '>

    <div className={`${mostrarFormulario ? 'block w-full xl:w-1/2' : 'w-full' }`}>
    <ListadoPacientes/>
    </div>
    </div>

    </section>
    </>
    );
}
export default Main
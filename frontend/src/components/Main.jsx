import React from 'react';
import Formulario from './Formulario';
import ListadoPaciente from './ListadoPaciente';


const Main = (props) => {
    console.log("main",props)
    return(
    <>
    <main className={`${props.className} flex flex-col md:flex-row`}> hola desdez
    <div className='md:w-1/2 lg:w-2/5'>
    <Formulario/>
    </div>
    <div className='md:w-1/2 lg:w-2/5'>
    <ListadoPaciente/>
    </div>
    </main>
    </>
    );
}
export default Main
const Formulario = () => {
    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade los pacientes y {''}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>
            <form >
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="usuario">Nombre</label>
                    <input type="text" id="usuario" placeholder="Nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="emergencia">Nombre en caso de emergencia</label>
                    <input type="text" id="emergencia" placeholder="Nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="email">Nombre</label>
                    <input type="email" id="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "  />

                </div>
                <div className="mb-5">
                    <label  className="text-gray-700 uppercase font-bold" htmlFor="alta">Fecha</label>
                    <input type="date" id="alta" placeholder="Solicitud" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "  />
    
                </div>
            </form>
        </>

    )
}
export default Formulario
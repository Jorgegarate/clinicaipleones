const Paciente = ({paciente}) => {
    const {email, nombre, rut, contacto, emailcontacto, fecha, sintomas, _id} =paciente
    return (
        <div className="mx-5 my-10 bg-white shadow-sm px-5 py-10 rounded-xl">
            <p className="font-bold uppercase">Nombre: {' '}
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>
            <p className="font-bold uppercase">Rut: {' '}
                <span className="font-normal normal-case">
                    {rut}
                </span>
            </p>
            <p className="font-bold uppercase">Fecha: {' '} 
                <span className="font-normal normal-case">
                    {fecha}
                </span>
            </p>
            <p className="font-bold uppercase">Email: {' '}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold uppercase">Sintomas: {' '}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <p className="font-bold uppercase">Contacto Emergencia: {' '} 
                <span className="font-normal normal-case">
                    {contacto}
                </span>
            </p>
            <p className="font-bold uppercase">Email Emergencia: {' '}
                <span className="font-normal normal-case">
                    {emailcontacto}
                </span>
            </p>
            
        </div>
    );
};
export default Paciente;
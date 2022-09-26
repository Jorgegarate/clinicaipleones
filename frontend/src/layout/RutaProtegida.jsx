import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const RutaProtegida = () => {
    const {auth, cargando} = useAuth()
    console.log("a",auth)
    console.log("b",cargando)
    if(cargando) return'cargando...'

    return(
    <>
    <h1>Este es el dashboard</h1>
    {/*Si esta auth (token) muesta outlet sino entonces login 
    ?.id para no solo validar si es true si no el id correspondiente
    */
    }
    {/*Verificar en el controllers si tiene un objeto o la forma de ingresar es distinta 
    IMPORTANTE DEJAR TODO JUNTO SOLUCION DE RECARGA Y NO CAMBIO DE RUTA*/}
    {auth.medico?._id ?<Outlet/>:<Navigate to="/"/>} 
    </>
    )
};
export default RutaProtegida
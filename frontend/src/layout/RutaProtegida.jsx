import { Outlet, Navigate } from "react-router-dom";
//componentes
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
const RutaProtegida = () => {
    const {auth, cargando} = useAuth()
    console.log("a",auth)
    console.log("b",cargando)
    if(cargando) return'cargando...'

    return(
    <>
    <Header></Header>
    <Navbar></Navbar>
    <h1>Este es el dashboard</h1>
    {/*Si esta auth (token) muesta outlet sino entonces login 
    ?.id para no solo validar si es true si no el id correspondiente
    */
    }
    {/*Verificar en el controllers si tiene un objeto o la forma de ingresar es distinta 
    IMPORTANTE DEJAR TODO JUNTO SOLUCION DE RECARGA Y NO CAMBIO DE RUTA*/}
    {(auth.medico)?._id ?<Outlet/>:<Navigate to="/"/>} 
    <Footer></Footer>
    </>
    )
};
export default RutaProtegida
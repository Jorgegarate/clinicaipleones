import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import Menu from './Menu';
import Main from "./Main";
import Logo from "../img/logo.png"
const Dashboard = () => {

    const {cerrarSesion} = useAuth()
    const [isSignUp, setSignUp] = useState(true);

    
    return (
        <>
            <header  className="navbar active py-5 sticky top-0">
            
            <div className=" container-new header mx-auto flex justify-between items-center ">
                <div className="logo flex justify-between items-center">
                <img src={`${Logo}`} className="img " />
                <h1 className={isSignUp ? "logito font-bold uppercase text-3xl color" : "logo-none"}>CPG</h1>
                <button className="flex justify-between" onClick={() =>isSignUp? setSignUp(false): setSignUp(true)}>
                <ion-icon size="large" name="menu-outline"></ion-icon>
                </button>
                </div>

                <nav className="flex gap-4 sticky">
                    <Link to="/admin">Paciente</Link>
                    <Link to="/admin">Perfil</Link>
                    <button type="button" onClick={cerrarSesion}>cerrar sesión</button>
                </nav>
            </div>
            
        </header>
        
        <Menu className={isSignUp ? "sidebar" : "side-closed sidebar"}/>
        <Main className={isSignUp ? "section closed" : "section"}/>
        </>

    )
}
export default Dashboard;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Main from "./Main";
import Logo from "../img/logo.png"
import Medico from "../img/medico.png"
const Dashboard = () => {

    const nombre = localStorage.getItem('nombre')
    console.log("nombre user", nombre)
    const [isSignUp, setSignUp] = useState(true);

    
    return (
        <>
            <header  className="navbar active py-5 sticky top-0">
            
            <div className=" container-new header mx-auto flex justify-between items-center ">
                <div className="logo w-full md:w-auto flex justify-between items-center">
                <img src={`${Logo}`} className="img " />
                <h1 className={isSignUp ? " logito font-bold uppercase text-3xl color  invisible md:visible" : "logo-none "}>CPMG</h1>
                <button className="flex justify-between" onClick={() =>isSignUp? setSignUp(false): setSignUp(true)}>
                <ion-icon size="large" name="menu-outline"></ion-icon>
                </button>
                </div>

                <nav className="color-title gap-4 hidden md:flex center-text">
                    <Link to="/admin">Paciente</Link>
                    <Link to="/admin">Perfil</Link>
                    <li className="flex items-center font-bold text-gray-700 list-none">Hola {`${nombre}`}!
                    <img className="imgsimbolo" src={`${Medico}`} alt="" /></li>
                </nav>
            </div>
            
        </header>
        
        <Menu className={isSignUp ? "sidebar" : "side-closed sidebar"}/>
        <Main className="section"/>
        </>

    )
}
export default Dashboard;
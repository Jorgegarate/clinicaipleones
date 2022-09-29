import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Main from "./Main";
const Dashboard = () => {

    const [isSignUp, setSignUp] = useState(true);
    console.log("bbbbb", isSignUp)
    
    return (
        <>
                <header  className="navbar active py-5">
            
            <div className="container mx-auto flex justify-between items-center ">
                <button onClick={() =>isSignUp? setSignUp(false): setSignUp(true)}>
                <img src="../img/reorder-three-outline.svg" alt="" />
                </button>
                <nav className="flex gap-4">
                    <Link to="/admin">Paciente</Link>
                    <Link to="/admin">Perfil</Link>
                    <button>cerrar sesión</button>
                </nav>
            </div>
            
        </header>
        
        <Menu className={isSignUp ? "sidebar" : "side-closed sidebar"}/>
        <Main className={isSignUp ? "section closed" : "section"}/>
        </>

    )
}
export default Dashboard;
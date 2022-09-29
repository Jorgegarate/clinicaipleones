import React from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu'
const Header = () => {
    return (
        <header className="py-10 ">
            <Menu/>
            <div className="container mx-auto flex justify-between items-center">
                <h1>Adminiistrador de Paciente de vvv {''} <span className="text-indigo-400">Clinica-IP</span></h1>
                <nav className="flex gap-4">
                    <Link to="/admin">Paciente</Link>
                    <Link to="/admin">Perfil</Link>
                    <button>cerrar sesión</button>
                </nav>
            </div>
        </header>
    )
}
export default Header;
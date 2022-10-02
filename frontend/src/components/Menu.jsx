import React from 'react';
import useAuth from "../hooks/useAuth";
const Menu = (props) => {
    const {cerrarSesion} = useAuth()
    return(
    <>
    <nav className={props.className}>
        <ul>
            <li>hola</li>
            <li>este</li>
            <li>chao</li>
            <li><button type="button" onClick={cerrarSesion}>cerrar sesión</button></li>
        </ul>
    </nav>
    </>
    );
}
export default Menu
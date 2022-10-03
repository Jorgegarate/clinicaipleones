import React from 'react';
import useAuth from "../hooks/useAuth";
const Menu = (props) => {
    const {cerrarSesion} = useAuth()
    return(
    <>
    <nav className={props.className}>
        <ul className='li'>
            <li>hola</li>
            <li>este</li>
            <li>chao</li>
            <li><button type="button flex items-center" onClick={cerrarSesion}>
            <ion-icon name="exit-outline" size="small"></ion-icon>
                Salir
                
                </button></li>
        </ul>
    </nav>
    </>
    );
}
export default Menu
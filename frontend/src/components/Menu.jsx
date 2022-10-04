import React from 'react';
import useAuth from "../hooks/useAuth";
const Menu = (props) => {
    const {cerrarSesion} = useAuth()
    return(
    <>
    <nav className={props.className}>
        <ul className='li'>
            <li className='flex items-center'><ion-icon name="happy-outline" size="small"></ion-icon> Nuevo</li>
            <li className='flex items-center'><ion-icon name="receipt-outline" size="small"></ion-icon> Agendar</li>
            <li className='flex items-center'><ion-icon name="settings-outline" size="small"></ion-icon> Modificar</li>
            <li><button className=" flex items-center" type="button" onClick={cerrarSesion}>
            <ion-icon name="exit-outline" size="small"></ion-icon>
                <p>Salir</p>
                
                </button></li>
        </ul>
    </nav>
    </>
    );
}
export default Menu
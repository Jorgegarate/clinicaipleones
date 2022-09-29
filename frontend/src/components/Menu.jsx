import React from 'react';

const Menu = (props) => {
    console.log("aaa",props)
    return(
    <>
    <nav className={props.className}> Navbar hola
    </nav>
    </>
    );
}
export default Menu
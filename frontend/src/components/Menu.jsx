import React from 'react';

const Menu = (props) => {
    console.log("aaa",props)
    return(
    <>
    <nav className={props.className}>
        <ul>
            <li>hola</li>
            <li>este</li>
            <li>chao</li>
            <li>va</li>
        </ul>
    </nav>
    </>
    );
}
export default Menu
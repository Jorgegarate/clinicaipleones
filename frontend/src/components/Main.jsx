import React from 'react';

const Main = (props) => {
    console.log("main",props)
    return(
    <>
    <main className={props.className}> hola desdez
    </main>
    </>
    );
}
export default Main
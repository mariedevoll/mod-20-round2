import React from 'react';
//import "../../Images/selfie.jpeg";

function Header({children}) {
    return (
        <header className="header">
            {/* <section>
                <img className="selfie" src='Images/selfie.jpeg' alt='selfie'></img>
            </section> */}
            <h1>
                Hi, my name is Marie DeVoll
            </h1>
            {children}
        </header>
    );
}
export default Header;
import React from 'react';
import "./header.css";

function Header(props) {
    return (
        <header className="header">
            <section>
                <img className="banner-img" src="images/selfie.jpeg" alt='Marie DeVoll Logo'></img>
            </section>
            <h1>
                Hi, my name is Marie DeVoll
            </h1>
        </header>
    );
}
export default Header;
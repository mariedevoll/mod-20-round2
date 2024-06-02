import React from 'react';
import './footer.css';

function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/mariedevoll"
        }, {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/mariedevoll/"
        }, {
            name: "fa-solid fa-envelope",
            link: "mailto:marie.devoll@gmail.com"
        }
    ]

    let date = new Date().getFullYear

    return (
        <footer className="footer">
            <div>Marie DeVoll</div>
            <div>©{date}</div>
            <div className="icon-container">
                {icons.map(icon => (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className={icon.name}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}
export default Footer;
import React, { useEffect } from 'react';
import './nav.css';

function Nav(props) {
    const {pages = [], setCurrentPage, currentPage,} = props;

    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);

    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                {pages.map((page) => {
                    <li className={`nav-item ${currentPage.name === page.name ? 'active' : ''}`}>
                        <span className='nav-link' onClick={() => setCurrentPage(page)}>
                            {page.name}
                        </span>
                    </li>
                })}
            </ul>
        </nav>
    );
}
export default Nav;
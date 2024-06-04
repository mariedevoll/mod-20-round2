import './nav.css';

function Nav ({pages, setCurrentPage, currentPage}) {

    // useEffect(() => {
    //     document.title = currentPage.name;
    // }, [currentPage]);
console.log(pages);
    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                {pages.map((page) => (
                     <li className={`nav-item ${currentPage.name === page.name ? 'active' : ''}`}>
                        <span className='nav-link' onClick={() => setCurrentPage(page)}>
                            {page.name} hello
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Nav;
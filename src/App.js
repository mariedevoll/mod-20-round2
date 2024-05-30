// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import Page from "./Components/Page/page";

function App() {
    const [pages] = useState([
        {
            name: "About",
        }, {
            name: "Portfolio",
        }, {
            name: "Resume",
        }, {
            name: "Contact",
        }
    ])

    const [currentPage, setCurrentPage] = useState(pages[0]);

  return <div>
        <Header>
            <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </Header>
        <main>
            <Page currentPage={currentPage}/>
        </main>
        <Footer/>
    </div>
}

export default App;

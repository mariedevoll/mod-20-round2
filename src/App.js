// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/NavTab";
import Footer from "./components/Footer";
import Page from "./components/Page";

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
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
     <div>
        <Header>
            <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </Header>
        <main>
            <Page currentPage={currentPage}/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;

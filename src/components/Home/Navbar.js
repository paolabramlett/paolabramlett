import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">Paola Bramlett</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">My Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                <span className="icons">
                        <a className="p-2" href="https://www.instagram.com/paolabramlett/" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-instagram"></i></a>
                        <a className="p-2" href="https://www.linkedin.com/in/paolabramlett/" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-linkedin"></i></a>
                        <a className="p-2" href="https://github.com/paolabramlett" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-github"></i></a>
                </span>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;
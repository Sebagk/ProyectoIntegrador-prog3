import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav>
            <Link to={"/"}><img src="/img/logo.png" alt="Logo" className="logo" /></Link>
            <div className="main-nav-container">
                <ul className="main-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/populares">Populares</Link></li>
                    <li><Link to="/estrenos">Estrenos</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;


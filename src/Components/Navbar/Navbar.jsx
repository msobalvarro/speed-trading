import React from 'react'

// Import styles and assets
import './Navbar.scss'
import Logo from "../../Assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navigaion-bar">
            <img src={Logo} className="brand-logo" alt="logo"/>

            <div className="list">
                <a href="#" className="item active">Inicio</a>

                <a href="#" className="item">Informacion</a>

                <a href="#" className="item">Tablero</a>

                <a href="#" className="item">Registrarme</a>
            </div>
        </nav>
    )
}

export default Navbar
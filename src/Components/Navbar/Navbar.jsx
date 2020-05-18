import React from 'react'

// Import styles and assets
import './Navbar.scss'
import Logo from "../../Assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navigaion-bar">
            <img src={Logo} className="brand-logo" alt="logo"/>

            <div className="list">
                <a href="#info" className="item">Informacion</a>

                <a href="#exchange" className="item">AlyExchange</a>

                <a href="https://dashboard-speedtradings-bank.herokuapp.com" target="_bank" className="item">Dashboard</a>

                <a href="https://dashboard-speedtradings-bank.herokuapp.com/#/register" target="_bank" className="item">Registrarme</a>
            </div>
        </nav>
    )
}

export default Navbar
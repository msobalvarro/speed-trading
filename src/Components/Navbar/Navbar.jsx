import React, {useState} from 'react'

// Import styles and assets
import './Navbar.scss'
import Logo from "../../Assets/alysystem.png"
import Menu from "../../Assets/menu.svg"
import Close from "../../Assets/close.svg"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <nav className="navigaion-bar">
            <img src={Logo} className="brand-logo" alt="logo"/>
            <img src={Menu} onClick={_ => setShowNavbar(true)} className="menu" alt="menu"/>

            <div className={`list ${showNavbar ? 'active' : ''}`}>
                <a href="#exchange" className="item">AlyExchange</a>

                <a href="#alypay" className="item">AlyPay</a>

                <a href="#benefits" className="item">Beneficios</a>

                <a href="https://dashboard-speedtradings-bank.herokuapp.com" target="_bank" className="item">Dashboard</a>

                <a href="#plans" className="item">Planes de inversión</a>
                
                <a href="#register" className="item">Registrarme</a>

                <img src={Close} onClick={_ => setShowNavbar(false)} className="close" alt="close"/>
            </div>
        </nav>
    )
}

export default Navbar
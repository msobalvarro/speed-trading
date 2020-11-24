import React, {useState, useEffect, } from 'react'

// Import styles and assets
import './Navbar.scss'
import Logo from "../../Assets/alysystem.png"
import Menu from "../../Assets/menu.svg"
import Close from "../../Assets/close.svg"
import ArrowUp from "../../Assets/arrow-up.svg"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const onTopScroll = _ => {
        document.querySelector('body').scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <nav className="navigaion-bar">
            <img src={Logo} className="brand-logo" alt="logo"/>
            <img src={Menu} onClick={_ => setShowNavbar(true)} className="menu" alt="menu"/>

            <div className={`list ${showNavbar ? 'active' : ''}`}>
                <a onClick={_ => setShowNavbar(false)} href="#exchange" className="item">AlyExchange</a>

                <a onClick={_ => setShowNavbar(false)} href="#alypay" className="item">AlyPay</a>

                <a onClick={_ => setShowNavbar(false)} href="#benefits" className="item">Beneficios</a>

                <a onClick={_ => setShowNavbar(false)} href="https://www.speedtradings-bank.com" target="_bank" className="item">Dashboard</a>

                <a onClick={_ => setShowNavbar(false)} href="#plans" className="item">Planes de inversión</a>
                
                <a onClick={_ => setShowNavbar(false)} href="#register" className="item">Registrarme</a>

                <img src={Close} onClick={_ => setShowNavbar(false)} className="close" alt="close"/>
            </div>

            <img onClick={_ => onTopScroll()} src={ArrowUp} alt="" title="Ir al inicio" className="top-scroll"/>
        </nav>
    )
}

export default Navbar
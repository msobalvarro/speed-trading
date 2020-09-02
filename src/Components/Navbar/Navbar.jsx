import React from 'react'

// Import styles and assets
import './Navbar.scss'
import Logo from "../../Assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navigaion-bar">
            <img src={Logo} className="brand-logo" alt="logo"/>

            <div className="list">
                <a href="#alypay" className="item">AlyPay</a>

                <a href="#exchange" className="item">AlyExchange</a>

                <a href="#benefits" className="item">Beneficios</a>

                <a href="https://dashboard-speedtradings-bank.herokuapp.com" target="_bank" className="item">Dashboard</a>

                <a href="#plans" className="item">Planes de inversión</a>
                
                <a href="#register" className="item">Registrarme</a>

                {/*<a className="item button-google-play" href="https://play.google.com/store/apps/details?id=com.speedtradingsapp" target="_blank">
                    <img src={googlePlayImage} alt="google-play"/>
                </a>*/}
            </div>
        </nav>
    )
}

export default Navbar
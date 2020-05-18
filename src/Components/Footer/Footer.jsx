import React from 'react'

// Import image and assets
import './Footer.scss'
import AlySystem from '../../Assets/alysystem.png'

const Footer = () => {
    return (
        <footer>
            <img src={AlySystem} alt="alysystem" />

            <span>
                &copy; Copyright {new Date().getFullYear()}
            </span>

            <a target="_blank" className="support" href="mailto:tradingspeed4@gmail.com?subject=Soporte">Enviar email a soporte</a>
        </footer>
    )
}

export default Footer
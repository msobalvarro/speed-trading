import React from 'react'

// Import image and assets
import './Footer.scss'
import AlySystem from '../../Assets/alysystem.png'
import FacebookIcon from '../../Assets/facebook-icon.png'

const Footer = () => {
    return (
        <footer>
            <img src={AlySystem} alt="alysystem" />

            <div className="block">
                <a href="https://www.facebook.com/Speed-Tradings-106534004312000" target="_blank" className="facebook">
                    <img src={FacebookIcon} alt="Facebook" />
                </a>

                <span>
                    &copy; Copyright {new Date().getFullYear()}
                </span>
            </div>

            <a target="_blank" className="support" href="mailto:tradingspeed4@gmail.com?subject=Soporte">Enviar email a soporte</a>
        </footer>
    )
}

export default Footer
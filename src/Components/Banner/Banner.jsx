import React from 'react'

// Import Assets and styles
import './Banner.scss'
import dashboardImage from "../../Assets/dashboard.png"
import googlePlayImage from "../../Assets/google-play.png"

const Banner = () => {
    return (
        <div className="banner" id="info">
            <img src={dashboardImage} className="cover" alt="banner" />

            <div className="info">
                <h1>¿Qué es Speed Tradings?</h1>

                <p>
                    Es tu plataforma descentralizada de inversión en criptomonedas donde obtendras 
                    una rentabilidad de lunes a viernes del 0.5% al 1% de tu capital de inversión, 
                    asegurándote un rendimiento semanal de hasta un 5% hasta duplicar tu inversión.
                </p>

                <a className="button-google-play" href="#">
                    <img src={googlePlayImage} alt="google-play"/>
                </a>
            </div>
        </div>
    )
}

export default Banner
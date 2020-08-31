import React from 'react'

// Import Assets and styles
import './Banner.scss'
import dashboardImage from "../../Assets/Speed.png"
import googlePlayImage from "../../Assets/google-play.png"

// Import Components
import { AndroidLink, IosLink } from "../AppDownloadLink/AppDownloadLink"

const Banner = () => {
    return (
        <div className="banner" id="info">
            <img src={dashboardImage} className="cover" alt="banner" />

            <div className="info">
                <h1>¿Qué es <span>Speed</span> <span>Tradings</span>?</h1>

                <p>
                    Es tu aplicación multiservicios de inversión y usabilidad en criptomonedas de AlySystem.
                </p>

                <p className="apps-links">
                    <AndroidLink/>
                    <IosLink/>
                </p>
            </div>
        </div>
    )
}

export default Banner
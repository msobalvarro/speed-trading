import React from "react"
import "./SpeedTradings.scss"

// Import Components
import { AndroidLink, IosLink } from "../AppDownloadLink/AppDownloadLink"


const SpeedTradings = () => {
    return (
        <div className="SpeedTradings">
            <div className="info">
                <h1>¿Qué es <span>Speed</span> <span>Tradings?</span></h1>

                <p>
                    Es una aplicación multiservicios de inversión y usabilidad en criptomonedas de AlySystem
                </p>
            </div>

            <p className="apps-links">
                <AndroidLink/>
                <IosLink/>
            </p>
        </div>
    )
}

export default SpeedTradings
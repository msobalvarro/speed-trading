import React, {useEffect, useState, useRef} from 'react'

// Import Assets and styles
import './Banner.scss'
import dashboardImage from "../../Assets/Speed.png"

// Import Components
import { AndroidLink, IosLink } from "../AppDownloadLink/AppDownloadLink"

const Banner = () => {
    const [loadedImg, setLoadedImg] = useState(false)
    const coverImg = useRef(null)

    useEffect(_ => {
        coverImg.current.addEventListener('load', _ => {
            setLoadedImg(true)
        })
    }, [])

    return (
        <div className="banner" id="info" data-animate="false">
            <img ref={coverImg} src={dashboardImage} className={`cover ${loadedImg ? 'animate' : ''}`} alt="banner" />

            <div className="info">
                <h1>¿<span className="q">Q</span>ué es <span>Speed</span> <span>Tradings</span>?</h1>

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
import React, { useState, useEffect } from 'react'

// Import image and assets
import './Footer.scss'
import AlyCoin from '../../Assets/AlyCoin.png'
import AlyCoinLetters from '../../Assets/AlyCoin-letters.png'
import { ReactComponent as LocationIcon } from '../../Assets/location-pin.svg'

const urlPDF = "https://drive.google.com/file/d/13_2tfprMchj06zf5dfZVR-7VPkY0JGCj/view?usp=sharing"

const Footer = () => {
    const [active, setActive] = useState(1)

    // Url de las redes sociales
    const twitter = 'https://twitter.com/AlySystem_1?s=09'
    const facebook = 'https://www.facebook.com/AlySystemOficial/'
    const instagram = 'https://instagram.com/alysystem_1?igshid=1gbeiyxfj3i68'
    const telegram = 'https://t.me/joinchat/NUHb5RppOxJX9-EsU041mQ'
    const whatsapp = 'https://wa.me/+50660727720'

    useEffect(_ => {
        setTimeout(_ => {
            setActive((active === 3) ? 1 : (active + 1))
        }, 5000)
    }, [active])

    return (
        <footer>
            <div className="container">
                <div className="Copyright">
                    <span>&copy;Copyright {new Date().getFullYear()} AlySystem | RUC J031000037155</span>

                    <div className='locations'>
                        <LocationIcon />
                        Frente club terraza, Edificio Discover. Tercer piso. Managua, Nicaragua
                    </div>
                    <div className='locations'>
                        <LocationIcon />
                        Edificio Torrez, Paseo Colón. Piso No. 9, Oficina No.909. San José, Costa Rica
                    </div>

                    <div className='social-links'>
                        <a href={twitter} target='_blank' rel={"noopener noreferrer"} className="social-icon twitter"></a>
                        <a href={facebook} target='_blank' rel={"noopener noreferrer"} className='social-icon facebook'></a>
                        <a href={instagram} target='_blank' rel={"noopener noreferrer"} className='social-icon instagram'></a>
                        <a href={telegram} target='_blank' rel={"noopener noreferrer"} className='social-icon telegram'></a>
                        <a href={whatsapp} target='_blank' rel={"noopener noreferrer"} className='social-icon whatsapp'></a>
                    </div>
                </div>

                <div className='support-container'>
                    <p className={active === 1 ? 'active' : ''}>
                        ¿Consultas? <a href={urlPDF} target="_blank" rel={"noopener noreferrer"} download>ver más información</a>
                    </p>

                    <p className={active === 2 ? 'active' : ''}>
                        ¿Dudas? <a href={urlPDF} target="_blank" rel={"noopener noreferrer"} download>ver más información</a>
                    </p>

                    <p className={active === 3 ? 'active' : ''}>
                        ¿Inquietudes? <a href={urlPDF} target="_blank" rel={"noopener noreferrer"} download>ver más información</a>
                    </p>

                    <a target="_blank" rel={"noopener noreferrer"} className="support" href="mailto:soporte@alysystem.com?subject=Soporte AlySystem">
                        <span className='social-icon email'></span>
                        Contactar a soporte
                    </a>
                </div>
            </div>

            <div className="alycoin">
                <img src={AlyCoin} alt="alycoin" className="logo" />
                <img src={AlyCoinLetters} alt="alycoin" className="letters" />
            </div>

        </footer>
    )
}

export default Footer
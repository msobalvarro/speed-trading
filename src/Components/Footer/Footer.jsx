import React, {useState, useEffect} from 'react'

// Import image and assets
import './Footer.scss'
import AlySystem from '../../Assets/alysystem.png'
import AlyCoin from '../../Assets/AlyCoin.png'

const Footer = () => {
    const [active, setActive] = useState(1)

    // Url de las redes sociales
    const twitter = 'https://twitter.com/AlySystem_1?s=09'
    const facebook = 'https://www.facebook.com/AlySystemOficial/'
    const instagram = 'https://instagram.com/alysystem_1?igshid=1gbeiyxfj3i68'
    const telegram = 'https://t.me/joinchat/NUHb5RppOxJX9-EsU041mQ'
    const whatsapp = 'https://wa.me/+50660727720'
    //const SpeedTradingsFacebook = 'https://www.facebook.com/Speed-Tradings-106534004312000'

    useEffect(_ => {
        setTimeout(_ => {
            setActive((active===3) ? 1 : (active + 1))
        }, 5000)
    }, [active])

    return (
        <footer>
            <div className="Copyright">
                <span>&copy;Copyright {new Date().getFullYear()} AlySystem | RUC J031000037155</span>

                <div className='social-links'>
                    <a href={twitter} target='_blank' rel="noopener noreferrer" className="social-icon twitter"></a>
                    <a href={facebook} target='_blank' rel="noopener noreferrer" className='social-icon facebook'></a>
                    <a href={instagram} target='_blank' rel="noopener noreferrer" className='social-icon instagram'></a>
                    <a href={telegram} target='_blank' rel="noopener noreferrer" className='social-icon telegram'></a>
                    <a href={whatsapp} target='_blank' rel="noopener noreferrer" className='social-icon whatsapp'></a>
                </div>
            </div>

            <div className='support-container'>
                <p className={active===1 ? 'active' : ''}>¿Consultas?</p>
                <p className={active===2 ? 'active' : ''}>¿Dudas?</p>
                <p className={active===3 ? 'active' : ''}>¿Inquietudes?</p>

                <a target="_blank" className="support" href="mailto:tradingspeed4@gmail.com?subject=Soporte">
                    <span className='social-icon email'></span>
                    Contactar a soporte
                </a>
            </div>

            <div className="logos">
                <div className="alycoin"><img src={AlyCoin} alt="alycoin" /></div>
                <img src={AlySystem} alt="alysystem" className="alysystem" />
            </div>

        </footer>
    )
}

export default Footer
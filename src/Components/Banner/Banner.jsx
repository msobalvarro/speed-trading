import React, {useEffect, useState, useRef} from 'react'

// Import Assets and styles
import './Banner.scss'
import SpeedBanner1 from '../../Assets/speed-banner-1.png'
import SpeedBanner2 from '../../Assets/speed-banner-2.png'


const Banner = () => {
    const [loadedImg, setLoadedImg] = useState(false)
    const [loadedImg2, setLoadedImg2] = useState(false)
    const speedBanner1Ref = useRef(null)
    const speedBanner2Ref = useRef(null)

    useEffect(_ => {
        speedBanner1Ref.current.addEventListener('load', _ => {
            setLoadedImg(true)
        })

        speedBanner1Ref.current.addEventListener('load', _ => {
            setLoadedImg2(true)
        })
    }, [])

    return (
        <div className="banner" id="info" data-animate="false">
            <img ref={speedBanner1Ref} src={SpeedBanner1} className={`cover speedbanner1 ${loadedImg ? 'animate' : ''}`} alt="banner" />
            <img ref={speedBanner2Ref} src={SpeedBanner2} className={`cover speedbanner2  ${loadedImg2 ? 'animate' : ''}`} alt="banner" />

            <div className="info">
                <h1>¿Qué es <span>AlySystem?</span></h1>

                <p>
                    Es una empresa dedicada al desarrollo de aplicaciones para la usabilidad de las criptomonedas y tiene su propia criptomoneda AlyCoin
                </p>
            </div>
        </div>
    )
}

export default Banner
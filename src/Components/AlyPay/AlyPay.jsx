import React from 'react'

// Import Assets and styles
import './AlyPay.scss'
import AlyImage from '../../Assets/alypay.png'
import googlePlayImage from "../../Assets/google-play.png"

const AlyPay = () => {
    return (
        <div className="alypay">
            <div className="row">
                <img src={AlyImage} alt="AlyImage" />

                <p>
                    Es la pasarela de pago donde los usuarios podrán hacer transferencias
                    y pagos con criptomonedas a través de las aplicaciones de AlySystem.
                </p>
            </div>
            <div className="row">
                <a className="button-google-play" href="https://play.google.com/store/apps/details?id=com.alypay">
                    <img src={googlePlayImage} alt="google-play" />
                </a>
            </div>
        </div>
    )
}

export default AlyPay
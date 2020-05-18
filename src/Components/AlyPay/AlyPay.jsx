import React from 'react'

// Import Assets and styles
import './AlyPay.scss'
import AlyImage from '../../Assets/alypay.png'

const AlyPay = () => {
    return (
        <div className="alypay">
            <img src={AlyImage} alt="AlyImage" />

            <p>
                Es la pasarela de pago donde los usuarios podrán hacer transferencias
                y pagos con criptomonedas a través de las aplicaciones de AlySystem.
            </p>
        </div>
    )
}

export default AlyPay
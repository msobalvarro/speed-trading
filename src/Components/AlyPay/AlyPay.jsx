import React from 'react'

// Import Assets and styles
import './AlyPay.scss'
import AlyImage from '../../Assets/alypay.png'

const AlyPay = () => {
    return (
        <div className="alypay">
            <img src={AlyImage} alt="AlyImage" />

            <p>
                AlyPay es el sistema de pago de AlySystem donde los usuarios podrán hacer transferencias
                y pagos con criptomonedas en los comercios afiliados a nuestra app.
            </p>
        </div>
    )
}

export default AlyPay
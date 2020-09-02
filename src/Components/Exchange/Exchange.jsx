import React from 'react'

// Import Styles and asset
import './Exchange.scss'
import ExchangeImage from '../../Assets/exchange.png'

const Exchange = () => {
    return (
        <div className="content-exchange" id="exchange" data-animate="false">
            <div className="info">
                <h2>AlyExhange</h2>

                <p>
                    Es la plataforma de intercambios de criptomonedas de AlySystem. Puedes encontrar AlyExchange a través de la aplicación Speed Tradings. Como beneficio del Exchange, podrás comprar, intercambiar o vender tus criptomonedas a través de nuestra app.
                </p>
            </div>

            <img src={ExchangeImage} alt="exchange" />
        </div>
    )
}

export default Exchange
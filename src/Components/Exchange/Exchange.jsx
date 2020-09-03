import React, {useState, useEffect} from 'react'

// Import Styles and asset
import './Exchange.scss'
import telephone from '../../Assets/telephone.png'
import ExchangeImage from '../../Assets/exchange.png'
import ExchangeImage2 from '../../Assets/exchange2.jpg'
import ExchangeImage3 from '../../Assets/exchange3.jpg'

const Exchange = () => {
    const [activeItem, setActiveItem] = useState(1);

    // Realiza el cambio del item activo luego de 5 segundos
    useEffect(_ => {
        setTimeout(_ => {
            if(activeItem === 3) {
                setActiveItem(1)
            }else {
                setActiveItem(activeItem + 1)
            }
        }, 3000)
    }, [activeItem])

    return (
        <div className="content-exchange" id="exchange" data-animate="false">
            <div className="info">
                <h2>AlyExhange</h2>

                <p>
                    Es la plataforma de intercambios de criptomonedas de AlySystem. Puedes encontrar AlyExchange a través de la aplicación Speed Tradings. Como beneficio del Exchange, podrás comprar, intercambiar o vender tus criptomonedas a través de nuestra app.
                </p>
            </div>

            <div className="telephone-view">
                <img src={telephone} alt="" className="telephone"/>
                <img src={ExchangeImage} alt="" className={`${activeItem===1 ? 'active' : ''}`}/>
                <img src={ExchangeImage2} alt="" className={`${activeItem===2 ? 'active' : ''}`}/>
                <img src={ExchangeImage3} alt="" className={`${activeItem===3 ? 'active' : ''}`}/>
            </div>
        </div>
    )
}

export default Exchange
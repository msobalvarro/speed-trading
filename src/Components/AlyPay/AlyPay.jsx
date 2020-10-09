import React, {useState, useEffect} from 'react'

// Import Assets and styles
import './AlyPay.scss'
import AlyImage from '../../Assets/alypay.png'
import Alypay1 from '../../Assets/alypay1.jpeg'
import Alypay2 from '../../Assets/alypay2.jpeg'
import Alypay3 from '../../Assets/alypay3.jpeg'
import Alypay4 from '../../Assets/alypay4.jpeg'
import Alypay5 from '../../Assets/alypay5.jpeg'
import telephone from '../../Assets/telephone.png'

const AlyPay = () => {
    const [activeItem, setActiveItem] = useState(1);

    // Realiza el cambio del item activo luego de 5 segundos
    useEffect(_ => {
        setTimeout(_ => {
            if(activeItem === 5) {
                setActiveItem(1)
            }else {
                setActiveItem(activeItem + 1)
            }
        }, 3000)
    }, [activeItem])

    return (
        <div className="alypay" id="alypay" data-animate="false">
            <div className="info">
                <img src={AlyImage} alt="AlyImage" />

                <p>
                    AlyPay es el sistema de pago de AlySystem donde los usuarios podrán hacer transferencias
                    y pagos con criptomonedas en los comercios afiliados a nuestra app.
                </p>
            </div>

            <div className="telephone-view">
                <img src={telephone} alt="" className="telephone"/>
                <img src={Alypay1} alt="" className={`${activeItem===1 ? 'active' : ''}`}/>
                <img src={Alypay2} alt="" className={`${activeItem===2 ? 'active' : ''}`}/>
                <img src={Alypay3} alt="" className={`${activeItem===3 ? 'active' : ''}`}/>
                <img src={Alypay4} alt="" className={`${activeItem===4 ? 'active' : ''}`}/>
                <img src={Alypay5} alt="" className={`${activeItem===5 ? 'active' : ''}`}/>
            </div>
        </div>
    )
}

export default AlyPay
import React from 'react'

// Import Assets and styles
import './AlyPay.scss'
import AlyImage from '../../Assets/alypay.png'

const AlyPay = () => {
    return (
        <div className="alypay">
            <img src={AlyImage} alt="AlyImage"/>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Id eius veniam suscipit recusandae provident debitis numquam adipisci, 
                harum odit quibusdam? Labore explicabo quasi corrupti dignissimos doloremque qui in tenetur molestiae?
            </p>
        </div>
    )
}

export default AlyPay
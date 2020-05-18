import React from 'react'

// Import Styles and asset
import './Exchange.scss'
import ExchangeImage from '../../Assets/exchange.png'

const Exchange = () => {
    return (
        <div className="content-exchange" id="exchange">
            <div className="info">
                <h2>AlyExhange</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus necessitatibus unde quo quisquam, debitis eaque 
                    rerum quasi sit ipsam similique nam earum. Distinctio eveniet 
                    incidunt deserunt iste suscipit dolores magni.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus necessitatibus unde quo quisquam, debitis eaque 
                    rerum quasi sit ipsam similique nam earum. Distinctio eveniet 
                    incidunt deserunt iste suscipit dolores magni.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus necessitatibus unde quo quisquam, debitis eaque 
                    rerum quasi sit ipsam similique nam earum. Distinctio eveniet 
                    incidunt deserunt iste suscipit dolores magni.
                </p>
            </div>

            <img src={ExchangeImage} alt="exchange" />
        </div>
    )
}

export default Exchange
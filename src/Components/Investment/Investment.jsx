import React, { Fragment, useState, useEffect } from 'react'

// Import Assets and styles
import './Investment.scss'
import loginApp from '../../Assets/login-app.png'
import basicInfo from '../../Assets/basic-info.png'
import customPlan from '../../Assets/custom-plan.png'
import confirmAccout from '../../Assets/confirm-account.png'
import dashboardApp from '../../Assets/dashboard-app.png'
import telephone from '../../Assets/telephone.png'
import customRef from '../../Assets/ref.png'

import BitcoinLogo from '../../Assets/bitcoin.svg'
import EthereumLogo from '../../Assets/ethereum.svg'

// Vista de los pasos para registrarse
const Register = () => {
    // Estado que almacena el valor del item activo
    const [activeItem, setActiveItem] = useState(1)

    // Realiza el cambio del item activo luego de 5 segundos
    useEffect(_ => {
        setTimeout(_ => {
            if (activeItem === 5) {
                setActiveItem(1)
            } else {
                setActiveItem(activeItem + 1)
            }
        }, 3000)
    }, [activeItem])

    return (
        <div className={`content-investment`} id="register" data-animate="false">
            <div className="info from-left">
                <h2>¿Cómo ser parte de <span>Speed</span> <span>Tradings?</span></h2>


                <div className={`row ${activeItem === 1 ? 'active' : ''}`}>
                    <span className="number">1</span>

                    <p>Regístrate a través de link de referido o desde tu app Speed tradings.</p>
                </div>

                <div className={`row ${activeItem === 2 ? 'active' : ''}`}>
                    <span className="number">2</span>

                    <p>Llena los datos del formulario de registro.</p>
                </div>

                <div className={`row ${activeItem === 3 ? 'active' : ''}`}>
                    <span className="number">3</span>

                    <p>Deposita tu plan de inversion en las wallets indicadas.</p>
                </div>

                <div className={`row ${activeItem === 4 ? 'active' : ''}`}>
                    <span className="number">4</span>

                    <p>Verifica tu correo electrónico.</p>
                </div>

                <div className={`row ${activeItem === 5 ? 'active' : ''}`}>
                    <span className="number">5</span>

                    <p>Recibe tu primer reporte de pago dentro de 24 horas.</p>
                </div>
            </div>

            <div className="telephone-view from-scale-0">
                <img src={telephone} alt="" className="telephone" />
                <img src={loginApp} alt="" className={`login-app ${activeItem === 1 ? 'active' : ''}`} />
                <img src={basicInfo} alt="" className={`basic-info ${activeItem === 2 ? 'active' : ''}`} />
                <img src={customPlan} alt="" className={`custom-plan ${activeItem === 3 ? 'active' : ''}`} />
                <img src={confirmAccout} alt="" className={`confirm-account ${activeItem === 4 ? 'active' : ''}`} />
                <img src={dashboardApp} alt="" className={`dashboard-app ${activeItem === 5 ? 'active' : ''}`} />
            </div>

            <a href="https://www.speedtradings-bank.com/#/register" target="_blank" rel="noopener noreferrer" className="go-register">
                Registrarme en Speed Tradings
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" stroke="#2d2d2d" strokeWidth="2px" /></svg>
            </a>
        </div>
    )
}


// Vista de los planes de inversión disponible
const Plans = () => {
    return (
        <div className="content-investment invertion-plans" id="plans">
            <div className="info">
                <h2>¡<span>Elige</span> tu plan de <span>ahorro!</span></h2>

                <div className="coin-container">
                    <div className="coin-item">
                        <img src={BitcoinLogo} alt="" />
                        <p>Bitcoin</p>
                    </div>

                    <div className="coin-item">
                        <img src={EthereumLogo} alt="" />
                        <p>Ethereum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Refs = ({ className = '' }) => {
    return (
        <div className={`content-investment reset sub-info ${className}`} >
            <div className="info">
                <div className="left">
                    <h3>Bono por referir</h3>

                    <p className="text-info">
                        Siendo parte de Speed Tradings podrás compartir la oportunidad con tus amigos y comisionar un porcentaje (entre el 1% y el 3%) de su inversión directa.
                    </p>

                    <img src={customRef} className="large" alt="custom-ref" />
                </div>

                <div className="right">
                    <h3>¿CÓMO GANAR EL BONO?</h3>


                    <div className="row">
                        <span className="number">1</span>

                        <p>Debes de estar activo con tu plan en Speed Tradings.</p>
                    </div>

                    <div className="row">
                        <span className="number">2</span>

                        <p>Tu referido debe registrase con tu link de registro generado en el dashboard.</p>
                    </div>

                    <div className="row">
                        <span className="number">3</span>

                        <p>
                            En el momento de que tu referido realice el pago de su plan te llegará un correo confirmando el pago de comisión del 3% según la inversión realizada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Payments = ({ className = '' }) => {
    return (
        <div className={`content-investment reset sub-info payments ${className}`}>
            <div className="info">
                <div className="left">
                    <h3>Pagos de Inversiones</h3>

                    <p>
                        Todos los pagos se realizarán automáticamente los días sabados a la wallet registrada. <b>Se debitará el 2% de FEE en el envío.</b>
                    </p>
                </div>

                <div className="right">
                    <h3>BENEFICIOS DE INVERTIR EN CRIPTOMONEDAS</h3>

                    <p>
                        Al tener tu capital de inversión en criptodivisas obtendrás multiples beneficios, aprovechando los incrementos
                        de valor por la oferta y demanda de la misma, hacer transacciones y/o transferencia con costos de comisiones mínimas,
                        sumándote a miles de usuarios que hoy en día son parte de esta nueva era del dinero digital.
                    </p>
                </div>
            </div>
        </div>
    )
}

// Vista de de los beneficios de usar speed tradings
const Benefits = () => {
    // Estado para almacenar ela sub sección a mostrar
    const [activeItem, setActiveItem] = useState(1)

    useEffect(_ => {
        setTimeout(_ => {
            setActiveItem(activeItem === 2 ? 1 : 2)
        }, 12000)
    }, [activeItem])

    return (
        <div className="content-investment benefits" id="benefits" data-animate="false">
            <div className="info">
                <h2>¿Qué <span>Beneficios</span> obtienes al usar <span>Speed</span> <span>Tradings?</span></h2>

                <Refs className={activeItem === 1 ? 'active' : ''} />

                <Payments className={activeItem === 2 ? 'active' : ''} />
            </div>
        </div>
    )
}

const Investment = () => {
    return (
        <Fragment>
            <Register />

            <Plans />

            <Benefits />
        </Fragment>
    )
}

export default Investment
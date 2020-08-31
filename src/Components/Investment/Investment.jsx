import React, { Fragment, useState, useEffect } from 'react'

// Import Assets and styles
import './Investment.scss'
import loginApp from '../../Assets/login-app.png'
import basicInfo from '../../Assets/basic-info.png'
import customPlan from '../../Assets/custom-plan.png'
import confirmAccout from '../../Assets/confirm-account.png'
import dashboardApp  from '../../Assets/dashboard-app.png'
import telephone from '../../Assets/telephone.png'
import customRef from '../../Assets/ref.png'
import splashImage from '../../Assets/splash.png'

const Plans = () => {
    // Estado que almacena el valor del item activo
    const [activeItem, setActiveItem] = useState(0)

    // Realiza el cambio del item activo luego de 5 segundos
    useEffect(_ => {
        setTimeout(_ => {
            if(activeItem === 5) {
                setActiveItem(1)
            }else {
                setActiveItem(activeItem + 1)
            }
        }, 5000)
    }, [activeItem])

    return (
        <div className="content-investment" id="register">
            <div className="info">
                <h2>¿Cómo ser parte de <span>Speed</span> <span>Tradings</span>?</h2>


                <div className={`row ${activeItem===1 ? 'active' : ''}`}>
                    <span className="number">1</span>

                    <p>Regístrate a través de tu link de referido o desde tu app Speed tradings.</p>
                </div>

                <div className={`row ${activeItem===2 ? 'active' : ''}`}>
                    <span className="number">2</span>

                    <p>Llena los datos del formulario de registro.</p>
                </div>

                <div className={`row ${activeItem===3 ? 'active' : ''}`}>
                    <span className="number">3</span>

                    <p>Deposita tu plan de inversion en las wallets indicadas.</p>
                </div>

                <div className={`row ${activeItem===4 ? 'active' : ''}`}>
                    <span className="number">4</span>

                    <p>Verifica tu correo electrónico.</p>
                </div>

                <div className={`row ${activeItem===5 ? 'active' : ''}`}>
                    <span className="number">5</span>

                    <p>Recibe tu primer reporte de pago dentro de 24 horas.</p>
                </div>
            </div>

            <div className="telephone-view">
                <img src={telephone} alt="" className="telephone"/>
                <img src={loginApp} alt="" className={`login-app ${activeItem===1 ? 'active' : ''}`}/>
                <img src={basicInfo} alt="" className={`basic-info ${activeItem===2 ? 'active' : ''}`}/>
                <img src={customPlan} alt="" className={`custom-plan ${activeItem===3 ? 'active' : ''}`}/>
                <img src={confirmAccout} alt="" className={`confirm-account ${activeItem===4 ? 'active' : ''}`}/>
                <img src={dashboardApp} alt="" className={`dashboard-app ${activeItem===5 ? 'active' : ''}`}/>
            </div>

            <a href="https://dashboard-speedtradings-bank.herokuapp.com/#/register" target="_blank" className="go-register">
                Registrarme en Speed Tradings
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" stroke="#2d2d2d" stroke-width="2px"/></svg>
            </a>
        </div>
    )
}

const Refs = () => {
    return (
        <div className="content-investment">
            <div className="info small">
                <h2>Bono por referir</h2>

                <p className="text-info">
                    SiSiendo parte de Speed Tradings podrás compartir la oportunidad con tus amigos y
                    comisionar un 5% de su inversión directa, este bono te será enviado al momento de
                    confirmar por parte de Speed Tradings el depósito de la inversión de tu referido directo.
                </p>

                <h3>¿CÓMO GANAR EL BONO?</h3>


                <div className="row">
                    <span className="number">1</span>

                    <p>
                        Tienes que estar activo con tu plan en Speed Tradings.
                    </p>
                </div>

                <div className="row">
                    <span className="number">2</span>

                    <p>
                        Tu referido debe registrase con tu link de registro generado en el dashboard.
                    </p>
                </div>

                <div className="row">
                    <span className="number">3</span>

                    <p>
                        Al confirmar Speed Tradings que tu referido realizó el pago de
                        su plan te llegará un correo con el Hash confirmando el pago de
                        comisión del 5% según el plan de inversión que tu referido eligió a la wallet que registraste.
                    </p>
                </div>
            </div>

            <img src={customRef} className="large" alt="custom-ref" />
        </div>
    )
}

const Payments = () => {
    return (
        <div className="payments">
            <h2>Pagos de Inversiones</h2>

            <p>
                Todos los pagos se realizaran automáticamente los días sabados a la wallet registrada. <b>se debitará el FEE del minero en el envío.</b>
            </p>

            <h2>BENEFICIOS DE INVERTIR EN CRIPTOMONEDAS</h2>

            <p>
                Al tener tu capital de inversión en criptodivisas obtendrás multiples beneficios, aprovechando los incrementos
                de valor por la oferta y demanda de la misma, hacer transacciones y/o transferencia con costos de comisiones mínimas,
                sumándote a miles de usuarios que hoy en día son parte de esta nueva era del dinero digital.
            </p>
        </div>
    )
}

const Investment = () => {
    return (
        <Fragment>
            <Plans />

            <img src={splashImage} className="splash-cover" alt="splash" />

            <Refs />

            <Payments />
        </Fragment>
    )
}

export default Investment
import React, { Fragment } from 'react'

// Import Assets and styles
import './Investment.scss'
import customPlan from '../../Assets/custom-plan.png'
import customRef from '../../Assets/ref.png'
import splashImage from '../../Assets/splash.png'

const Plans = () => {
    return (
        <div className="content-investment">
            <img src={customPlan} alt="custom-plan" />

            <div className="info">
                <h2>Como ser parte de Speed Tradings</h2>


                <div className="row">
                    <span className="number">1</span>

                    <p>Regístrate a través de link de referido o desde tu app Speed tradings.</p>
                </div>

                <div className="row">
                    <span className="number">2</span>

                    <p>Llena los datos del formulario de registro.</p>
                </div>

                <div className="row">
                    <span className="number">3</span>

                    <p>Deposita tu plan de inversion en las wallets indicada.</p>
                </div>

                <div className="row">
                    <span className="number">4</span>

                    <p>Verifica tu correo electrónico.</p>
                </div>

                <div className="row">
                    <span className="number">5</span>

                    <p>Recibe tu primer reporte de pago dentro de 24 horas.</p>
                </div>
            </div>
        </div>
    )
}

const Refs = () => {
    return (
        <div className="content-investment">
            <div className="info small">
                <h2>Bono por referir</h2>

                <p className="text-info">
                    Siendo parte de Speed Tradings podrás compartir la oportunidad con tus amigos y
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
                Todos los pagos se realizaran automáticamente los días sabados a la wallet registrada <b>NO se cobra comisión de retiro.</b>
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
import React, { Fragment, useEffect } from 'react'

// Import Components
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Investment from './Components/Investment/Investment'
import Exchange from './Components/Exchange/Exchange'
import AlyPay from './Components/AlyPay/AlyPay'
import Footer from './Components/Footer/Footer'
import SpeedTradings from './Components/SpeedTradings/SpeedTradings'
import Prices from './Components/Prices/Prices.component'

// Función que verifica el scroll del body y detecte cuales son las secciones que estnán detro del área visible para añadirles su respectiva animación
function checkIntersection(){
	let nodes = document.documentElement.querySelectorAll('[data-animate]')
    let observer;

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.setAttribute('data-animate', 'true')
                observer.unobserve(entry.target)
            }
        })
    }

    observer = new IntersectionObserver(observerCallback, {
        rootMargin: "0px",
        threshold: 0.4
    })

    nodes.forEach(node => observer.observe(node))
}

const App = () => {
	useEffect(_ => {
		checkIntersection()
	}, [])

	return (
		<Fragment>
			<Navbar />

			<Banner />

            <Prices />

            <SpeedTradings />

			<Investment />

			<Exchange />

			<AlyPay />
			
			<Footer />
		</Fragment>
	)
}

export default App

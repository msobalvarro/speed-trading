import React, { Fragment } from 'react'

// Import Components
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Investment from './Components/Investment/Investment'
import Exchange from './Components/Exchange/Exchange'
import AlyPay from './Components/AlyPay/AlyPay'
import Footer from './Components/Footer/Footer'

const App = () => {
	return (
		<Fragment>
			<Navbar />

			<Banner />

			<Investment />

			<Exchange />

			<AlyPay />
			
			<Footer />
		</Fragment>
	)
}

export default App

import React, { useEffect, useState } from 'react'

// import constants and functions
import axios from 'axios'

// import styles
import './Prices.styles.scss'

const urlALY =
  'https://lh3.googleusercontent.com/fife/ABSRlIp5haEiuLoCxC8yECzyh-nE9wU2HGFFYzMBZPeQBGcu1mfJPmMjjItxHpL_5ktLJwmU-qtqqgw8Q3xVzrz8P6x4S8KDLzOt-mfX7dWI7HXbc5PmUqQFVvudWbqj4oQHKc2idZV1ZmVNnqZZihG5ncIoDs-pVaH_vctwjCyIgf1tV_Dk6d4Ccz2a3bq90qzbUCVZ-DakGOw-G1Y5rmFLWeiXe7AcEQtNiiCANX4GrpHHZTzwdDxQyecuw5XS2ZfCHlwh2xvjW7riJc_LG4i11CaxzOUpF3vVxXX6YGAkUQZYa3rOP7wJwUzNtmoIjz_fyQ0L6fYHxiK4i8mcr3PX31s5vNpK6aCoeANlzm3t7c8qvreU2AnFtHbVm2lax7NxrrityUXjwZYzG9bpXFwu39Mh-aLiUoWj3tFUQKad3zaBj8yoQ7-_T9RI3wi6lTGFlnlzn0sTPaA0hNmZHncomgCvhuEKwLsGOwaM3ff_1oz-IlySpiJSOF5Z8Y6SLRGoLkkmflhYrbEIu2Tgq2PSw6TQ3GfYfr2QCPgcZ8FtD5kwCDvnicJKrfF4qyez43T7JYQgfY-sz_vqhimyjD3XbWLFfwTiw1CeXmyKtiWDwQCL16HQ7iuT3c3z24t3ZCgVPGF6kr5fONeVE_DECkA6RwGfCv4TCxvzfpUPnN4Nyab59ZNXRANlUj3kRmPdmFLnSZvBea31kdQsr7BcoC5R0UNUiyb98e8ATkE=w3840-h2242-ft'

/**Metodo que retorna precios e informacion de las monedas */
const getAllPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      // creamos una constante de arreglos donde retornaremos las monedas
      const dataFill = []

      const { data } = await axios.get(
        'https://ardent-medley-272823.appspot.com/collection/prices/minimal'
      )

      // verificamos si hay un error
      if (data.error) {
        throw String(data.message)
      }

      // maepamos todos los valores de las monedas
      Object.values(data).map(i =>
        dataFill.push({
          ...i,
          uri:
            i.symbol === 'ALY'
              ? urlALY
              : `https://s2.coinmarketcap.com/static/img/coins/128x128/${i.id}.png`,
        })
      )

      resolve(dataFill)
    } catch (error) {
      reject(error)
    }
  })

const Prices = () => {
  const [list, setList] = useState([])

  const configurateComponent = async _ => {
    const e = await getAllPrices()

    setList(e)
  }

  useEffect(() => {
    configurateComponent()
  }, [])

  if (list.length === 0) return null

  return (
    <ul className="prices-navbar">
      <div className="List-of-prices">
        {list.map((coin, i) => (
          <li key={i}>
            <img src={coin.uri} alt={coin.symbol} />
            <span>
              {coin.symbol} - ${coin.quote.USD.price.toFixed(2)}
            </span>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Prices

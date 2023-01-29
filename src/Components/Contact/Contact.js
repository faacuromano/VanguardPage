import React, {useState} from 'react'
import { Button } from 'reactstrap'
import ArtWorks from '../ArWorks/ArtWorks'


import './Contact.css'

import Form from './Form'

const Contact = () => {

    const [view, setView] = useState(false)


    const viewHandler = () => {
      view === true ? setView(false) : setView(true)
    }

    const alertaBoton = () => {
      alert("Compraste 1")
    }
    const alertaBoton3 = () => {
      alert("Compraste 3")
    }
    const alertaBoton5 = () => {
      alert("Compraste 5")
    }



  return (
    <>
        {view === false ? (
            <section id="contact"  className='default-container'>
            <h1 id="titleContact" className='titelMimimized'> GET ONE </h1>
            <button className='button' onClick={viewHandler}>Open</button >
            </section>
        ) : (
            <section id="contact"  className='default-container'>
            <h1 id="titleContact" className='titelMimimized'> GET ONE </h1>
              <div className='textContainer'>
                <h1 className='titleGetOne'>THE VANGUARD COLLECTION </h1>
                <h5 className='descriptionGetOne'>Welcome to the vanguard collection. If you want one of this artworks press in the card after to pick one of the buy options.
                                                  You will receive a random card from those in the card repertoire
                </h5>
                <h3 className='optionBuyLabel'>Select one option to buy:</h3>

                <div className='containerButtons'>
                  <button className='buttonsGetOne' onClick={alertaBoton}  > 1 for x,xx Tz  </button>
                  <button className='buttonsGetOne' onClick={alertaBoton3} > 3 for x,xx Tz  </button>
                  <button className='buttonsGetOne' onClick={alertaBoton5} > 5 for x,xx Tz  </button>
                </div>
                
            </div>

            {/* <div className='cardContainer'><ArtWorks/></div> */}


            <button className='button' onClick={viewHandler}>Close</button >

            </section>
        )}
    </>
      )
}

export default Contact
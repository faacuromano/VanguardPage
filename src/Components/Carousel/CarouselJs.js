import React, {useState} from 'react'
import ImagenFondo from "./pngegg.png";

import {
  Card,
  CardTitle,
} from 'reactstrap';

import "./CarrouselJs.css"


const viewHandler = () => {
  alert("REDIRECCION A DONDE SE COMPREN")
}


const CarouselJs = () => {
  return (
    <>
  <div className="FrontHome">
        <div className='FrontHomeDivition'>
            <h1 className='title'>{"THE VANGUARD TREASURE"}</h1>
            <h2 className='sub-title'>The Vanguard presents this collaborative collection created by 33 artists during 2022 - 2023.</h2>
            <h4 className='description'> When purchasing a piece from the collection, a random card will be minted from the hash of the transaction, creating a unique link between the card and its holder.</h4>
            <h4 className='description'> In the fx-hash collection you will be able to see card features, such as, creator, status, rarity, and more.</h4>
       
        </div>

        <div className='FrontHomeDivition'>
          <img className='imageFondo' src={ImagenFondo} alt="asd"></img>
          <img className='imageFondo1' src={ImagenFondo} alt="asd"></img>
          <img className='imageFondo2' src={ImagenFondo} alt="asd"></img>
          <img className='imageFondo3' src={ImagenFondo} alt="asd"></img>
          <img className='imageFondo4' src={ImagenFondo} alt="asd"></img>
        </div>
  </div>
      <div className='getTheYoursButtonContainer'>
          <button onClick={viewHandler} className='buttonGetTheYours'>GET THE YOURS</button>
      </div>
   </>
  )
}

export default CarouselJs
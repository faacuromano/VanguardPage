import React, {useState} from 'react'
import ArtWorks from './ArtWorks';
import {Button} from 'react-bootstrap'

import './ContainerArtWorks.css'

const ContainerArtWorks = ({ artworks, children }) => {

  const [view, setView] = useState(false)


  const viewHandler = () => {
    view === true ? setView(false) : setView(true)
  }
    const artWorksMapped = artworks
    .map((artwork) => (
      <ArtWorks
        key={artwork.id}
        title={artwork.title}
        img={artwork.img}
        subtitle={artwork.subtitle}
        id={artwork.id}
      />
    ));
  
  return (

    <>
        {view === false ? (
          <section id="artworks"  className='default-container'>
          <h1 id="titleArtworks" className='titelMimimized'> VANGUARD CARDS </h1>
          <button className='button' onClick={viewHandler}>Open</button >
          </section>
        ) : (
          <div className='background-true'>
            <h1 className='titelMimimized'> VANGUARD CARDS </h1>
          <div>
          <div className="artowrk-container">
          {artWorksMapped}
          </div >
          <div className='default-container'>
            <button className='button' onClick={viewHandler}>Close</button >
            </div>
          </div>
          </div>
        )}
    </>
      )
}

export default ContainerArtWorks
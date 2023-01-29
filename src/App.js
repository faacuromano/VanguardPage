import React, {useState} from 'react';
import uuid from 'react-uuid';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import vCard1 from "../src/Components/VanguarCards/vcard1.jpg"
import vCard2 from "../src/Components/VanguarCards/EIFCARD.jpg"
import vCard3 from "../src/Components/VanguarCards/eeee.JPG"
import vCard4 from "../src/Components/VanguarCards/momocho.jpg"
import vCard5 from "../src/Components/VanguarCards/V_Card_2.png"
import vCard6 from "../src/Components/VanguarCards/the_v_king.png"
import vCard7 from "../src/Components/VanguarCards/MorlacoYKAppa.png"
import vCard8 from "../src/Components/VanguarCards/the_v_card_wizard.png"
import vCard9 from "../src/Components/VanguarCards/V_Card_Final.png"
import vCard10 from "../src/Components/VanguarCards/XXFUXXVAMONOSPEST.png"


import NavbarJs from './Components/NavBar/NavBar';
import CarouselJs from './Components/Carousel/CarouselJs';
import ContainerArtWorks from './Components/ArWorks/ContainerArtWorks';
import Contact from './Components/Contact/Contact';

const DUMMY_ARTS = [
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard1
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard2
   },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard3
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard4
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard5
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard6
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard7
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard8
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard9

  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Name of the Card",
    img: vCard10
  },
];

const App = () => {
  const [artworks, setArtWorks] = useState(DUMMY_ARTS);
  return (
    <div className='root'>
      
      <NavbarJs/>
      <CarouselJs/>
      <ContainerArtWorks artworks={artworks}/>
      

    </div>
  );
}

export default App;

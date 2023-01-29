import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink
} from 'reactstrap';

import "./NavBar.css"

function Example(args) {

  return (
<>
    <Navbar className='navbar'  dark >

        <NavbarBrand href="/">
            <h1 className='Logo'> The Vanguard </h1>
        </NavbarBrand>

        <div className='links'>
          
        <NavbarBrand className='linkSingUp' >
            <NavLink href="#">
                Link Wallet 
            </NavLink>
        </NavbarBrand>
        
        <NavbarBrand className='linkOwned'>
            <NavLink  href="#artworks">
                Owned cards
            </NavLink>
        </NavbarBrand>
        
        <NavbarBrand className='link' >          
            <NavLink href="#contact">
                Get One
            </NavLink>
        </NavbarBrand>
        </div>

    </Navbar>
</>
  );
}

export default Example;
import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return ( 
    <Navbar bg='dark'expand='lg' >
      <Container>
        <NavbarBrand href='/myteam' className='text-white'>Challenge React Alkemy</NavbarBrand>

      </Container>
    </Navbar>
   );
}
 
export default Header;
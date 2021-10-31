import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return ( 
    <Navbar bg='dark'expand='lg' >
      <Container>
        <NavbarBrand href='/' className='text-white'>Challenge React Alkemy</NavbarBrand>
        <Link to='/myteam' className='btn btn-primary'>Mi equipo</Link>
        <Link to='/login' className='btn btn-primary'>Iniciar Sesión</Link>
      </Container>
    </Navbar>
   );
}
 
export default Header;
import React from 'react'
import { Container, Navbar, NavbarBrand, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return ( 
    <Navbar bg='dark'expand='lg' >
      <Container>
        <NavbarBrand href='/' className='text-white'>Challenge React Alkemy</NavbarBrand>
        <Stack direction='horizontal' gap={2} >
          <Link to='/myteam' className='btn btn-primary'>Mi equipo</Link>
          <Link to='/login' className='btn btn-primary'>Iniciar Sesión</Link>
        </Stack>
      </Container>
    </Navbar>
   );
}
 
export default Header;
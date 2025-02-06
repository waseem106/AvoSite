import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const NavbarTop = ({ isSticky }) => {
  return (
    <div>
      <Navbar expand="lg" style={{
        backgroundColor: isSticky ? 'white' : 'transparent', 
        padding: '0 14% 0 14%',
        transition: 'background-color 0.3s ease' ,
        
      }}>
        <Container>
          <Navbar.Brand style={{
            fontWeight: '600',
            color: isSticky ? 'black' : 'white', 
            fontSize: '23px'
          }} href="#home">a<span style={{ color: 'red' }}>v</span>o</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{
              fontSize: '13px',
              fontWeight: '600',
              padding: '10px',
              letterSpacing: '2px',
            }}>
              <Nav.Link href="#home" style={{ color: 'red' }}>HOME</Nav.Link>
              <Nav.Link href="#link" className='navlink'>ABOUT</Nav.Link>
              <Nav.Link href='#link' className='navlink'>WORK</Nav.Link>
              <Nav.Link href='#link' className='navlink'>BLOG</Nav.Link>
              <Nav.Link href='#link' className='navlink'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
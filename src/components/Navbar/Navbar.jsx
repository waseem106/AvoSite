import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarTop = ({ isSticky,aboutColor,workcolor,blogcar ,contactcolor,homecolor }) => {
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
              
              <Nav.Link as={Link} to="/AvoSite/" style={{ color: homecolor }}
              className= {homecolor ? '': 'navlink'}
              >HOME</Nav.Link>

              <Nav.Link as={Link} to="/AvoSite/about"  style={{ color: aboutColor }} 
              className= {aboutColor ? '': 'navlink'}>
                ABOUT</Nav.Link>

              <Nav.Link as={Link} to="/AvoSite/work" style={{ color: workcolor }} 
               className={workcolor? '':'navlink'}>
                WORK</Nav.Link>
                
              <Nav.Link as={Link} to="/AvoSite/blog" style={{ color: blogcar }} 
               className={blogcar?'':'navlink'}>BLOG</Nav.Link>
               
              <Nav.Link as={Link} to="/AvoSite/contact" style={{ color: contactcolor }} 
              className= {contactcolor?'': 'navlink '}>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
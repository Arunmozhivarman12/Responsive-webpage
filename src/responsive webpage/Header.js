import React from 'react';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <div className='pad' >
      <Navbar expand='lg' className='final' >
      <Container fluid>
        <Navbar.Brand href="#"><img className='app-logo'  src={logo} alt='img2'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav className="me-auto  neww"  >
            <Nav.Link href="#action1">Home</Nav.Link> 
            <NavDropdown title='Photos & Videos' id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" className='downcol'>CONTESTS</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='downcol'>
                SINGLE CONTESTS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Categories</Nav.Link>
           
            <Nav.Link href="#">
              Users
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            
            <Button className='signin'>Sign-in/up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default Header;




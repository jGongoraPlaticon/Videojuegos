import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <img src='https://i.pinimg.com/originals/44/7f/6f/447f6f783718c8fd8f3e81b145ea98e9.png' width='50px'></img>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='tx-nav'>Inicio</Nav.Link>
            <Nav.Link href="#action2" className='tx-nav'>Blog</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown" className='tx-nav'>
              <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Arcade</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Deportivo</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Estrategia</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Simulacro</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Aventura</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar videojuego..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='tx-nav'>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
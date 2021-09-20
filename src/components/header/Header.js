import React from 'react';
import logo from '../../logo.svg'
import { useState } from 'react'
import { NavLink  } from 'react-router-dom';
import {Nav,NavDropdown,Container,Navbar,Offcanvas,Button} from 'react-bootstrap';

function  Header() {
// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
    return (
    <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><NavLink to="/" className="nav-link"><img style={{height:"40px"}} src={logo} alt="" /></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <NavLink to="/" className="nav-link">Гдавная</NavLink>
                <NavLink to="/portfolio" className="nav-link">портфолио</NavLink>
                <NavLink to="/about" className="nav-link">обо мне</NavLink>
                <NavLink to="/contact" className="nav-link">контакные даные</NavLink>
                <NavLink to="/block" className="nav-link">блок</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>           
    );
}


export default Header

import React from 'react';
import avatar from '../../assets/profile/LinkedIn.jpg'
import './Navbar.css'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navb = () => {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img id='avatar-img' src={avatar} width="50" height="50" alt=""/>
                    Zackery Arsement
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="tabs" className="me-auto nav-items justify-content-end">
                        <LinkContainer to={`/`}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={`/portfolio`}>
                            <Nav.Link>Portfolio</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={`/contact`}>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={`/resume`}>
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb;
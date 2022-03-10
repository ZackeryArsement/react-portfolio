import React from 'react';
import avatar from '../../assets/profile/LinkedIn.jpg'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import classes from './Navbar.module.css'

const Navb = () => {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img className={classes.avatarImg} src={avatar} width="50" height="50" alt=""/>
                    Zackery Arsement
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-items justify-content-end">
                        <div className={`${classes.hexSmall}`} onMouseEnter={(e) => e.target.style.transform = 'rotate(360deg)'} onMouseOut={(e) => e.target.style.transform = 'rotate(-360deg)'}></div>
                        <LinkContainer to={`/`}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        <div className={`${classes.hexSmall}`} onMouseEnter={(e) => e.target.style.transform = 'rotate(360deg)'} onMouseOut={(e) => e.target.style.transform = 'rotate(-360deg)'}></div>
                        <LinkContainer to={`/portfolio`}>
                            <Nav.Link>Portfolio</Nav.Link>
                        </LinkContainer>

                        <div className={`${classes.hexSmall}`} onMouseEnter={(e) => e.target.style.transform = 'rotate(360deg)'} onMouseOut={(e) => e.target.style.transform = 'rotate(-360deg)'}></div>
                        <LinkContainer to={`/contact`}>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                        <div className={`${classes.hexSmall}`} onMouseEnter={(e) => e.target.style.transform = 'rotate(360deg)'} onMouseOut={(e) => e.target.style.transform = 'rotate(-360deg)'}></div>
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
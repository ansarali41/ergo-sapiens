import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <nav>
            {/* navbar or header component */}

            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="navbar-links">
                            <Nav.Link href="#home" className="nav-button">
                                About
                            </Nav.Link>
                            <Nav.Link href="#showcase" className="nav-button">
                                Showcase
                            </Nav.Link>
                            <Nav.Link href="#traits" className="nav-button">
                                Traits
                            </Nav.Link>
                            <Nav.Link href="#creators" className="nav-button">
                                Creators
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default MenuBar;

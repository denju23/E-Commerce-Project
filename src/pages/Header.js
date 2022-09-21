import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <React.Fragment>

            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-3 my-lg-0"
                            style={{ maxHeight: '100px', }}
                            navbarScroll
                        >
                            <Nav.Link href="Home">Home</Nav.Link>
                            <Nav.Link href="About">About Us</Nav.Link>
                            <Nav.Link href="Mail">Mail Us</Nav.Link>

                            <Nav.Link href="Signin">Sign In</Nav.Link>
                            <Nav.Link href="Signup">Sign Up</Nav.Link>
                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/Products">All</NavDropdown.Item>
                                <NavDropdown.Item href="Products">Men's Product </NavDropdown.Item>
                                <NavDropdown.Item href="Products">Women's Product</NavDropdown.Item>
                                <NavDropdown.Item href="Products">Jewellery</NavDropdown.Item>
                                <NavDropdown.Item href="Products">Electronics Item</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="ViewCart">View-Cart</NavDropdown.Item>
                                <NavDropdown.Item href="ViewOrder">
                                    View Orders
                                </NavDropdown.Item>
                                <NavDropdown.Item href="ChangePassword">
                                    Change-Password
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4.2">
                                    Log-Out
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </React.Fragment>
    )
}

export default Header;
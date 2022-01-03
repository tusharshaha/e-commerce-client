import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../../../Hooks/useCart'
import './Header.css'
const Header = () => {
    const { cartNum } = useCart();
    return (
        <Navbar bg='light' fixed='top' expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='logo-text'>E-Bazzar</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            <div className='cart-container'>
                                <Link to='/cart'>
                                    <FaShoppingCart className='cart-icon' />
                                </Link>
                                <span className='cart-total'>{cartNum}</span>
                            </div>
                        </Navbar.Text>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const cart = useSelector((state) => state.cart);

    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary" style={{ marginBottom: "30px" }}>
            <Container>
                <Link to="/" className='navbar-brand' style={{ fontSize: "22px" }}>Cart App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className='nav-link' style={{ fontSize: "20px" }}>Products</Link>
                        <Link to="cart" className='nav-link' style={{ fontSize: "20px" }}>Cart {cart.length}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header

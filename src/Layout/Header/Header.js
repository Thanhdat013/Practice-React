import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';

function Header() {
    return (
        <Navbar fixed="top" bg="light" variant="light">
            <Container className="header__container">
                <Navbar.Brand className="header__nav">React</Navbar.Brand>
                <Nav className="title">
                    <Nav.Link className="nav-title">User</Nav.Link>
                    <Nav.Link className="nav-title">Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;

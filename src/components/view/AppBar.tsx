import {Nav, Container, Navbar} from "react-bootstrap";

const AppBar = () => {
    const defaultPage = '/users';
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={defaultPage}>Bookly Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/bookings">Bookings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppBar;
import { Navbar, Container } from 'react-bootstrap';

const ReactNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top" className=" border-bottom border-1 border-light">
            <Container className="justify-content-center">
                <Navbar.Brand href="/" className="fs-1">
                    Countries
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default ReactNavbar;
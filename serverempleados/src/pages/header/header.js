import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        
        <Navbar bg="primary" variant="dark">
           
            <Container>
                <Navbar.Brand as={NavLink} to="/"><strong>Sistema para empleados</strong></Navbar.Brand>
                <Nav className="ml-auto">
                    
                    <Nav.Link as={NavLink} to="/" className="nav-link">Empleados</Nav.Link>
                    <Nav.Link as={NavLink} to="/empleados" className="nav-link">Cargar empleados</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
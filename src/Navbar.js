import Logo from './images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar()
{
    return (

      <Navbar bg = 'light' expand = 'lg' id = 'home'>
        <Container>
          <Navbar.Brand href = '#'>
              <a className = 'nav_header' href = '#home'>
                <img src = {Logo} className = 'nav_a_logo'/>
              </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"> Home </Nav.Link>
              <Nav.Link href="#about"> About </Nav.Link>
              <Nav.Link href="#rides"> Rides </Nav.Link>
              <Nav.Link href="#contact"> Contact Us </Nav.Link>
            </Nav>
            <div className = 'navbar-extra'>
              <i class="fa-solid fa-user"></i>
              <i class="fa-solid fa-phone"></i>
             </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      
    )
}
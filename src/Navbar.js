import Logo from './images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form  from 'react-bootstrap/Form';

export default function NavBar()
{
    return (

      <Navbar bg = 'light' expand = 'lg'>
        <Container>
          <Navbar.Brand href = '#'>
              <a className = 'nav_header' href = '#'>
                <img src = {Logo} className = 'nav_a_logo'/>
              </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"> Home </Nav.Link>
              <Nav.Link href="#"> About </Nav.Link>
              <Nav.Link href="#"> Rides </Nav.Link>
              <Nav.Link href="#"> Contact Us </Nav.Link>
            </Nav>
            <div className = 'navbar-extra'>
              <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-phone"></i>
             </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>

          // <nav class = 'navbar navbar-expand-lg nav'>
          //   <div class = 'container-fluid'>
              
          //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          //       <span class="navbar-toggler-icon"></span>
          //     </button>
          //     <div class = 'collapse navbar-collapse d-flex justify-content-center' id = 'navbarNav'>
          //       <ul class = 'navbar-nav'>
          //         <li class = 'nav-item me-3'>
          //           <a class = 'nav-link active' aria-current = 'page' href = '#'> Home </a>
          //         </li>
          //         <li class="nav-item me-3">
          //           <a class="nav-link" href="#"> About </a>
          //         </li>
          //         <li class="nav-item me-3">
          //           <a class="nav-link" href="#"> Rides</a>
          //         </li>
          //         <li class="nav-item me-3">
          //           <a class="nav-link" href = '#'> Contact </a>
          //         </li>
          //       </ul>
          //     </div>

          //     <div class = 'd-flex justify-content-around align-items-center navbar-extra'>
                     
          //     </div>
          //   </div>
          // </nav>
    )
}
export default function Navbar()
{
    return (
          <nav class = 'navbar navbar-expand-lg nav'>
            <div class = 'container-fluid'>
              <a class = 'navbar-brand nav_header'href = '#'>
                <img src = '../../images/logo1.png' className = 'nav_a_logo'/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class = 'collapse navbar-collapse d-flex justify-content-center' id = 'navbarNav'>
                <ul class = 'navbar-nav'>
                  <li class = 'nav-item me-3'>
                    <a class = 'nav-link active' aria-current = 'page' href = '#'> Home </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link" href="#"> About </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link" href="#"> Rides</a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link" href = '#'> Contact </a>
                  </li>
                </ul>
              </div>

              <div class = 'd-flex justify-content-around align-items-center navbar-extra'>
                     <i class="fa-solid fa-user"></i>
                     <i class="fa-solid fa-phone"></i>
              </div>
            </div>
          </nav>
    )
}
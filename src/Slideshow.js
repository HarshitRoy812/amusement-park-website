import ss1 from './images/ss1.png';
import ss2 from './images/ss2.png';
import ss3 from './images/ss3.png';

export default function Slideshow()
{
    return (
        <>
        <div id="carouselExampleIndicators" class="carousel slide ms-5" data-bs-ride="true">
        
        <div class="carousel-indicators">

            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        
        </div>

        <div class="carousel-inner">

            <div class="carousel-item active">
            <div class = 'carousel-extra d-flex flex-column pt-5 ps-3'>
                <h1 class = 'carousel-text'> Enjoy super-class rides at cheap-friendly ticket prices. </h1>
                <p class = 'carousel-text p'> * Rides starting at Rs.70 / kid <br /> * Rides starting at Rs.120 / adult </p>
               
                <button class = 'carousel-extra_btn btn btn-primary'> CHECK RIDES </button>
            </div>
            <div class = 'carousel-details'></div>
            <img src = {ss1} class="d-block w-100" height = "660" alt="..." />
            
            </div>
            <div class="carousel-item">
            <div class = 'carousel-extra d-flex flex-column pt-5 ps-3'>
                <h1 class = 'carousel-text ct-dark'> Get full benefits of amusement rides by joining Horizon+ Membership. </h1>
                <p class = 'carousel-text p p-dark'> Membership Plans <br /> <span> Monthly Rs.200/-  </span> <br /> <span> Annually  Rs.2000/- </span> </p>
                <button class = 'carousel-extra_btn btn btn-info'> JOIN MEMBERSHIP </button>
            </div>
            <div class = 'carousel-details cd-dark'></div>
            <img src = {ss2} class="d-block w-100"  height = "660"alt="..." />
            </div>
            <div class="carousel-item">
            <div class = 'carousel-extra d-flex flex-column pt-5 ps-3'>
                <h1 class = 'carousel-text ct-dark'> Get full benefits of amusement rides by joining Horizon+ Membership. </h1>
                <p class = 'carousel-text p p-dark'> Membership Plans <br /> <span> Monthly Rs.200/-  </span> <br /> <span> Annually  Rs.2000/- </span> </p>
                <button class = 'carousel-extra_btn btn btn-info'> JOIN MEMBERSHIP </button>
            </div>
            <img src = {ss3} class="d-block w-100" alt="..." />
            </div>
        
        </div>
    
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

        </div>

        <br />
        <br />
        < />
    )
}
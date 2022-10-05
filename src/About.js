import React from "react";
import Stack from 'react-bootstrap/Stack';

export default function About()
{
    return (

        <Stack className = 'h-stack' direction = 'horizontal' gap = {5}>
            <div className = 'about_header'>
                <h1 className = 'about_header_h1'> 
                <span> welcome to </span> PARK HORIZON 
                <br /> 
                <p className = 'about_extra'> A fun planet to explore your dreams. </p> 
                </h1>
            </div>
            <div className = 'about_details'>
                <p> An adventruous fun resort located in Mumbai, India and introduced in 2021.
                    We aim to make our park the world's largest theme resort in the world. 
                    We provide excellent facilities, world-class infrastructure and 5-star hospitality.
                    We have been involved with top-leaders in building this theme park. We have wide 
                    varities of rides and also have a small waterpark located in the city. As started recently, 
                    we are trying to introduce our parks in different cities across the globe specially 
                    America, Canada, Dubai and Australia. We warmly welcome people from anywhere around the 
                    world. Our cost-friendly ticket prices make our theme park loved to everyone.
                    So come and enjoy the moment you've never experienced in your life !

                </p>
            </div>
        </Stack>

    )
}
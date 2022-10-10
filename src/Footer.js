import React from 'react';
import Stack from 'react-bootstrap/Stack';

export default function Footer()
{
    return (

        <Stack className = 'footer' direction = 'horizontal'>

            <Stack className = 'links' direction = 'column' gap = {2}>
                <a> Terms & Conditions </a>
                <a> Privacy & Policy </a>
                <a> Our Team </a>
                <a> Help & Support </a>
            </Stack>

            <Stack className = 'links' direction = 'column' gap = {2}>
                <div>
                    <i class="fa-solid fa-location-dot map"></i>
                    N-25, Street NS-250, Andheri, Mumbai, IN
                </div>
                <div>
                    <i class="fa-solid fa-envelope"></i>
                    parkhorizon@gmail.com
                </div>
                <div>
                    <i class="fa-solid fa-phone"></i>
                    +91 9151232137
                </div>
                
            </Stack>

            <Stack className = 'social-links' direction = 'horizontal' gap = {2}>
                
                <a href = 'https://www.facebook.com' target = '_blank'> <i class="fa-brands fa-facebook"></i> </a>
                <a href = 'https://www.instagram.com' target = '_blank'> <i class="fa-brands fa-instagram"></i> </a>
                <a href = 'https://www.twitter.com' target = '_blank'> <i class="fa-brands fa-twitter"></i> </a>
                <a href = 'https://www.quora.com' target = '_blank'> <i class="fa-brands fa-quora"></i> </a>
                <a href = 'https://www.youtube.com' target = '_blank'> <i class="fa-brands fa-youtube"></i> </a>
                
            </Stack>

        </Stack>
        
    )
}
import React from 'react';
import Stack from 'react-bootstrap/Stack'
import mumbai from './images/location/mumbai.png';
import delhi from './images/location/delhi.png';
import kolkata from './images/location/kolkata.png';

export default function Location()
{
    return (
        <Stack className = 'main-location' direction = 'column' gap = {5}>
            <h1 className = 'location_header'> We are located in </h1>
            <Stack className = 'location' direction = 'horizontal' gap = {5}>

                <div className = 'location_div me-auto'>
                    <div className = 'layer layer_1'></div>
                    <img src = {mumbai} className = 'img_1'/>
                    <h1> Mumbai </h1>
                </div>

                <div className = 'location_div'>
                    <div className = 'layer layer_2'></div>
                    <img src = {delhi} className = 'img_2'/>
                    <h1> Delhi </h1>
                </div>

                <div className = 'location_div ms-auto'>
                    <div className = 'layer layer_3'></div>
                    <img src = {kolkata} className = 'img_3'/>
                    <h1> Kolkata </h1>
                </div>

            </Stack>
            <br />
        </Stack>
        
    )
}
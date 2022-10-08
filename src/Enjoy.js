import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Ride1 from './images/rides/ride1.png';
import Ride2 from './images/rides/ride2.png';
import Ride3 from './images/rides/ride3.png';

export default function Enjoy()
{
    return (
        <Stack className = 'card' direction = 'column'>

            <Stack className = 'card_header' direction = 'column' gap = {3}>
                <h1> Make yourself free </h1>
                <p> Go and explore all the potential you need to for enjoying yourself.
                    Try to make your day the best day in your life. Be amazing and be wild ! </p>
            </Stack>

            <Stack className = 'card_content' direction = 'horizontal'>

                <Card className = 'text-center'>
                    <Card.Img className = 'ride_image' src = {Ride1}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title'>
                            Cataract Merry Go Round
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card className = 'text-center'>
                    <Card.Img className = 'ride_image' src = {Ride2}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title'>
                            Jingle Rings
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card className = 'text-center'>
                    <Card.Img className = 'ride_image' src = {Ride3}></Card.Img>
                    <Card.Body>
                        <Card.Title className = 'ride_title'>
                            Dungeon's Spinner
                        </Card.Title>
                    </Card.Body>
                </Card>

            </Stack>
            <br />

        </Stack>
    )
}
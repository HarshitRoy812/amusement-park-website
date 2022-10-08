import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function Waterpark()
{
    return (
    
        <div className = 'waterpark'>
            <Stack className = 'waterpark_overlay' direction = 'column'>

                <h1> Special care & hospitality for children </h1>

                <p> We ensure proper care for children below age of 16 so that they do not get into any trouble.
                    Proper safety kits and lifevests are provided while taking access to water rides.
                    We keep on having routine checks and proper health checkup on children after every ride.
                </p>
                <br />

                <p> To read more about child safety, please click the button below. </p>

                <Button variant = 'primary'> VIEW MORE </Button>

            </Stack>
        </div>
    
    )
}
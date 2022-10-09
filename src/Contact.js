import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function Contact()
{
    return (
        <div className = 'contact'>

            <h1> Contact Us </h1>

            <Form className = 'form'>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control required type="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> E-Mail </Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Check type = 'checkbox' required label = 'Receive newsletter & latest updates from us '></Form.Check>

                <Button variant = 'primary' type = 'submit'> Send Mail </Button>
                
            </Form>

            <Stack className = 'welfare' direction = 'column' gap = {2}>
                <h1> HELP DONATE TO ANIMAL WELFARE </h1>
                <p> As a part of the animal welfare organization , we would like to request 
                    a little help from you. A donation of $2 will be grateful and heartly accepted.
                    Your little contribution can save the lives of animals. 
                </p>

                <Button variant = 'success'> DONATE $2 </Button>
            </Stack>

        </div>
    )
}
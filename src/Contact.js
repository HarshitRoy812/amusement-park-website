import React from "react";
import Form from 'react-bootstrap/Form';

export default function Contact()
{
    return (
        <div className = 'contact'>

            <h1> Contact Us </h1>

            <Form className = 'form'>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control  type="email" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> E-Mail </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
            </Form>

        </div>
    )
}
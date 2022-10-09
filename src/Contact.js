import React , {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';


export default function Contact()
{
    const [name,setName] = useState("");
    const [to,setTo] = useState("");
    const [msg,setMsg] = useState("");
    const [show,setShow] = useState(false);

    const sendEmail = (event) => {

        event.preventDefault();

        const emailInfo = {
            to_name : name,
            from_name : 'Park Horizon (parkhorizon@gmail.com)',
            message : msg
        }

        emailjs.send('service_dao0xr9','template_nzmepmk', emailInfo, 'ek779iw4sBCE1-pKG')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
        setShow(true);
    }


    return (
        <div className = 'contact'>

            <h1> Contact Us </h1>

            <Form className = 'form' onSubmit = {sendEmail}>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control required type="name" placeholder="Enter your name" onChange = {(event) => setName(event.target.value)}/>
                </Form.Group>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> E-Mail </Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className = 'mb-3' controlId = 'formBasicEmail'>
                    <Form.Label> Message (If any) </Form.Label>
                    <Form.Control as="textarea" onChange = {(event) => setMsg(event.target.value)} />
                </Form.Group>


                <Form.Check type = 'checkbox' label = 'Receive newsletter & latest updates from us '></Form.Check>

                <Button variant = 'primary' type = 'submit'> Send Mail </Button>

                {show && <Alert variant = 'success' className = 'msg'> Email sent successfully ! <i class="fa-solid fa-check"></i> </Alert>}
                
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
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import ss1 from './images/ss1.png';
import ss2 from './images/ss2.png';
import ss3 from './images/ss3.png';
import Star from './images/star.png';
import Brioche from './images/food/brioche.png';

export default function Slideshow()
{
    function shiftText(id)
    {
        var ele = document.getElementById(id);
        ele.classList.add('animate');
    }
    function removeShiftText(id)
    {
        var ele = document.getElementById(id);
        ele.classList.remove('animate');
    }

    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img className = 'd-block w-90' src = {ss1} />
                <Carousel.Caption>
                    <h2 id = 'ss1-text'> Enjoy super-class rides at the cheapest fares </h2>
                    <Button onClick = {handleShow} onMouseOver = {() => shiftText('ss1-text')} onMouseLeave = {() => removeShiftText('ss1-text')} variant="info">View All Rides </Button>{' '}


                    <Modal className = 'm' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title className = 'm-header'> All Rides </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className = 'm-body'>
                            
                            <Row>
                                <Col xs={6} md={4}>
                                    <p> Pinata Fiesta </p>
                                    <p> Turbo Car Racing </p>
                                    <p> Dungeon's Ferrywheel </p>
                                    <p> Slide n' GO </p>
                                    <p> Dino Adventure </p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <p> Happy Wheels </p>
                                    <p> Motor Drive </p>
                                    <p> Pendulum Booster </p>
                                    <p> Tycoon Mania </p>
                                    <p> Kart Smash </p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <p> Cap's Ship </p>
                                    <p> Godzilla's Cave </p>
                                    <p> Haunted House </p>
                                    <p> Tower Ride </p>
                                    <p> Grandpa's Rail </p>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className = 'd-block w-90' src = {ss2} />
                <Carousel.Caption className = 'ss2'>
                    <h2 id = 'ss2-text'> Join the Horizon+ Membership & Avail exclusive benefits </h2>
                    <Button onClick = {handleShow2} onMouseOver = {() => shiftText('ss2-text')} onMouseLeave = {() => removeShiftText('ss2-text')} variant="info"> View Membership Benefits </Button>{' '}

                    <Modal className = 'm' show={show2} onHide={handleClose2}>
                        <Modal.Header className = 'm-header' closeButton>
                        <Modal.Title> Horizon+ Membership Benefits </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           
                           <p>  <img src = {Star} className = 'star-icon'/> 30% off on Entry ticket prices </p>
                           <p>  <img src = {Star} className = 'star-icon'/> Free goodies on visiting the amusement park </p>
                           <p>  <img src = {Star} className = 'star-icon'/> Exclusive pass for inaugural event of new rides </p>
                           <p>  <img src = {Star} className = 'star-icon'/> Free Ice-cream on visiting restuarant </p>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose2}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                
                
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className = 'd-block w-90' src = {ss3} />
                <Carousel.Caption className = 'ss3'>
                    <h2 id = 'ss3-text'> Taste delicious food cooked by our top-rated chefs </h2>
                    <Button onClick = {handleShow3} onMouseOver = {() => shiftText('ss3-text')} onMouseLeave = {() => removeShiftText('ss3-text')}variant="warning"> Check Menu </Button>{' '}
                    
                    <Modal  scrollable = {true} className = 'm' show={show3} onHide={handleClose3}>
                        <Modal.Header className = 'm-header' closeButton>
                        <Modal.Title> Our Food Menu  </Modal.Title>
                        </Modal.Header>
                        <Modal.Body  className = 'ss3-body'>
                          
                          <Stack direction = 'column' gap = {3}>
                            <Stack direction = 'horizontal' gap = {3}>        
                                <p> Pan Roasted Brioche </p>
                                <p> $2.5 </p>
                            </Stack>
                            <Stack direction = 'horizontal' gap = {3}>
                                <p> Pan Roasted Brioche </p>
                                <p> $2.5 </p>
                            </Stack>
                            <Stack direction = 'horizontal' gap = {3}>
                                <p> Pan Roasted Brioche </p>
                                <p> $2.5 </p>
                            </Stack>
                            <Stack direction = 'horizontal' gap = {3}>
                                <p> Pan Roasted Brioche </p>
                                <p> $2.5 </p>
                            </Stack>
                          </Stack>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose3}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        <br />
        </>
    )
}

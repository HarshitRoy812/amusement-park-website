import React from 'react';
import Navbar from './NavBar';
import About from './About';
import Slideshow from './Slideshow';
import Location from './Location';
import Waterpark from './Waterpark';
import Card from './Enjoy';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import './sass/index.scss';

export default function App()
{
    return (
        <React.Fragment>
            <Navbar />
            <About />
            <Slideshow />
            <Location />
            <Waterpark/>
            <Card />
            <Contact />
        </React.Fragment>
    )
}
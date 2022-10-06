import React from 'react';
import Navbar from './NavBar';
import About from './About';
import Slideshow from './Slideshow';
import Location from './Location';

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
        </React.Fragment>
    )
}
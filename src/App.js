import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Slideshow from './Slideshow';

import './sass/index.scss';

export default function App()
{
    return (
        <React.Fragment>
            
            <About />
            <Slideshow />
        </React.Fragment>
    )
}
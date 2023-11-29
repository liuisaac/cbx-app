import React from 'react';
import './Transition-G.css';
// Import logos - <easier way to do this>
// const logos = Array.from({ length: 7 }, (_, i) => require(`./assets/logo${i + 1}.png`));
// thus we would get an array which we can iterate through
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
import logo6 from './assets/logo6.png';
import logo7 from './assets/logo7.png';

// ... import other logos
// ... text reader description are set as placeholders for now

const TransitionG = () => {
    return (
        <div className="logo-cloud">
            <img src={logo1} alt="Logo 1" className="logo" />
            <img src={logo2} alt="Logo 2" className="logo" />
            <img src={logo3} alt="Logo 3" className="logo" />
            <img src={logo4} alt="Logo 4" className="logo" />
            <img src={logo5} alt="Logo 5" className="logo" />
            <img src={logo6} alt="Logo 6" className="logo" />
            <img src={logo7} alt="Logo 7" className="logo" />
        </div>
    );
};

export default TransitionG;

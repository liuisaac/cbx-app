import React, { useState, useEffect } from 'react';
import './YourComponent.css'; // Import the CSS file

const YourComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust these values based on your layout and how you want the transition to happen
            const scrollPosition = window.scrollY;
            const newIndex = Math.min(Math.floor(scrollPosition / 100), 4);
            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="paragraph">
            <span className={activeIndex === 0 ? 'active' : ''}>We are partnered with XX firms, with $XX millions in AUM.</span>
            <span className={activeIndex === 1 ? 'active' : ''}>This is sentence 2.</span>
            <span className={activeIndex === 2 ? 'active' : ''}>This is sentence 3.</span>
            <span className={activeIndex === 3 ? 'active' : ''}>This is sentence 4.</span>
            <span className={activeIndex === 4 ? 'active' : ''}>This is sentence 5.</span>
        </div>
    );
};

export default YourComponent;
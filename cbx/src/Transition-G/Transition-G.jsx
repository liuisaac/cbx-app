// import React from 'react';
import './Transition-G.css'; // Make sure your CSS file is correctly linked

const TransitionG = () => {
    const colors = [
        'red', 'orangered', 'orange', 'gold', 
        'yellow', 'greenyellow', 'lime', 'aqua', 
        'dodgerblue', 'blue', 'indigo', 'darkviolet'
    ];

    // Function to duplicate the color array for seamless looping
    const duplicatedColors = [...colors, ...colors, ...colors, ...colors];

    return (
        <div className="flex-container">
            <div className="wrapper">
                {duplicatedColors.map((color, index) => (
                    <div 
                        key={`first-set-${index}`} 
                        className="colour-placeholder" 
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div className="wrapper">
                {duplicatedColors.map((color, index) => (
                    <div 
                        key={`second-set-${index}`} 
                        className="colour-placeholder" 
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TransitionG;

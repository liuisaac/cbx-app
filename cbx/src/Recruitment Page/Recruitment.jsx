import React, { useState } from 'react';
// import '../../dist/output.css'; // Import Tailwind CSS
import NavBar from "../Transition-B/Transition-B";
import { Link } from 'react-router-dom'
const Recruitment = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            const allowedTypes = ["application/pdf"];

            if (!allowedTypes.includes(fileType)) {
                alert("Please select a PDF file.");
                event.target.value = ''; // Reset the input
            } else {
                setFileName(file.name);
                // This snippet is incomplete! From here, the code is
                // suppose to interface with the backend. 
            }
        }
    };

    const handleScrollClick = () => {
        document.getElementById('applicationForm').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div className='h-screen w-screen flex flex-col'>
            <NavBar />
            <div id="recruitment" className="flex flex-col justify-center items-center font-bold text-4xl text-white h-full w-full">
                <div>
                    Applications for 2024 are now open
                    <br />
                    <span className="text-xl font-bold">
                        <Link to="/applicationForm" className="text-customBlue underline">
                            Analyst application
                        </Link>{' '}
                        open: August 2, 2024
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;
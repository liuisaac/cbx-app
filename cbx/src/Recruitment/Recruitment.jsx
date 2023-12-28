import React, { useState } from 'react';
import '../../dist/output.css'; // Import Tailwind CSS

const RecruitmentForm = () => {
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
        <div>
            <div id="text-vertical-offset" className="flex flex-col justify-center items-center font-bold text-4xl text-white">
                <div>
                    Applications for 2024 are now open
                    <br/>
                    <span className="text-xl font-bold">
                        <a href="#applicationForm" onClick={handleScrollClick} className="text-customBlue underline">
                            Analyst application
                        </a> open: August 2, 2024
                    </span>
                </div>
            </div>
            <section id="applicationForm" className="h-screen flex flex-col justify-center items-center text-white">
                {/* Note: The action functionality for form submission is not yet implemented. */}
                <form action="/submit-form" method="post">
                    <span className="font-bold text-4xl text-white">2024 Analyst Application</span>
                    <br/><br/>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="bg-transparent border-b border-white focus:border-white focus:outline-none text-white"/><br/><br/>
                
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="bg-transparent border-b border-white focus:border-white focus:outline-none text-white"/><br/><br/>
                
                    <label htmlFor="fileInput">Resume:</label>
                    <label id="fileLabel" className="text-customBlue underline py-2 px-4 cursor-pointer inline-block">
                        Upload
                        <input type="file" className="hidden" id="fileInput" onChange={handleFileChange} accept=".pdf"/>
                    </label>
                    <div id="fileNameDisplay" className="text-white mt-2">{fileName ? `Selected file: ${fileName}` : ''}</div><br/><br/>
                
                    <input type="submit" value="Submit" className="hover:font-bold"/>
                </form>
            </section>
        </div>
    );
};

export default RecruitmentForm;

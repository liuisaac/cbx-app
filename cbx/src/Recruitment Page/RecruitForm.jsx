import axios from 'axios';
import React, { useState } from 'react';
import NavBar from '../Transition-B/Transition-B';
export default function RecruitmentForm() {
    const [fileName, setFileName] = useState('');

    const [file, setFile] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // submit button is disabled while sending
    const [sending, setSending] = useState(false);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files) {
          setFile(files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (file && email && name && !sending) {
            // prepare form data for sending
            const formData = new FormData();
            formData.append("file", file);
            formData.append("ApplicantEmail", email);
            formData.append("Name", name)
      
            // start sending process
            setSending(true);
            try {
              await axios.post("http://localhost:5000/team/sendpdf", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              alert("PDF sent successfully, thank you! If your application is successful, we will be in contact via email.");
            } catch (error) {
              alert("Error sending PDF");
              console.error(error);
            } finally {
              setSending(false);
            }
          } else {
            alert("Please select a PDF and fill all relevent fields");
          }

    }
    const handleScrollClick = () => {
        document.getElementById('applicationForm').scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <div>
            <NavBar />
            <section id="applicationForm" className="h-screen flex flex-col justify-center items-center text-white">
                {/* Note: The action functionality for form submission is not yet implemented. */}
                <form action="/submit-form" method="post" onSubmit={handleSubmit}>
                    <span className="font-bold text-4xl text-white">2024 Analyst Application</span>
                    <br/><br/>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" className="bg-transparent border-b border-white focus:border-white focus:outline-none text-white"  onChange={(event) => setName(event.target.value)}/><br/><br/>
                
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" className="bg-transparent border-b border-white focus:border-white focus:outline-none text-white" onChange={(event) => setEmail(event.target.value)}/><br/><br/>
                
                    <label htmlFor="fileInput">Resume: </label>
                    <label id="fileLabel" className="text-customBlue underline py-2 px-4 cursor-pointer inline-block">
                        Upload
                        <input type="file" className="hidden" id="fileInput" onChange={handleFileChange} accept=".pdf"/>
                    </label>
                    <div id="fileNameDisplay" className="text-white mt-2">{file ? `Selected file: ${file.name}` : ''}</div><br/><br/>
                
                    <input type="submit" value="Submit" className="hover:font-bold bg-gray-500 text-white py-2 px-4 rounded" disabled={sending}/>
                </form>
            </section>
        </div>
    )
}
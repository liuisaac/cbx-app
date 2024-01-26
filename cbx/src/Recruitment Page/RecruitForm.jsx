import axios from 'axios';
import React, { useState } from 'react';
import NavBar from '../Transition-B/Transition-B';
export default function RecruitmentForm() {
  

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
              await axios.post("http://cbx-backend-e5909b4449e5.herokuapp.com/team/sendpdf", formData, {
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
   
    return (
        <div id="applicationForm" style={{backgroundColor:"white"}} >
            <NavBar />
            <section  className="h-screen flex flex-col justify-center items-center text-black">
                {/* Note: The action functionality for form submission is not yet implemented. */}
                <form action="/submit-form" method="post" onSubmit={handleSubmit}>
                    <span className="font-bold text-3xl text-black">Operations team 2024 Analyst application</span>
                    <br/><br/>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" className="bg-transparent border-b border-black focus:border-white focus:outline-none text-black"  onChange={(event) => setName(event.target.value)}/><br/><br/>
                
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" className="bg-transparent border-b border-black focus:border-white focus:outline-none text-black" onChange={(event) => setEmail(event.target.value)}/><br/><br/>
                
                    <label htmlFor="fileInput">Resume: </label>
                    <label id="fileLabel" className="text-customBlue underline py-2 px-4 cursor-pointer inline-block">
                        <span className='-ml-4'>Upload</span> 
                        <input type="file" className="hidden" id="fileInput" onChange={handleFileChange} accept=".pdf"/>
                    </label>
                    <div id="fileNameDisplay" className="text-black mt-2">{file ? `Selected file: ${file.name}` : ''}</div><br/><br/>
                
                    <input type="submit" value="Submit" className="hover:font-bold bg-gray-500 text-white py-2 px-4 rounded" disabled={sending}/>
                </form>
            </section>
        </div>
    )
}
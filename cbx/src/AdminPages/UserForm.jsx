import React, { useState, useEffect } from 'react';
import { uploadFile, deleteFile } from './awsHelper';
import PropTypes from 'prop-types';
import "./form.css"

const UserForm = ({user,onSubmit,onCancel,updateUserFlag}) => {

  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    isAlumni: false,
    title: '',
    pictureFile: ''
  });
  const [file, setFile] = useState(null); 
  const [oldfile, setOldfile] = useState(null); 

  useEffect(() => {
    if (user) {
      setFormData({
        id: user._id || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        isAlumni: Boolean(user.isAlumni) || '',
        title: user.title || '',
        pictureFile: user.pictureFile || ''
      });
      setFile(null); // Reset file state
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updateUserFlag || file !== null) uploadFile(file);
    if (updateUserFlag && oldfile !== null) {
      deleteFile(oldfile);
      setOldfile(null);
    }
    onSubmit(formData); // Pass formData to parent component
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const modifiedFileName = Date.now() + '_' + selectedFile.name;
      const modifiedFile = new File([selectedFile], modifiedFileName, { type: selectedFile.type });
      if (user.pictureFile) { // user has not uploaded a file yet
        setOldfile(((user.pictureFile).split('/')).pop());
        // converts url to filename only (everything before last '/' disregarded)
      }
      setFile(modifiedFile); // Set the file in state
      setFormData({ ...formData, pictureFile: modifiedFileName });
    }
  };

 

  UserForm.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.any,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    isAlumni: PropTypes.bool,
    title: PropTypes.string,
    pictureFile: PropTypes.string
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  updateUserFlag: PropTypes.bool.isRequired,
};

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* First Name Field */}
      <div>
        <label htmlFor="firstName" className='input-label'>First Name </label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
  
      {/* Last Name Field */}
      <div>
        <label htmlFor="lastName" className='input-label'>Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
  
      {/* Is Alumni Field - Checkbox */}
      <div>
        <label htmlFor="isAlumni" className='input-label'>Alumni (tick if alumni) </label>
        <input type="checkbox" id="isAlumni" name="isAlumni" checked={formData.isAlumni} onChange={handleChange} />
      </div>
  
      {/* Title Field */}
      <div>
        <label htmlFor="title" className='input-label'>Title </label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </div>
  
      {/* Picture Field  */}
      <div>
        <label htmlFor="pictureFile" className='input-label'>Picture File: </label>
        <label>{formData.pictureFile}</label>
      </div>

      <div>
        <label htmlFor="memberPictureUpload">Picture</label>
        <input type="file" id="memberPictureUpload" onChange={handleFileChange} />
      </div>
  
      {/* Submit and Cancel buttons */}
      <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
  
};

export default UserForm;
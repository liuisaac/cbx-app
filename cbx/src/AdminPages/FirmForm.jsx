import React, { useState, useEffect } from 'react';
import { uploadFile, deleteFile } from './awsHelper';
import PropTypes from 'prop-types';
import "./form.css"

const FirmForm = ({firm,onSubmit,onCancel,updateFirmFlag}) => {

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    categories: '',
    status: false, 
    tagline: '',
    description: '',
    AUMvalue: '',
    investmentYear: '',
    location: '',
    logofile: '',
  });
  const [file, setFile] = useState(null); 
  const [oldfile, setOldfile] = useState(null); 

  useEffect(() => {
    if (firm) {
      setFormData({
        id: firm._id || '',
        name: firm.name || '',
        categories: firm.categories || '',
        status: firm.status || '',
        tagline: firm.tagline || '',
        description: firm.description || '',
        AUMvalue: firm.AUMvalue || '',
        investmentYear: firm.investmentYear || '',
        location: firm.location || '',
        logofile: firm.logofile || '',
      });
      setFile(null); // Reset file state
    }
  }, [firm]);

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
    if (!updateFirmFlag || file !== null) uploadFile(file);
    if (updateFirmFlag && oldfile !== null) {
      deleteFile(oldfile);
      setOldfile(null);
    }
    onSubmit(formData); // Pass formData to parent component
    //
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const modifiedFileName = Date.now() + '_' + selectedFile.name;
      const modifiedFile = new File([selectedFile], modifiedFileName, { type: selectedFile.type });
      if (firm.logofile) { // user has not uploaded a file yet
        setOldfile(((firm.logofile).split('/')).pop());
        // converts url to filename only (everything before last '/' disregarded)
      }
      setFile(modifiedFile); // Set the file in state
      setFormData({ ...formData, logofile: modifiedFileName });
    }
  };

 

  FirmForm.propTypes = {
  firm: PropTypes.shape({
    _id: PropTypes.any,
    name: PropTypes.string,
    categories: PropTypes.string,
    status: PropTypes.bool,
    tagline: PropTypes.string,
    description: PropTypes.string,
    AUMvalue: PropTypes.string,
    investmentYear: PropTypes.string,
    location: PropTypes.string,
    logofile: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  updateFirmFlag: PropTypes.bool.isRequired,
};

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className='input-label'>Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
  
      {/* Categories Field */}
      <div>
        <label htmlFor="categories" className='input-label'>Categories (comma seperated, e.g. Tech,Finance,Healthcare)</label>
        <input type="text" id="categories" name="categories" value={formData.categories} onChange={handleChange} />
      </div>
  
      {/* Status Field - Checkbox */}
      <div>
        <label htmlFor="status" className='input-label'>Status (tick if realised)</label>
        <input type="checkbox" id="status" name="status" checked={formData.status} onChange={handleChange} />
      </div>
  
      {/* Tagline Field */}
      <div>
        <label htmlFor="tagline" className='input-label'>Tagline</label>
        <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} />
      </div>
  
      {/* Description Field */}
      <div>
        <label htmlFor="description" className='input-label'>Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>
  
      {/* AUMValue Field */}
      <div>
        <label htmlFor="AUMvalue" className='input-label'>AUMValue</label>
        <input type="text" id="value" name="AUMvalue" value={formData.AUMvalue} onChange={handleChange} />
      </div>
  
      {/* Investment Year Field */}
      <div>
        <label htmlFor="investmentYear" className='input-label'>Investment Year</label>
        <input type="text" id="investmentYear" name="investmentYear" value={formData.investmentYear} onChange={handleChange} />
      </div>
  
      {/* Location Field */}
      <div>
        <label htmlFor="location" className='input-label'>Location</label>
        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
      </div>
  
      {/* Picture Field  */}
      <div>
        <label htmlFor="logofile" className='input-label'>Logofile: </label>
        <label>{formData.logofile}</label>
      </div>

      <div>
        <label htmlFor="pictureUpload" className='input-label'>Picture</label>
        <input type="file" id="pictureUpload" onChange={handleFileChange} />
      </div>
  
      {/* Submit and Cancel buttons */}
      <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button"  onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
  
};

export default FirmForm;
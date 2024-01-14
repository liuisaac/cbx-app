import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import NavBar from "../Transition-B/Transition-B";
import './CompanyList.css'

function ShowCompanies() {
  
  const [firms, setFirms] = useState([]);
  let { name } = useParams();

  const [currentFirm, setCurrentFirm] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:5000/firms")
      .then(response => {
        setFirms(response.data);
        const foundFirm = response.data.find(firm => firm.name === name);
        console.log
  
        if (foundFirm) {
          setCurrentFirm(foundFirm);
        }
      })
      .catch(error => {
        console.error("Error fetching firm info:", error);
      });
  }, [name]);
  
 
  return (
    <div>
      <NavBar/>
    <div className="company-details-container">
      <div className="company-details">
        <div className="logo-containerss">
          <img src={currentFirm.logofile} alt="Company Logo" className="logo-image" />
        </div>
        <div className="details">
          <p className="intro">{currentFirm.name}</p>
          <p className="bio">{`"${currentFirm.tagline}"`}</p>
          <p className="bio">{currentFirm.description}</p>
          <p>Status: {currentFirm.status ? 'Realised' : 'Unrealised'}</p>
          <p>Sector: {currentFirm.categories ? currentFirm.categories.join(', ') : ''}</p>
          <p>Investment Year: {currentFirm.investmentYear}</p>
          <p>Region: {currentFirm.location}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShowCompanies;
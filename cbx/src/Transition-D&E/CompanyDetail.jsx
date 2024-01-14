import { Component } from 'react';
import { Link } from "react-router-dom";
import ShowCompany from './ShowCompany';
import { useNavigate } from 'react-router-dom'
import "./CompanyList.css"

function CompanyDetail(props) {
  const data = props.props
  const navigate = useNavigate()
  const handleLogoClick = (url) => {
    navigate(url); // Redirects the page to the specified URL
  };
  return (
    <div>
    
      <div  onClick={() => handleLogoClick(`/company/${data.name}`)}><img src={data.logofile} alt={data.key} className="logo-image" /></div> 
         
         
    </div>

  );
}


export default CompanyDetail;

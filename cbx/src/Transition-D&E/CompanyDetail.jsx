import { Component } from 'react';
import { Link } from "react-router-dom";
import ShowCompany from './ShowCompany';
import { useNavigate } from 'react-router-dom'
function CompanyDetail(props) {
  const sectorOptions = ['Sector A', 'Sector B', 'Sector C'];
  const statusOptions = ['Realized', 'Unrealized'];
  const data = props.props
  console.log("this is the data-->"+data.key);
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

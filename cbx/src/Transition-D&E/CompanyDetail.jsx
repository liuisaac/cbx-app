import { Component } from 'react';
import { Link } from "react-router-dom";
import ShowCompany from './ShowCompany';

function CompanyDetail(props) {
  const sectorOptions = ['Sector A', 'Sector B', 'Sector C'];
  const statusOptions = ['Realized', 'Unrealized'];
  const data = props.dat
  
  return (
    <div>
      <Link to={`/${data.name}`}>
        <div className="logo-container" key={data._id}>
         <a href={`/${data.name}`} ><img src={data.logo} className="logo-image" /></a> 
        </div>
      </Link>
    </div>

  );
}


export default CompanyDetail;

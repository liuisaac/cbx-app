import { Component } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CompanyList.css"
import CompanyDetail from './CompanyDetail';

// class Companies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: []
//     };
//   }

  

//   async componentDidMount() {
//     try {
//      const API_URL = "http://localhost:5038/";
      
//       const response = await fetch(API_URL + 'api/Companies/comp');
//       const data = await response.json();
//       this.setState({ notes: data });
//     } catch (error) {
//       console.error('Error fetching notes:', error);
//     }
//   }

//   render() {
//     const { notes } = this.state;


function Companies (){
  const [firms, setFirms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/firms")
      .then(response => {
        setFirms(response.data);
      })
      .catch(error => {
        console.error("Error fetching firm info:", error);
      });
  }, []);
  

  
    
    return (
      <div className="image-container">
        <h2>Companies</h2>
        <div className="image-grid">
          {firms.map((firm) => (
            <Link to={`/company/${firm._id}`} key={firm._id} className="company-link">
            <div className="logo-container" key={firm._id}>
             <img  src={firm.logofile} alt={firm.name} className="logo-image" />
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }


export default Companies;

import { Component } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CompanyList.css"
import { useHistory } from 'react-router-dom'
import CompanyDetail from './CompanyDetail';
import { useNavigate } from 'react-router-dom'
import NavBar from '../Transition-B/Transition-B';
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

function Companies() {
  const sectorOptions = ['Sector A', 'Sector B', 'Sector C'];
  const statusOptions = ['Realized', 'Unrealized'];
  const [firms, setFirms] = useState([]);
  const navigate = useNavigate()
  const data = [
    {
      "_id": { "$oid": "656380685c4dd67c0e307510" },
      "name": "Alphabet",
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Current",
      "investmentYear": { "$numberLong": "2022" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "656380063c4dd67c0e30750f" },
      "name": "Chevron",
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2021/05/Alphabet-logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Current",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "65637f6f3c4dd67c0e30750e" },
      "name": "Alphabet",
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Realized",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "65637f6f3c4dd67c0e30750e" },
      "name": "Alphabet",
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2021/05/Alphabet-logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Realized",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {"_id":{"$oid":"65637b193c4dd67c0e307506"},
    "name": "Chevron",
    "intro":"Building digital and poewer infrastructure",
    "logo":"https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
    "status":"Current",
    "investmentYear":{"$numberLong":"2022"},
    "region":"North America"},
    {"_id":{"$oid":"75637d493c4dd67c0e30750a"},
    "intro":"\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "logo":"https://1000logos.net/wp-content/uploads/2021/05/Alphabet-logo.png",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
    "status":"Current",
    "investmentYear":{"$numberLong":"2021"},
    "region":"North America"}
  ];


  useEffect(() => {
    axios.get("http://localhost:5000/firms")
      .then(response => {
        setFirms(response.data);
      })
      .catch(error => {
        console.error("Error fetching firm info:", error);
      });
  }, []);

  const handleLogoClick = (url) => {
    navigate(url); // Redirects the page to the specified URL
  };


  return (
    <div>
      <NavBar/>
    <div className="image-container">
      <h2>Companies</h2>

      <div class="menu">
        <ul>

          <li ><a href="#">Sector</a>
            <ul>
              <li><a href="#">Sector A</a></li>
              <li><a href="#">Sector B</a></li>
              <li><a href="#">Sector C</a></li>
            </ul>
          </li>

          <li><a href="#">Status</a>
            <ul>
              <li><a href="#">Realized</a></li>
              <li><a href="#">Unrealized</a></li>
            </ul>
          </li>

        </ul>
      </div>

      <div className="image-grid">
        {firms.map((firm) => (
          <div
            className="logo-container"
            key={firm.title}
            
          >
          
           <CompanyDetail
           props= {firm}
           />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


export default Companies;


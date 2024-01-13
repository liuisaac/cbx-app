import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import NavBar from "../Transition-B/Transition-B";
function ShowCompanies() {
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

  const [firms, setFirms] = useState([]);
  let { name } = useParams();

  const [currentFirm, setCurrentFirm] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:5000/firms")
      .then(response => {
        setFirms(response.data);
        const foundFirm = response.data.find(firm => firm.name === name);
  
        if (foundFirm) {
          setCurrentFirm(foundFirm);
        }
      })
      .catch(error => {
        console.error("Error fetching firm info:", error);
      });
  }, [name]);
  
console.log("this is current form-->"+currentFirm);
 
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
          <p className="bio">{currentFirm.description}</p>
          <p>Status: {currentFirm.categories}</p>
          <p>Sector: {currentFirm.status}</p>
          <p>Investment Year: {currentFirm.investmentYear}</p>
          <p>Region: {currentFirm.location}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShowCompanies;
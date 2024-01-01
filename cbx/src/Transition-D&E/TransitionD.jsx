import { Component } from 'react';

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

  const data = [
    {
      "_id": { "$oid": "656380685c4dd67c0e307510" },
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Current",
      "investmentYear": { "$numberLong": "2022" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "656380063c4dd67c0e30750f" },
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2021/05/Alphabet-logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Current",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "65637f6f3c4dd67c0e30750e" },
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Realized",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {
      "_id": { "$oid": "65637f6f3c4dd67c0e30750e" },
      "intro": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "logo": "https://1000logos.net/wp-content/uploads/2021/05/Alphabet-logo.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sapien mi. Morbi sed pulvinar justo. Fusce elementum mi ipsum, nec faucibus enim eleifend ut. Nunc at nunc eu enim fringilla vestibulum malesuada a nisi. Pellentesque sollicitudin ligula vel malesuada facilisis. Maecenas nec elit egestas nunc euismod consequat. Nulla vehicula urna massa, dignissim efficitur metus ultrices ac. Integer at mauris vitae magna sodales aliquam. Sed sodales ullamcorper nunc, quis bibendum lectus malesuada et. Donec sit amet ipsum nisi. Nunc sed lobortis metus. Vivamus vel nunc finibus, porttitor nisi porttitor, aliquet lorem. Nulla lacinia, tellus a rutrum rhoncus, nulla ipsum luctus orci, quis aliquam neque urna id nibh. Aliquam erat volutpat.",
      "status": "Realized",
      "investmentYear": { "$numberLong": "2020" },
      "region": "North America"
    },
    {"_id":{"$oid":"65637b193c4dd67c0e307506"},
    "intro":"Building digital and poewer infrastructure",
    "logo":"https://lh3.googleusercontent.com/bOQmKagH73bVdWqDptVPpMwAeafvFFIorHpHsEO_uahtD5gUx4JlthjUyAa3JsrR_Rbifg229uZtLGKeOJwHjwgQ-eUGLNUnC0vEUOygjnAoQCbJ_UjwEo2_SAaoy7iDBrRDvXOp",
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
  

  

    return (
      <div className="image-container">
        <h2>Companies</h2>
        <div className="image-grid">
          {data.map((dat) => (
            // <div className="logo-container" key={data._id}>
            //  <img  src={dat.logo} className="logo-image" />
            // </div>
            <CompanyDetail
            dat={dat}
            />
          ))}
        </div>
      </div>
    );
  }


export default Companies;

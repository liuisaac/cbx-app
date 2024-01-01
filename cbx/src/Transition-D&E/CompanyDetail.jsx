import { Component } from 'react';
import { Link } from "react-router-dom";
import ShowCompany from './ShowCompany';
// class CompanyDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       companyData: {
//         intro: '',
//         logo: '',
//         bio: '',
//         status: '',
//         sector: '',
//         investmentYear: '',
//         region: ''
//       }
//     };
//   }

//   API_URL = "http://localhost:5038/";

//   async componentDidMount() {
//     const { id } = this.props.match.params;
//     try {
//       const response = await fetch(`${this.API_URL}api/Companies/comp/${id}`);
//       const data = await response.json();
//       this.setState({ companyData: data });
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//     }
//   }

//   render() {
//     const {
//       intro,
//       logo,
//       bio,
//       status,
//       sector,
//       investmentYear,
//       region
//     } = this.state.companyData;
function CompanyDetail(props){
  
const data= props.dat
    return (
      <Link to={`/company/${data.key}`}>
      <div className="logo-container" key={data._id}>
        <img src={data.logo} className="logo-image" />
      </div>
    </Link>
    );
  }


export default CompanyDetail;
{/* <div className="company-details-container">
<div className="company-details">
  <div className="logo-container">
    <img src={logo} alt="Company Logo" className="logo-image" />
  </div>
  <div className="details">
    <p className="intro">{intro}</p>
    <p className="bio">{bio}</p>
    <p>Status: {status}</p>
    <p>Sector: {sector}</p>
    <p>Investment Year: {investmentYear}</p>
    <p>Region: {region}</p>
  </div>
</div>
</div> */}
import React, { Component } from 'react';
import './CompanyDetail.css';

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyData: {
        intro: '',
        logo: '',
        bio: '',
        status: '',
        sector: '',
        investmentYear: '',
        region: ''
      }
    };
  }

  API_URL = "http://localhost:5038/";

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const response = await fetch(`${this.API_URL}api/Companies/comp/${id}`);
      const data = await response.json();
      this.setState({ companyData: data });
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  }

  render() {
    const {
      intro,
      logo,
      bio,
      status,
      sector,
      investmentYear,
      region
    } = this.state.companyData;

    return (
      <div className="company-details-container">
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
      </div>
    );
  }
}

export default CompanyDetail;

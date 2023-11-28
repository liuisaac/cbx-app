import React, { Component } from 'react';



class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  

  async componentDidMount() {
    try {
     const API_URL = "http://localhost:5038/";
      
      const response = await fetch(API_URL + 'api/Companies/comp');
      const data = await response.json();
      this.setState({ notes: data });
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="image-container">
        <h2>Companies</h2>
        <div className="image-grid">
          {notes.map((note, index) => (
            <div className="logo-container" key={index}>
             <img  src={note.logo} alt={note.name} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Companies;

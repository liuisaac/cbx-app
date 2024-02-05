import { useState, useEffect } from "react";
import axios from "axios";
import "./CompanyList.css"
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

const UNSPECIFIED = -1;

function Companies() {
  const statusOptions = ['Realized', 'Unrealized'];
  const [firms, setFirms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(UNSPECIFIED);
  const [currentStatus, setCurrentStatus] = useState(UNSPECIFIED);
  const navigate = useNavigate()


  // get list of selected firms, if no categories selected get all firms
  useEffect(() => {
    axios
      .get(`http://cbx-backend-e5909b4449e5.herokuapp.com/firms/selected/${currentCategory}/${currentStatus}`)
      .then((response) => {
        setFirms(response.data);
        console.log("RESULT", response.data);
      })
      .catch((error) => {
        console.error("Error fetching firm info:", error);
      });
  }, [currentCategory, currentStatus]);


   // get list of all categories
   useEffect(() => {
    axios.get("http://cbx-backend-e5909b4449e5.herokuapp.com/firms/categories")
      .then(response => {
        setCategories(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleLogoClick = (url) => {
    navigate(url); // Redirects the page to the specified URL
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory((prevCategory) =>
      prevCategory === category ? UNSPECIFIED : category
    );
  };

  const handleStatusClick = (status) => {
    setCurrentStatus((prevStatus) =>
      prevStatus === status ? UNSPECIFIED : status
    );
  };


  return (
    <div>
      <NavBar/>
    <div className="image-container">
      <h2>Companies</h2>

      <div className="menu">
        <ul>

          <li ><a href="#">Sector</a>
            <ul>
                {categories.map(category => (
                  <li key={category} onClick={() => handleCategoryClick(category)} className={currentCategory === category ? 'selected' : ''}>{category}</li>)
                )}

            </ul>
          </li>

          <li><a href="#">Status</a>
            <ul>
              <li onClick={() => handleStatusClick(true)} className={currentStatus === true ? 'selected' : ''}>Realized</li>
              <li onClick={() => handleStatusClick(false)} className={currentStatus === false ? 'selected' : ''}>Unrealized</li>
            </ul>
          </li>

        </ul>
      </div>

      <div className="image-grid">
        {firms.length > 0 ? (
          firms.map((firm) => (
            <div className="logo-container" key={firm.title} >
            <CompanyDetail props= {firm} />
            </div>
        ))) : <h1>No firms matching these categories</h1>}
      </div>
    </div>
    </div>
  );
}


export default Companies;


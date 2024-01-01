import logo from "./logo.svg";
import "./App.css";
import TransitionA from "./Transition-A/Transition-A.jsx";
import TransitionB from "./Transition-B/Transition-B.jsx"
import TransitionC from "./Transition-C/Transition-C.jsx";
import RecruitmentForm from "./Recruitment Page/Recruitment.jsx";
import TransitionH from "./Transition-H/TransitionH.jsx"
import TransitionD from "./Transition-D&E/TransitionD.jsx"
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import Metrics from "./Metrics Page/Metrics.jsx";
import Bricks from "./Bricks Page/Bricks.jsx";
import { Route, Routes,Router } from "react-router-dom";

import Companies from './Transition-D&E/TransitionD.jsx';
import NavBar from "./Navbar.jsx";
import './App.css';
import PartnerFirms from './pages/Partner-Firms.js' //formerly transition F
import Alumni from'./pages/Alumni.js'; //formerly transition C
import styles from "./style.js";
import ShowCompanies from "./Transition-D&E/ShowCompany.jsx";



function App() {
  const pathname = window.location.pathname;

  // Function to render components based on pathname
  const renderComponent = () => {
    switch (pathname) {
      case '/':
        return (
          <div className="bg-black">
              <TransitionA/>
              <Metrics/>
              <Bricks/>
              <RecruitmentForm/>
              <TransitionH/>
           
          </div>
        );
      case '/about':
        return <TransitionB />;
      // ... add cases for other routes
      case '/team':
        return <TransitionC />;
      // ... add cases for other routes
      case '/portfolio':
        return <TransitionD />;
      // ... add cases for other routes
      case '/partners':
        return <TransitionF />&& <TransitionG/>;
      // ... add cases for other routes
      case '/alumni':
        return <TransitionC/>;
      // ... add cases for other routes
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      {/* Navbar or other common components */}
      <TransitionB/>
      {/* For example, NavBar component */}
      {/* <NavBar /> */}

      {/* Render components based on pathname */}
      {renderComponent()}
    </div>
  );
}

export default App;
// import logo from "./logo.svg";
// import "./App.css";
// import TransitionA from "./Transition-A/Transition-A.jsx";
// import TransitionB from "./Transition-B/Transition-B.jsx"
// import TransitionC from "./Transition-C/Transition-C.jsx";
// import RecruitmentForm from "./Recruitment Page/Recruitment.jsx";
// import TransitionH from "./Transition-H/TransitionH.jsx"
// import TransitionD from "./Transition-D&E/TransitionD.jsx"
// import TransitionF from "./Transition-F/Transition-F.tsx";
// import TransitionG from "./Transition-G/Transition-G.jsx";
// import Metrics from "./Metrics Page/Metrics.jsx";
// import Bricks from "./Bricks Page/Bricks.jsx";
// import { Route, Routes,Router } from "react-router-dom";

// import Companies from './Transition-D&E/TransitionD.jsx';
// import NavBar from "./Navbar.jsx";
// import './App.css';
// import PartnerFirms from './pages/Partner-Firms.js' //formerly transition F
// import Alumni from'./pages/Alumni.js'; //formerly transition C
// import styles from "./style.js";
// import ShowCompanies from "./Transition-D&E/ShowCompany.jsx";



// function App() {
//   const transitionFText = [
//     "We are partnered with XX firms with XX millions in AUM filler text. ",
//     "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
//     "Third line of the paragraphasdfasfa dsfasfaafsdf",
//   ];
  
//   return (
//    <Router>
//   <Route
  
//   exact
//   path="/company/:id"
// >
//   <ShowCompanies />
// </Route>
    
//     <div className="bg-black">
      
//       //lion
//       <TransitionA/>
//       <Metrics/>
//       <Bricks/>
//       <RecruitmentForm/>
//       // Navbar 
//       <TransitionB/>
     
//       // Our team
//       <TransitionC/>
//       //company logos
//       <TransitionD/>
//       <TransitionF/>
//       <TransitionG/>
    
     

//       <div className="bg-black w-full h-screen overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
//         <div className={`${styles.boxWidth}`}>
//          <NavBar/>
//         </div>
//       </div>

//       <div className={`bg-black w-screen h-screen text-white`}> 
//         <div className={`w-full h-full flex flex-row justify-center items-center`}>
//         <TransitionH/>
//         </div>
//         <TransitionD/>
//       </div>
//     </div>
    
    
//     </div>
//     </Router>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import TransitionA from "./Transition-A/Transition-A.jsx";
import TransitionB from "./Transition-B/Transition-B.jsx"
import TransitionC from "./Transition-C/Transition-C.jsx";

import TransitionH from "./Transition-H/TransitionH.jsx"
import TransitionD from "./Transition-D&E/TransitionD.jsx"
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import { Route, Routes } from "react-router-dom";
import Companies from './Transition-D&E/TransitionD.jsx';
import NavBar from "./Navbar.jsx";
import './App.css';
import PartnerFirms from './pages/Partner-Firms.js' //formerly transition F
import Alumni from'./pages/Alumni.js'; //formerly transition C
import styles from "./style.js";




function App() {
  const transitionFText = [
    "We are partnered with XX firms with XX millions in AUM filler text. ",
    "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
    "Third line of the paragraphasdfasfa dsfasfaafsdf",
  ];
  return (
    <div className="bg-black">
      <h3>{transitionFText}</h3>
      <TransitionA/>
      <TransitionB/>
      <TransitionC/>
      <TransitionD/>
      <TransitionF/>
      <TransitionG/>
    
     

      <div className="bg-black w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
         <NavBar/>
        </div>
      </div>

      <div className={`bg-black w-screen h-screen text-white`}> 
        <div className={`w-full h-full flex flex-row justify-center items-center`}>
        <TransitionH/>
        </div>
        <TransitionD/>
      </div>
    </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;

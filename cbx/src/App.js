import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Transition-B/Transition-B.jsx";
import TransitionC from "./Transition-C/Transition-C.jsx";
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import { Route, Routes } from "react-router-dom";
import Companies from './Transition-D&E/Companies.jsx';

import './App.css';
import PartnerFirms from './pages/Partner-Firms' //formerly transition F
import Alumni from'./pages/Alumni'; //formerly transition C

import TransitionA from'./Transition-A/Transition-A.jsx';


function App() {
  const transitionFText = [
    "We are partnered with XX firms with XX millions in AUM filler text. ",
    "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
    "Third line of the paragraphasdfasfa dsfasfaafsdf",
  ];
  return (
    <div class="bg-black">
      <TransitionC/>
      <div className="App">
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
      </div>
    </div>
  );
}

export default App;

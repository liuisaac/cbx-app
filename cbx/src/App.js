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


function App() {
  const transitionFText = [
    "We are partnered with XX firms with XX millions in AUM filler text. ",
    "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
    "Third line of the paragraphasdfasfa dsfasfaafsdf",
  ];
  return (
    <div>
      <TransitionB />
      <TransitionC />
      <TransitionF text={transitionFText} />
      <TransitionG />
    </div>
  );
}

export default App;

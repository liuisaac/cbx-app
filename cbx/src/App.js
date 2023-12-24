import logo from "./logo.svg";
import "./App.css";
import TransitionB from "./Transition-B/Transition-B.jsx";
import TransitionC from "./Transition-C/Transition-C.jsx";
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import Companies from './Transition-D&E/Companies.jsx';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PartnerFirms from './pages/Partner-Firms' //formerly transition F
import Alumni from'./pages/Alumni'; //formerly transition C


function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/Partner-Firms" element={<PartnerFirms />} />
          <Route path="/Alumni" element={<Alumni />} />
        </Routes>
      </BrowserRouter>

      <TransitionC/>
      <TransitionG/>
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

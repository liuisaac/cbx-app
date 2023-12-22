import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PartnerFirms from './pages/Partner-Firms' //formerly transition F
import Alumni from'./pages/Alumni'; //formerly transition C
import TransitionG from'./Transition-G/Transition-G.jsx';
import PartnerFirms from './pages/Partner-Firms.js';

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

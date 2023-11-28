import logo from './logo.svg';
import './App.css';
import TransitionC from'./Transition-C/Transition-C.jsx';
import Companies from './Transition-D&E/Companies.jsx';

function App() {
  return (
    <div>
      <TransitionC/>
      <Companies/>
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

import logo from './logo.svg';
import './App.css';
import TransitionA from'./Transition-A/Transition-A.jsx';
import TransitionC from'./Transition-C/Transition-C.jsx';

function App() {
  return (
    <div class="bg-black">
      <TransitionA/>
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

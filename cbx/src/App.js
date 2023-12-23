import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Transition-B/Transition-B.jsx";
import TransitionC from "./Transition-C/Transition-C.jsx";
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const transitionFText = [
    "We are partnered with XX firms with XX millions in AUM filler text. ",
    "Second line of the paragraph asdfa sdfadsfad sfad sfasdfa dsfadsfadsfa daf a. ",
    "Third line of the paragraphasdfasfa dsfasfaafsdf",
  ];

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/team" element={<TransitionC />} />
          <Route
            path="/partner-firms"
            element={<TransitionF text={transitionFText} />}
          />
        </Routes>
      </div>
      <TransitionG />
    </>
  );
}

export default App;

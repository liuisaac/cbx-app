import logo from "./logo.svg";
import "./App.css";
import TransitionA from "./Transition-A/Transition-A.jsx";

import TransitionC from "./Transition-C/Transition-C.jsx";
import TransitionCAlumni from "./Transition-C/Transition-C Alumni.jsx";
import LoginPage from "./AdminPages/loginpage.jsx";
import TransitionH from "./Transition-H/TransitionH.jsx";
import TransitionD from "./Transition-D&E/TransitionD.jsx";
import TransitionF from "./Transition-F/Transition-F.tsx";
import TransitionG from "./Transition-G/Transition-G.jsx";
import Metrics from "./Metrics Page/Metrics.jsx";
import Bricks from "./Bricks Page/Bricks.jsx";
import { Route, Routes, Router } from "react-router-dom";
import RecruitmentForm from "./Recruitment Page/RecruitForm.jsx";
import Companies from "./Transition-D&E/TransitionD.jsx";
import NavBar from "./Transition-B/Transition-B.jsx";
import "./App.css";
import PartnerFirms from "./pages/Partner-Firms.js"; //formerly transition F
import Alumni from "./pages/Alumni.js"; //formerly transition C
import styles from "./style.js";
import ShowCompanies from "./Transition-D&E/ShowCompany.jsx";
import Recruitment from "./Recruitment Page/Recruitment.jsx";
import LoginForm from "./Login/LoginForm.jsx";
import About from "./About.jsx";
import ComingSoon from "./ComingSoon.jsx";
import adminDashboard from "./AdminPages/adminDashboard.jsx";
import Footer from "./static/Footer.jsx";
function App() {
    return (
        <div>
            <div className="bg-black">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Render components for the '/' route */}
                                <TransitionA />
                                <Metrics />
                                <Bricks />
                                <Recruitment />
                                <RecruitmentForm />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <>{/* Render components for the '/' route */}</>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <>
                                <About />
                            </>
                        }
                    />

                    <Route
                        path="/team"
                        element={
                            <>
                                {/* <TransitionC /> */}
                                <ComingSoon />
                            </>
                        }
                    />

                    <Route
                        path="/portfolio"
                        element={
                            <>
                                <ComingSoon />
                                {/* <TransitionD /> */}
                            </>
                        }
                    />

                    <Route
                        path="/partners"
                        element={
                            <>
                                <ComingSoon />

                                {/* <TransitionF />
          <TransitionG />  */}
                            </>
                        }
                    />

                    <Route
                        path="/partner-firms"
                        element={
                            <>
                                <ComingSoon />

                                {/* <TransitionF />
          <TransitionG /> */}
                            </>
                        }
                    />

                    <Route
                        path="/alumni"
                        element={
                            <>
                                <ComingSoon />
                                {/* <TransitionCAlumni/> */}
                            </>
                        }
                    />

                    <Route
                        path="/recruiting"
                        element={
                            <>
                                <RecruitmentForm />
                            </>
                        }
                    />
                    <Route
                        path="/applicationForm"
                        element={
                            <>
                                <RecruitmentForm />
                            </>
                        }
                    />

                    <Route
                        path="/lp-login"
                        element={
                            <>
                                <LoginPage />
                            </>
                        }
                    />

                    <Route
                        path="/company/:name"
                        element={
                            <>
                                <ShowCompanies />
                            </>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;

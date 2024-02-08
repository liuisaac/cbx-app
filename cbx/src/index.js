import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Transition_h from "./Transition-H/TransitionH";

// import facebook from "./assets/facebook.png"
// import instagram from "./assets/instagram.png"
// import twitter from "./assets/twitter.png"
// import email from "./assets/email.png"
// import linkedin from "./assets/linkedin.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "investment-team",
    title: "Investment Team",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "partner-firms",
    title: "Partner Firms",
  },
  {
    id: "insights",
    title: "Insights",
  },
  {
    id: "recruiting",
    title: "Recruiting",
  },
  {
    id: "investor-portal",
    title: "Investor-Portal",
  },
];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { Transition_h };

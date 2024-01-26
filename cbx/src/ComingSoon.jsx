import React from "react";
import NavBar from "./Transition-B/Transition-B";
const ComingSoon = () => {
  return (
    <div>
       <NavBar/>
       <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", 
       font:"font-poppins",
        fontSize: "4rem", 
        color:"white"
      }}
    >
     
   {/* change font */}
      Coming Spring 2024
    </div>
    </div>
  
  );
};

export default ComingSoon;

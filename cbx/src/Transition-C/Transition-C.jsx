import placeholder from "./256px-Man_Silhouette2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import NavBar from "../Transition-B/Transition-B";
function TransitionC() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("https://cbx-backend-e5909b4449e5.herokuapp.com/team/members")
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error("Error fetching team members:", error);
      });
  }, []); // runs once when component mounts

  return (
    <div>
      <NavBar/>
    {/* have categories for different positions show a all ones */}
    {/* copy the target tab where you click on something and it shows a select people */}
    <div className="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto text-white">
      <div className="text-left w-full">
        <h1 className="ml-4 text-4xl font-bold fadeInSlow">Our Team</h1>
      </div>
      <br />
      <div className="flex flex-wrap m-4">
        {members.map((member) => (
          <div key={member.key} className="p-4 lg:w-1.5/4 md:w-1/3">
            <div className="h-full flex flex-col items-center text-center">
              <a href={member.href} className="opacity-0 fadeInSlow">
                <img
                  className="shadow rounded-sm object-cover h-80  aspect-[45/45] align-middle border-none"
                  src={member.pictureFile}
                  alt={`${member.firstName} ${member.lastName}`}
                  onError={(e) => {
                    e.target.src = placeholder; // display placeholder image if pictureFile not found
                  }}
                />
              </a>
              <div className="p-4 text-center font-normal fadeIn">
                <p>
                  <b className="text-xl">{`${member.firstName} ${member.lastName}`}</b>
                  <br />
                  <span className="text-white">{member.title}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TransitionC;

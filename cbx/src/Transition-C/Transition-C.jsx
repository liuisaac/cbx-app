import placeholder from "./256px-Man_Silhouette2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
function TransitionC() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/team/members")
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error("Error fetching team members:", error);
      });
  }, []); // runs once when component mounts

  const loadImage = (path) => {
    try {
      const image = require(`./../assets/teamPhotos/${path}`);
      return image;
    } catch (error) {
      console.error(`Error loading image: ${path}`, error);
      return placeholder; // or return another default image or handle the error accordingly
    }
  };

  return (
    <div className="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto text-white">
      <div className="text-left w-full">
        <h1 className="ml-4 text-4xl font-bold fadeInSlow">Our Team</h1>
      </div>
      <br />
      <div className="flex flex-wrap m-4">
        {members.map((member) => (
          <div key={member.key} className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a href={member.href} className="opacity-0 fadeInSlow">
                <img
                  className="shadow rounded-sm object-cover h-48 aspect-[35/45] align-middle border-none"
                  src={loadImage(member.pictureFile)}
                  alt={`${member.firstName} ${member.lastName}`}
                />
              </a>
              <div className="p-4 text-center font-normal fadeIn">
                <p>
                  <b className="text-xl">{`${member.firstName} ${member.lastName}`}</b>
                  <br />
                  <span>{member.title}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransitionC;
import placeholder from "./256px-Man_Silhouette2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function TransitionCAlumni() {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/team/alumni")
      .then(response => {
        setAlumni(response.data);
      })
      .catch(error => {
        console.error("Error fetching team alumni:", error);
      });
  }, []); // runs once when component mounts


  return (
    <div className="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto text-white">
      <Helmet>
        <title>CBX Partners | Alumni</title>
      </Helmet>
      <div className="text-left w-full">
        <h1 className="ml-4 text-4xl font-bold fadeInSlow">Alumni</h1>
      </div>
      <br />
      <div className="flex flex-wrap m-4">
        {alumni.map((alumnus) => (
          <div key={alumnus.key} className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a href={alumnus.href} className="opacity-0 fadeInSlow">
                <img
                  className="shadow rounded-sm object-cover h-48 aspect-[35/45] align-middle border-none"
                  src={alumnus.pictureFile}
                  alt={`${alumnus.firstName} ${alumnus.lastName}`}
                  onError={(e) => {
                    e.target.src = placeholder;
                  }}
                />
              </a>
              <div className="p-4 text-center font-normal fadeIn">
                <p>
                  <b className="text-xl">{`${alumnus.firstName} ${alumnus.lastName}`}</b>
                  <br />
                  <span>{alumnus.title}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransitionCAlumni;
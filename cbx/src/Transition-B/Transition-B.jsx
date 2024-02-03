import React, { useState, useEffect } from "react";
import logo from "../static/assets/final-logos.png";
import { navLinks } from "../static/constants/navconsts";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransition(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="invisible h-32"></div>
      <nav className="z-50 bg-black w-full flex py-3 justify-between items-center navbar fixed top-0">
        <div className="overflow-hidden mt-8 flex justify-start font-poppins my-auto">
          <Link
            className={`transition duration-[2000ms] ${
              transition
                ? `opacity-100 -translate-y-3`
                : `opacity-0 translate-y-8`
            } transition ease-in-out`}
            to="/"
          >
            {" "}
            <img
              className="object-contain h-16 ml-5"
              src={logo}
              alt="CBX Partners Logo"
            />{" "}
          </Link>
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins px-4 transition ${
                transition
                  ? `opacity-100 translate-y-0`
                  : `opacity-0 translate-y-7`
              } transition duration-1000 ease-in-out`}
              style={{ transitionDelay: `${String(166 * index)}ms` }}
            >
              <Link className={`text-white`} to={`/${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

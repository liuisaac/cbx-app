import React, { useState, useEffect } from "react";
import logo from "../static/assets/final-logos.png";
import { navLinks } from "../static/constants/navconsts";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";



const NavBar = () => {
    const [transition, setTransition] = useState(false);
    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });

    return (
        <>
            <motion.nav 
            variants = {{
              visible: { y:0 },
              hidden: { y:"-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.7, ease: "easeInOut"}}
            className="z-50 bg-black w-full flex justify-between items-center navbar fixed top-0">
                <div className="overflow-hidden pt-4 flex justify-start font-poppins my-auto h-20">
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
                            className="object-contain h-full mt-1 ml-10"
                            src={logo}
                            alt="CBX Partners Logo"
                        />{" "}
                    </Link>
                </div>
                <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-5">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins px-4 transition ${
                                transition
                                    ? `opacity-100 translate-y-0`
                                    : `opacity-0 translate-y-7`
                            } transition duration-1000 ease-in-out`}
                            style={{
                                transitionDelay: `${String(166 * index)}ms`,
                            }}
                        >
                            <Link className={`text-white`} to={`/${nav.id}`}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </>
    );
};

export default NavBar;

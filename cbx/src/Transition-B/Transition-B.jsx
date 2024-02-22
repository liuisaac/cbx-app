import React, { useState, useEffect } from "react";
import logo from "../static/assets/final-logos.png";
import hamburger from "../static/assets/hamburger.svg";
import { navLinks } from "../static/constants/navconsts";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const NavBar = () => {
    const [transition, setTransition] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menu, setMenu] = useState(false);
    const [textWhite, setTextWhite] = useState(false);

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
            <nav className="z-50 bg-black w-full flex justify-between items-center navbar fixed top-0 sm:hidden h-20">
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
                            className="object-contain h-full sm:ml-8 ml-2"
                            src={logo}
                            alt="CBX Partners Logo"
                        />{" "}
                    </Link>
                </div>
                <div>
                    <img
                        className="object-contain mr-5 h-8 hover:cursor-pointer opacity-80"
                        src={hamburger}
                        alt="CBX Partners Logo"
                        onClick={() => setMenu(!menu)}
                    />
                </div>
                {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-5">
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
                </ul> */}
            </nav>
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-[#161616] z-40 ${
                    menu ? "bg-opacity-70 backdrop-blur-sm pointer pointer-events-auto" : "bg-opacity-0 pointer-events-none"
                } transition duration-700 ease-in-out`}
            >
                <ul className="list-none flex flex-col justify-end items-left ml-5 mt-32 gap-10">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins px-4 transition ${
                                menu ? `opacity-100 translate-y-0` : `opacity-0`
                            } transition duration-700 ease-in-out`}
                            style={{
                                transitionDelay: menu
                                    ? `${String(166 * index)}ms`
                                    : `100ms`,
                            }}
                        >
                            <Link
                                className={`text-4xl tracking-widest font-thin ${
                                    textWhite ? "text-white" : "text-[#bababa]"
                                }`}
                                onTouchStart={()=>setMenu(false)}
                                to={`/${nav.id}`}
                            >
                                {nav.title.toLocaleUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="z-50 bg-black w-full sm:flex justify-between items-center navbar fixed top-0 hidden"
            >
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
                            className="object-contain h-full sm:ml-8 ml-2"
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

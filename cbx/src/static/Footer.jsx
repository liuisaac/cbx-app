// Footer.jsx
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import email from "./assets/email.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";

import React, { useState } from "react";
import { footerLinks } from "./constants/footconsts";
import logo from "../static/assets/final-logos.png";
import { motion } from "framer-motion";

const CookieNotice = ({ onAccept, acceptedState }) => {
    const handleAccept = () => {
        onAccept();
    };

    return (
        <motion.div
            initial="hidden"
            whileInView={ acceptedState ? "visible" : "hidden" }
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1*acceptedState }}
            variants={{
                visible: { y:0 },
                hidden: { y:"100%" },
            }}
            className="fixed bottom-0 left-0 right-0 bg-black text-white p-2 text-center z-50"
        >
            <p>
                This website uses cookies. By continuing to use this site, you
                accept our use of cookies.
            </p>
            <button
                onClick={handleAccept}
                className="hover:underline hover:bg-white bg-black hover:text-black border-[1px] px-4 mb-2 transition-all duration-300 ease-linear border-white"
            >
                Accept
            </button>
        </motion.div>
    );
};
const currentYear = new Date().getFullYear();
const Footer = () => {
    const [showCookieNotice, setShowCookieNotice] = useState(true);

    const handleCookieAccept = () => {
        setShowCookieNotice(false);
    };

    return (
        <footer className="mt-8 p-8 static bottom-0 bg-black text-white w-screen overflow-hidden">
            <CookieNotice onAccept={handleCookieAccept} acceptedState={showCookieNotice}/>
            <div className="grid grid-cols-9 gap-4">
                <div className="col-start-1 col-3 w-64">
                    <img
                        className="object-contain h-16 content-start"
                        src={logo}
                        alt="CBX Partners Logo"
                    />
                </div>
                <div className="col-start-7 mx-3">
                    <ul className="flex items-center">
                        <li>
                            <a
                                href="www.gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={email}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={facebook}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcbxpartners"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={twitter}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/cbxpartners/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={instagram}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/cbxpartners/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={linkedin}
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="grid grid-cols-9 mt-5 text-left">
                <div className="col-start-1 col-span-2">
                    <p>
                        © {currentYear} CBX Capital Partners LP. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

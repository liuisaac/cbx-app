import "./Transition-A.css";
// import logo from './CBX_white.png';
import logoCbx from "./CBX_white_cbx.png";
import logoPartners from "./CBX_white_partners.png";
import background from "./Home_Page_Background.jpg";
import NavBar from "../Transition-B/Transition-B";
import { motion } from "framer-motion";


function TransitionA() {
    return (
        <div>
            <NavBar />
            <div
                id="home"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="bg-black"
            >
                <div className="md:w-5/6 lg:w-4/6 px-5 pb-24 m-auto w-screen h-screen flex flex-col justify-center items-center object-scale-down">
                    <div className="flex flex-row justify-center items-center">
                        <motion.div
                            className="m-auto flex justify-center w-[26%]"
                            alt="logo"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.7, delay: 0.7, ease: "easeInOut" }}
                            variants={{
                                visible: { x:"5%", y:"-50%", opacity:100 },
                                hidden: { x:"25%", y:"-100%", opacity:0 },
                            }}
                        >
                            <img
                                src={logoCbx}
                                className="inline p-0 h-full"
                                alt="logo"
                            />
                        </motion.div>
                        <div
                            className="w-[10%] flex justify-center display-inline"
                            alt="logo"
                        >
                            <div className="transitionASlash"></div>
                        </div>
                        <motion.div
                            className="m-auto flex justify-center w-[64%] "
                            alt="logo"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.7, delay: 0.7, ease: "easeInOut" }}
                            variants={{
                                visible: { x:0, y:"50%", opacity:100 },
                                hidden: { x:"-10%", y:"100%", opacity:0 },
                            }}
                        >
                            <img
                                src={logoPartners}
                                className="inline p-0 h-full"
                                alt="logo"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransitionA;

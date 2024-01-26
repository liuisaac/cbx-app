import { useState } from "react";
import background from "../assets/LP_Login.jpeg"
import React, { useEffect, useMemo, useRef } from "react";

import NavBar from "../Transition-B/Transition-B";
export default function LoginForm(){
    const [transition, setTransition] = useState(false);
    return (
        <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh", // Ensure the div covers the full height of the viewport
      }}
    >
            <NavBar/>
         <div className="absolute w-full h-full flex flex-col justify-center items-center z-50"
        
            >
                <div
                    className={`w-[50vh] color-white bg-black rounded-[2rem] bg-opacity-40 backdrop-blur border-2 border-gray-700 flex flex-col items-center transition duration-1000 ease-in-out ${
                        transition
                            ? `opacity-100 translate-y-0`
                            : `opacity-100 translate-y-7`
                    }`}
                >
                    <div className=" w-full h-12 bg-gray-300 rounded-t-[2rem] bg-opacity-20  backdrop-blur flex flex-row justify-center items-center font-light text-2xl tracking-widest">
                        SIGN IN
                    </div>
                    <span className="text-white text-md font-light tracking-widest mt-10">
                        WELCOME TO THE CBX INVESTOR PORTAL
                    </span>
                    <span className="w-4/5 mt-[8vh] tracking-wider">
                        USERNAME:
                    </span>
                    <input
                        type="text"
                        className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mt-4"
                        placeholder=" Username:"
                    />
                    <span className="w-4/5 mt-[8vh] tracking-wider">
                        PASSWORD:
                    </span>
                    <input
                        type="password"
                        className="h-8 w-4/5 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mt-4"
                        placeholder="Password:"
                    />

                    <div className="w-4/5 flex flex-row items-center mt-[4vh]">
                        <input
                            type="checkbox"
                            className="h-4 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mr-4"
                        />
                        <div className="w-full text-gray-300">
                            <span className="font-light tracking-wider -mr-10">
                                Remember Me
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className=" bg-gray-700 w-4/5 h-[8vh] text-2xl font-light tracking-widest mt-[4vh] rounded-sm hover:bg-gray-600 transition duration-500 ease-in-out"
                    >
                        LOGIN
                    </button>

                    <span className="font-semibold tracking-wide mb-8 mt-4 italic text-black">
                        Forgot{" "}
                        <span className="underline cursor-pointer">
                            Username / Password?
                        </span>
                    </span>
                </div>
            </div>
            </div>
            
    )
}
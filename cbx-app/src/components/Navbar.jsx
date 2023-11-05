import { useState, useEffect } from 'react'

import { navLinks } from '../constants'
import "../index.css"

const Navbar = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setTransition(true); 
    }, 10);
    return () => clearTimeout(timeout); 
  }, []);  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) =>
            (<li key={nav.id} className={`font-poppins px-4 transition ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-7`} transition duration-1000 ease-in-out`} style={{transitionDelay : `${String(300*index)}ms`}}>
                <a href={`#${nav.id}`}>
                    {nav.title} 
                </a>
            </li>))}
        </ul>
    </nav>
  )
}


export default Navbar
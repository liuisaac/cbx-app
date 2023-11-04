import { useState } from 'react'

import { navLinks } from '../constants'
import "../index.css"

const Navbar = () => {
  const [FUCK, setFUCK] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) =>
            (<li key={nav.id} className={`font-poppins px-4 ${FUCK ? "opacity-100 translate-y-0	" : "opacity-10 translate-y-5"} transition duration-500 ease-in-out`} onClick={()=>setFUCK(true)}>
                <a href={`#${nav.id}`}>
                    {nav.title}
                </a>
            </li>))}
        </ul>
    </nav>
  )
}

export default Navbar
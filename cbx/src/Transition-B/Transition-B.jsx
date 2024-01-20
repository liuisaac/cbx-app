import { useState, useEffect } from 'react'
import { logo } from './assets';
import { navLinks } from './constants/navconsts';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransition(true);
    }, 10);
    return () => clearTimeout(timeout);
  }, []);

  

  
  return (
    <nav className="w-full flex my-3 justify-between items-center navbar">
      <Link to="/">
      <div className={`mt-1 flex justify-start font-poppins px-4 transition duration-[2000ms] ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`} transition ease-in-out`}>
        <img className='object-contain h-16 ml-5' src={logo} alt='CBX Partners Logo' />
      </div>
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>
        (<li key={nav.id} className={`font-poppins px-4 transition ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-7`} transition duration-1000 ease-in-out`} style={{ transitionDelay: `${String(166 * index)}ms` }}>
          <a href={`/${nav.title}`} className={`text-white`} to={`/${nav.id}`}>
            {nav.title}
          </a>
        </li>))}
      </ul>
    </nav>
  )
}


export default NavBar

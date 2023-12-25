import { useState, useEffect } from 'react'
import { logo } from './assets';
import { navLinks } from './constants/navconsts';

const TransitionB = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setTransition(true); 
    }, 10);
    return () => clearTimeout(timeout); 
  }, []);  
  return (
    <nav className="w-full flex my-3 justify-between items-center navbar fixed z-1000">
      <div className={`mt-8 flex justify-start font-neue_montreal_thin px-4 transition duration-[2000ms] ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`} transition ease-in-out`}>
            <a href="https://www.cbxcapitalpartners.com/"> <img className='object-contain h-16 ml-5' src={ logo } alt='CBX Partners Logo'/> </a>
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) =>
            (<li key={nav.id} className={`font-poppins px-4 transition ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-7`} transition duration-1000 ease-in-out`} style={{transitionDelay : `${String(166*index)}ms`}}>
                <a className={`text-white`} href={`#${nav.id}`}>
                    {nav.title} 
                </a>
            </li>))}
        </ul>
    </nav>
  )
}


export default TransitionB

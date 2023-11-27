import React from 'react'
import { logo } from '../assets'
import { useState, useEffect } from 'react'

const Logo = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setTransition(true); 
    }, 10);
    return () => clearTimeout(timeout); 
  }, []);
  return (
    <div>
        <div className={`font-poppins px-4 transition duration-[2000ms] ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-7`} transition ease-in-out w-full h-full`}>
            <img src={ logo } />
        </div>
    </div>
  )
}

export default Logo
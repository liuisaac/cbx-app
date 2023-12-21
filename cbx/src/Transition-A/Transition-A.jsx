import React from 'react'
import { logo } from './assets'
import { useState, useEffect } from 'react'

const TransitionA = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setTransition(true); 
    }, 10);
    return () => clearTimeout(timeout); 
  }, []);
  return (
    <div>
        <div className={`mt-8 flex justify-center font-poppins px-4 transition duration-[2000ms] ${transition ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`} transition ease-in-out w-full h-full`}>
            <img src={ logo } alt='CBX Partners Logo'/>
        </div>
    </div>
  )
}

export default TransitionA
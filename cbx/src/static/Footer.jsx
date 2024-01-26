// Footer.jsx

import React, { useState } from 'react';
import { footerLinks } from './constants/footconsts';
import { footer } from './assets';

const CookieNotice = ({ onAccept }) => {
  const handleAccept = () => {
    onAccept();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 text-center">
      <p>This website uses cookies. By continuing to use this site, you accept our use of cookies.</p>
      <button onClick={handleAccept} className="text-blue-500 hover:underline ml-2">
        Accept
      </button>
    </div>
  );
};

const Footer = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  const handleCookieAccept = () => {
    setShowCookieNotice(false);
  };

  return (
    <footer className="mt-8 p-8 static bottom-0 bg-black text-white">
      {showCookieNotice && <CookieNotice onAccept={handleCookieAccept} />}
      <div className="grid grid-cols-9 gap-4">
        <div className="col-start-1 col-3 w-64"> 
          <img className='object-contain h-16 content-start' src={footer} alt='CBX Partners Logo'/>
        </div>
        <div className="col-start-6 mx-3">
          <ul className="flex items-center">
            {footerLinks.map((foot, index) => (
              <li key={foot.id} className="flex items-center m-4">
                <a href={`${foot.id}`}>{foot.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="grid grid-cols-9 mt-5 text-left">
        <div className="col-start-1 col-span-2">
          <p>© 2023 CBX Capital Partners LP.</p>
          <a href='about:blank' className="text-blue-500 hover:underline">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

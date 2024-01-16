'use client'

import { useEffect, useState } from 'react';

import './buttonProductCTA.css';

export default function ButtonProductCTA({ children, product }) {
  const [isTawkReady, setIsTawkReady] = useState(false);

  useEffect(() => {
    const checkTawkReady = setInterval(() => {
      if (typeof window !== 'undefined' && window.Tawk_API) {
        setIsTawkReady(true);
        clearInterval(checkTawkReady);
      }
    }, 100);

    return () => clearInterval(checkTawkReady);
  }, []);

  const openChat = () => {
    if (isTawkReady) {
      window.Tawk_API.toggle();
      
    }
  };

  return (
    <>
      <button onClick={openChat} className="bo-btn">
        {children}
      </button>
    </>
  )
}
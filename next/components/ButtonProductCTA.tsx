'use client'

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import './buttonProductCTA.css';

type ButtonProductCTAProps = {
  children?: ReactNode;
}

export default function ButtonProductCTA({ children }: ButtonProductCTAProps) {
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
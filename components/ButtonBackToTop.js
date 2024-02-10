'use client'

import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './back-to-top.scss'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const heroArea = document.getElementById('hero');
    const infoSection = document.getElementById('info');
    if (
      heroArea && 
      infoSection && 
      window.scrollY > heroArea.offsetHeight && 
      window.scrollY < (infoSection.offsetTop - window.innerHeight)
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuart' });
  };
  return (
    <>
      <button onClick={scrollToTop} className={`back-to-top ${isVisible ? 'visible' : '' }`}>
        <i className="arrow up"></i> 
        <span>Back</span>
        <span>to Top</span>
      </button>
    </>
  )
}
'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import { animateScroll as scroll } from 'react-scroll';

export default function NavBar({ isTopPage }) {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 1000,
          smooth: 'easeInOutQuart',
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <ul className="navbar-nav collapse">
      {!isTopPage && (
        <li className="nav-item active">
          <Link scroll={false} className="nav-link" href="/">Home</Link>
        </li>
      )}
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#products" : "/products"}>Products</Link>
      </li>
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#about" : "/about"}>About</Link>
      </li>
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#achievements" : "/achievements"}>Achievements</Link>
      </li>
      {isTopPage && (
        <li className="nav-item">
          <Link scroll={false} className="nav-link" href="#info">Contact Us</Link>
        </li>
      )}
    </ul>
  )
}

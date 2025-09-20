'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import { animateScroll as scroll } from 'react-scroll';

import './navbar.scss'

type NavBarProps = {
  isTopPage?: boolean;
}

export default function NavBar({ isTopPage }: NavBarProps) {
  useEffect(() => {
    const smoothScroll = (event: Event) => {
      event.preventDefault();
      const anchor = event.currentTarget as HTMLAnchorElement | null;
      const href = anchor?.getAttribute('href') ?? '';
      const targetId = href.startsWith('#') ? href.slice(1) : href;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 1000,
          smooth: 'easeInOutQuart',
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      (anchor as HTMLAnchorElement).addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        (anchor as HTMLAnchorElement).removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <ul className="navbar-nav collapse">
      {!isTopPage && (
        <li className="nav-item active">
          <Link scroll={false} className="nav-link" href="/" prefetch={true}>Home</Link>
        </li>
      )}
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#products" : "/products"} prefetch={true}>Products</Link>
      </li>
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#achievements" : "/achievements"} prefetch={true}>Achievements</Link>
      </li>
      <li className="nav-item">
        <Link scroll={false} className="nav-link" href={isTopPage ? "#about" : "/about"} prefetch={true}>About</Link>
      </li>
      {isTopPage && (
        <li className="nav-item">
          <Link scroll={false} className="nav-link" href="#info" prefetch={true}>Contact Us</Link>
        </li>
      )}
    </ul>
  )
}

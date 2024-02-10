'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import NavBar from '/components/NavBar'

import Logo from '/assets/images/logo.webp'

import { Button, Collapse } from 'react-bootstrap';

import './header-section.scss'

export default function HeaderSection({ isTopPage }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header_section">
        <div className="container-fluid px-3 px-lg-4 px-xl-5">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <Link className="navbar-brand" href="/">
              <div className="logo">
                <div className="logo-container">
                  <Image src={Logo} alt="Superfood Miracle Tree" fill style={{ objectFit: 'contain' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
                </div>
              </div>
              <span>
                Moringa Herbasina
              </span>
            </Link>
            <Button onClick={() => setOpen(!open)} aria-controls="navbarSupportedContent" aria-expanded={open} className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </Button>

            <Collapse in={open}>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ms-auto flex-column flex-lg-row align-items-center">
                  <NavBar isTopPage={isTopPage} />
                </div>
              </div>
            </Collapse>
          </nav>
        </div>
      </header>
    </>
  )
}

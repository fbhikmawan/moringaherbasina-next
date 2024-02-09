import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import NavBar from '/components/NavBar'

import Logo from '/assets/images/logo.webp'

export default function HeaderSection({ isTopPage }) {
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ms-auto flex-column flex-lg-row align-items-center">
                <NavBar isTopPage={isTopPage} />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

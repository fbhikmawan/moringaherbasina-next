import React from 'react'
import Link from 'next/link'

export default function HeaderSection() {
  return (
    <header className="header_section">
      <div className="container-fluid px-4 px-lg-5">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <Link className="navbar-brand" href="index.html">
            <span>
              Logo / Company Name
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav collapse">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#achievements">Achievements</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

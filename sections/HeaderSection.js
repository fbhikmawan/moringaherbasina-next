import React from 'react'
import Link from 'next/link'

export default function HeaderSection() {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid header_top_container">
          <div className="contact_nav">
            <Link href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </Link>
            <Link href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </Link>
            <Link href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </Link>
          </div>
          <div className="social_box">
            <Link href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
            <Link href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
            <Link href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand " href="index.html"> Finter </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/team"> Team </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </Link>
                </li>
                <form className="form-inline justify-content-center">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

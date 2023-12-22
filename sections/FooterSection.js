import React from 'react'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <Link href="https://html.design/">Free Html Templates</Link>
        </p>
      </div>
    </footer>
  )
}

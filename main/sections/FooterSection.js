import React from 'react'
import Link from 'next/link'

import './footer-section.scss'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container-sm">
        <p>
          Managed by <strong><Link href="https://www.asaidgroup.com" target="_blank" prefetch={true}>ASAid</Link></strong><br /> &copy; {currentYear} Moringa Herbasina All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

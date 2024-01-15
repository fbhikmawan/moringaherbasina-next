import React from 'react'
import Link from 'next/link'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          Managed by <Link href="https://tech.asaidgroup.com/">ASAid Tech</Link><br />
          &copy; {currentYear} Bo Moringa All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

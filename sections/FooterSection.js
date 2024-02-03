import React from 'react'
import Link from 'next/link'
import TawkComponent from '/components/TawkComponent'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          Managed by <Link href="https://tech.asaidgroup.com/">ASAid Tech</Link><br />
          &copy; {currentYear} Moringa Herbasina All Rights Reserved.
        </p>
      </div>
      <TawkComponent 
        propertyId="65a668ad8d261e1b5f53e4cb" 
        widgetId="1hk90hqr7" 
      />
    </footer>
  )
}

import React from 'react'

import HeaderSection from '/sections/HeaderSection'

export default function MainLayout({ children }) {
  return (
    <>
      <div id="hero" className="sub_page hero_area">
        <HeaderSection />
      </div>
      { children }
    </>
  )
}

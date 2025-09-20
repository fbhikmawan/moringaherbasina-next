import React from 'react'

import HeaderSection from '@/sections/HeaderSection'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="hero" className="sub_page hero_area">
        <HeaderSection />
      </div>
      { children }
    </>
  )
}

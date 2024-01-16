import React from 'react'

import AboutSection from '/sections/AboutSection'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  return {
    title: `About Us | ${previousTitle}`,
  }
}

export default function AboutPage() {
  return (
    <>
      <AboutSection layoutPadding={true} />
    </>
  )
}

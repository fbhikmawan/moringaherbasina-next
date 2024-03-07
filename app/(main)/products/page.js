import React from 'react'

import ProductSection from '/sections/ProductSection'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''

  return {
    title: `Products | ${previousTitle}`,
    description: `We produce various moringa based products`,
    openGraph: {
      images: ['/assets/images/og-logo.png'],
    },
  }
}

export default function ProductsPage() {
  return (
    <ProductSection layoutPadding={true} layoutType="breakdown" />
  )
}

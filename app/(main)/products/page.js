import React from 'react'

import ProductSection from '/sections/ProductSection'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''

  return {
    title: `Products | ${previousTitle}`,
    description: `We produce various moringa based products`,
    openGraph: {
      images: [
        {
          url: '/assets/images/og-logo.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function ProductsPage() {
  return (
    <ProductSection layoutPadding={true} layoutType="breakdown" />
  )
}

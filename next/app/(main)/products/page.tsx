import React from 'react'
import { type Metadata, type ResolvingMetadata } from 'next'

import ProductSection from '@/sections/ProductSection'

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = (await parent).title?.absolute || ''

  return {
    title: `Products | ${previousTitle}`,
  }
}

export default function ProductsPage() {
  return (
    <ProductSection layoutPadding={true} />
  )
}

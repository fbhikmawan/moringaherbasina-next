import React from 'react'
import { type Metadata } from 'next'

import ProductSection from '@/sections/ProductSection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Products',
      template: '%s | Products', 
    },
  }
}

export default function ProductsPage() {
  return (
    <ProductSection layoutPadding={true} />
  )
}

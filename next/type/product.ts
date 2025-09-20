import { type StaticImageData } from 'next/image'

export type SubProduct = {
  title: string
  slug: string
  source: string
  images: string[]
  description: string
  link: string
}

export type Product = {
  images: StaticImageData[]
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  subProducts: SubProduct[]
}
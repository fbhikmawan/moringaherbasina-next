import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Theme Website Proposal',
  description: 'ASAid Group Investment | Proposed Website for you, Nurhadi Isromidasa',
  lang: 'en',
  charset: 'utf-8',
  robots: 'noindex,nofollow',
  keywords: 'website, theme, proposal, asaid, asaid-group, asaid group investment, nurhadi isromidasa',
  canonical: 'https://nurhadi.asaid-group.com/',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

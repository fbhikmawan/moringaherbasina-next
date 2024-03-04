import { Poppins } from 'next/font/google'

import InfoSection from '/sections/InfoSection'
import FooterSection from '/sections/FooterSection'

import 'jquery-nice-select/css/nice-select.css'
import '/assets/css/font-awesome.min.css'
import './layout.scss'

const poppins = Poppins({ 
  weight: ['400','600','700'], 
  subsets: ['latin'],
  display: 'swap',
  local: ['Poppins']
})

export const metadata = {
  metadataBase: new URL('https://nurhadi.asaidgroup.com'),
  title: 'Moringa Herbasina',
  lang: 'en',
  charset: 'utf-8',
  robots: 'noindex,nofollow',
  keywords: 'moringa herbasina, moringa, moringa leaves, moringa tea-bag, moringa powder, kelor, daun kelor, teh kelor, kelor bubuk',
  alternates: {
    canonical: '/',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <InfoSection />
        <FooterSection />
      </body>
    </html>
  )
}

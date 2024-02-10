import { Poppins } from 'next/font/google'
import Script from 'next/script'

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
  title: 'Moringa Herbasina',
  lang: 'en',
  charset: 'utf-8',
  robots: 'noindex,nofollow',
  keywords: 'moringa herbasina, moringa, moringa leaves, moringa tea-bag, moringa powder, kelor, daun kelor, teh kelor, kelor bubuk',
  canonical: 'https://www.moringaherbasina.com/',
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

import { Poppins } from 'next/font/google'
import Script from 'next/script'

import InfoSection from '/sections/InfoSection'
import FooterSection from '/sections/FooterSection'

import '/assets/css/globals.css'
import './layout.scss'
import 'jquery-nice-select/css/nice-select.css'
import '/assets/css/font-awesome.min.css'

const poppins = Poppins({ weight: ['400','600','700'], subsets: ['latin'] })

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
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <InfoSection />
        <FooterSection />

        <Script src="/assets/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

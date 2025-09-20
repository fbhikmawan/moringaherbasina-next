import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import InfoSection from '/sections/InfoSection'
import FooterSection from '/sections/FooterSection'
import ClarityScript from '/components/ClarityScript'
import TawkComponent from '/components/TawkComponent'

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
  metadataBase: new URL('https://www.moringaherbasina.com'),
  title: 'Moringa Herbasina',
  lang: 'en',
  charset: 'utf-8',
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
        <GoogleAnalytics gtmId="G-7Z1EVR64DN" />
        <ClarityScript />
        <TawkComponent 
          propertyId="65a668ad8d261e1b5f53e4cb" 
          widgetId="1hk90hqr7" 
        />
      </body>
    </html>
  )
}

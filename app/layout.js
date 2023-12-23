import { Poppins } from 'next/font/google'
import Script from 'next/script'

import FooterSection from '../sections/FooterSection'

import '/assets/css/globals.css'
import '/assets/css/bootstrap.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'jquery-nice-select/css/nice-select.css';
import '/assets/css/font-awesome.min.css'
import '/assets/css/style.css'
import '/assets/css/responsive.css'

const poppins = Poppins({ weight: ['400','600','700'], subsets: ['latin'] })

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
      <body className={poppins.className}>
        {children}
        <FooterSection />

        <Script src="/assets/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}

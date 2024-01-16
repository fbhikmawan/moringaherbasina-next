import { Poppins } from 'next/font/google'
import Script from 'next/script'

import InfoSection from '/sections/InfoSection'
import FooterSection from '/sections/FooterSection'

import '/assets/css/globals.css'
import '/assets/css/bootstrap.css'
import 'jquery-nice-select/css/nice-select.css';
import '/assets/css/font-awesome.min.css'
import '/assets/css/style.css'

const poppins = Poppins({ weight: ['400','600','700'], subsets: ['latin'] })

export const metadata = {
  title: 'Bo Moringa',
  description: 'Bo Moringa',
  lang: 'en',
  charset: 'utf-8',
  robots: 'noindex,nofollow',
  keywords: 'bo moringa, moringa, moringa leaves, moringa tea-bag, moringa powder, kelor, daun kelor, teh kelor, kelor bubuk',
  canonical: 'https://www.bomoringa.com/',
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
        <Script src="/assets/js/bootstrap.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="beforeInteractive" />
        
        {/* Tawk.to Script */}
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65a668ad8d261e1b5f53e4cb/1hk90hqr7';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

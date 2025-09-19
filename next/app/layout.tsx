import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import 'jquery-nice-select/css/nice-select.css'
import './font-awesome.min.css'
import './layout.scss'

import ClarityScript from '@/components/ClarityScript'
import TawkComponent from '@/components/TawkComponent'

const poppins = Poppins({ 
  weight: ['400','600','700'], 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: 'Moringa Herbasina',
  keywords: 'moringa herbasina, moringa, moringa leaves, moringa tea-bag, moringa powder, kelor, daun kelor, teh kelor, kelor bubuk',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <GoogleAnalytics gaId="G-7Z1EVR64DN" />
            <ClarityScript />
            <TawkComponent 
              propertyId="65a668ad8d261e1b5f53e4cb" 
              widgetId="1hk90hqr7" 
            />
          </>
        )}
      </body>
    </html>
  );
}

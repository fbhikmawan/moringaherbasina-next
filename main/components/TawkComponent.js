'use client'

import Script from "next/script";

export default function TawkComponent({ propertyId, widgetId = "default" }) {
  const src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
  return (
    <>
      <Script id="tawk-init" strategy="afterInteractive">
        {`window.Tawk_API = window.Tawk_API || {}; window.Tawk_LoadStart = new Date();`}
      </Script>
      <Script id="tawk-script" src={src} strategy="afterInteractive" />
    </>
  );
}
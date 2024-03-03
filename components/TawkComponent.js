'use client'

import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export default function TawkComponent({propertyId, widgetId}){
  return (
    <TawkMessengerReact 
      propertyId={propertyId}
      widgetId={widgetId}
    />
  )
}
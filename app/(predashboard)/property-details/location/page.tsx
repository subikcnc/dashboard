import React from 'react'
import { useRouter } from 'next/navigation'

const LocationPage = () => {
  const router = useRouter()
  console.log('router is ', router)
  return (
    <div>Property location information
        
    </div>
    
  )
}

export default LocationPage
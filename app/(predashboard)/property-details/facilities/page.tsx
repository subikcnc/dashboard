import React from 'react'
import Buttons from '@/components/Buttons'
import OnboardButtons from '@/components/OnboardButtons'


const FacilitiesPage = () => {
  return (
    <div>
        Facilities page
        <Buttons next="/property-details/location/" />
        <OnboardButtons />
    </div>
  )
}

export default FacilitiesPage
import React from 'react'
import {useRouter} from 'next/router'


const FacilitiesPage = () => {
  const router = useRouter();
  console.log('this is the router', router);
  return (
    <div>
        Facilities page
    </div>
  )
}

export default FacilitiesPage
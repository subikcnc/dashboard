import React from 'react'
import Link from 'next/link'

const Buttons = ({back, next}: {back?: string, next?: string}) => {
  return (
    <div className="flex justify-center">
        {back && <Link href={back}>Back</Link>}
        {next && <Link href={next}>Continue</Link>}
    </div>
  )
}

export default Buttons
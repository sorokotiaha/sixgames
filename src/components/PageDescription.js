import React from 'react'

export default function PageDescription({description}) {
  return (
    <p className="w-full sm:w-9/12 lg:w-6/12 text-md text-stone-50 text-center mb-4">
      {description}
    </p>
  )
}

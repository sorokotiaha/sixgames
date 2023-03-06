import React from 'react'

export default function PageTitle({title}) {
  return (
    <h1 className="text-4xl sm:text-6xl font-bold text-stone-50 uppercase text-center mb-8">
      {title}
    </h1>
  )
}

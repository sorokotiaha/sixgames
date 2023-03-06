import React from 'react'

export default function ButtonSecondary({title, onClick}) {
  return (
    <button onClick={onClick} className='bg-rose-500 font-semibold text-stone-50 hover:text-rose-500 hover:bg-stone-50 transition px-3 py-1 border-rose-500 hover:border-stone-50 border-2 border-solid box-border text-sm focus:outline-none focus:border-stone-50 focus:text-rose-500 focus:bg-stone-50'>{title}</button>
  )
}

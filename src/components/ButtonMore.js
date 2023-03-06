import React from 'react'

export default function ButtonMore({title, onClick}) {
  return (
    <button onClick={onClick} className='bg-rose-500 text-stone-50 hover:text-rose-500 hover:bg-stone-200 transition text-md px-5 py-3 uppercase font-semibold focus:outline-none focus:text-rose-500 focus:bg-stone-200'>{title}</button>
  )
}

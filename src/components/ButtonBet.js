import React from 'react'

export default function ButtonBet({title, onClick}) {
  return (
    <button onClick={onClick} className='w-20 text-rose-500 font-semibold hover:bg-rose-500 hover:text-stone-50 px-3 py-1 border-rose-500 border-2 border-solid box-border transition text-sm focus:outline-none focus:bg-rose-500 focus:text-stone-50'>{title}</button>
  )
}

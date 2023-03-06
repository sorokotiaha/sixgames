import React from 'react';
import { Link } from "react-router-dom";
import paths from 'data/paths';

export default function GameCard({ id, title, image, tag}) {
  return (
    <Link className='bg-neutral-900 p-2 transition hover:bg-neutral-800 hover:shadow-xl mb-4 focus:outline-none focus:bg-neutral-800 focus:shadow-xl' to={`${paths.GAME_PAGE}/${id}`}>
      <img className='h-40 mb-2 object-cover w-full' src={image} alt={title} />
      <h3 className='font-bold text-stone-50 uppercase mb-1'>{title}</h3>
      <p className='text-rose-500'>{tag}</p>
    </Link>
  )
}

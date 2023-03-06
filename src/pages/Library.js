import React, { useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import ButtonMore from 'components/ButtonMore';
import GameCard from 'components/GameCard';

import { all } from 'data/games';
import paths from 'data/paths';

const ITEMS_PER_LOAD = 8;

export default function Library() {
  const [ query, setQuery ] = useState('');
  const [ displayed, setDisplayed ] = useState([]);

  const filtered = useMemo(() => {
    return all.filter(el => {
      return el.title.toLowerCase().includes(query.toLowerCase());
    })
  }, [query]);

  useEffect(() => {
    setDisplayed(filtered.slice(0,ITEMS_PER_LOAD))
  },[filtered]);

  const loadMore = () => {
    setDisplayed([...displayed, ...filtered.slice(displayed.length, displayed.length+ITEMS_PER_LOAD)])
  }

  return (
    <div className='container flex mx-auto flex-col items-center px-4 sm:px-0'>
      <div className='flex items-center justify-between w-full mb-6'>
        <Link to={paths.HOME_PAGE} className='text-rose-500 hover:text-stone-50 transition self-start focus:outline-none focus:text-rose-700'>Back to Home page</Link>
        <input className='bg-stone-50 py-1 px-3 sm:py-2 sm:w-96 focus:outline-none' type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      {displayed.length ? (
        <div className="grid grid-cols-1 gap-x-3 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 w-full">
          {displayed.map(({id, title, image, tag}) => 
            <GameCard key={id} id={id} title={title} image={image} tag={tag} />
          )}
        </div>
      ) : (
        <p className='text-stone-50 text-lg font-semibold py-20'>No games found</p>
      )}
      {filtered > displayed && (
        <ButtonMore title="Load more" onClick={loadMore} />
      ) }
    </div>
  )
}

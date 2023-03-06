import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthenticationContext } from 'context/AuthenticationProvider';
import PageTitle from 'components/PageTitle';
import PageSubTitle from 'components/PageSubTitle';
import GameCard from 'components/GameCard';

import paths from 'data/paths';
import { favourite, all } from 'data/games';

export default function Home() {
  const { loggedIn} = useContext(AuthenticationContext);
  const list = loggedIn ? favourite : all.slice(0, 4);

  return (
    <div className='container flex mx-auto pt-16 flex-col items-center px-4 sm:px-0'>
      <PageTitle title="Welcome to SiX"/>
      <PageSubTitle title={loggedIn ? 'Favourite games' : 'Most popular games'}/>
      <div className="grid grid-cols-1 gap-x-3 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 w-full">
        {list.map(({id, title, image, tag}) => 
          <GameCard key={id} id={id} title={title} image={image} tag={tag} />
        )}
      </div>
      <Link to={paths.LIBRARY_PAGE} className='bg-rose-500 text-stone-50 hover:text-rose-500 hover:bg-stone-200 transition text-xl px-5 py-3 uppercase font-semibold focus:outline-none focus:text-rose-500 focus:bg-stone-200'>More games here</Link>
    </div>
  )
};

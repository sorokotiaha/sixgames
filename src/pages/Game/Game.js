import React from 'react';
import { Link } from "react-router-dom";
import PageTitle from 'components/PageTitle';
import PageSubTitle from 'components/PageSubTitle';
import ButtonBet from 'components/ButtonBet';

import paths from 'data/paths';

const CURRENCY = '$';

export default function Game({data}) {
  const { title, image } = data;

  return (
    <div className='container flex mx-auto flex-col items-center px-4 sm:px-0'>
      <div className='flex justify-start w-full mb-6'>
        <Link to={paths.HOME_PAGE} className='text-rose-500 hover:text-stone-50 transition self-start focus:outline-none focus:text-rose-700'>Back to Home page</Link>
      </div>
      <PageTitle title={title}/>
      <PageSubTitle title={'Description will be added soon...'}/>
      <img className='h-full object-cover w-full sm:w-9/12 lg:w-6/12 mb-6' src={image} alt={title} />
      <div className='w-full sm:w-9/12 lg:w-6/12 flex items-center justify-between mb-6'>
        <span className='text-green-400'>{`Balance ${CURRENCY}100`}</span>
        <ButtonBet title={`${CURRENCY}1`} />
        <ButtonBet title={`${CURRENCY}3`}/>
        <ButtonBet title={`${CURRENCY}5`} />
        <ButtonBet title={`${CURRENCY}10`}/>
      </div>
    </div>
  )
}

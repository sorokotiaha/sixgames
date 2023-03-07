import React from 'react';
import { Link } from "react-router-dom";
// components
import PageTitle from 'components/PageTitle';
import PageDescription from 'components/PageDescription';
import ButtonBet from 'components/ButtonBet';
// constants
import paths from 'data/paths';
import { CURRENCY } from 'data/currency';

export default function Game({data, user, setBet}) {
  const { title, image, description } = data;
  const { balance } = user;

  return (
    <div className='container flex mx-auto flex-col items-center px-4 sm:px-0'>
      <div className='flex justify-start w-full mb-6'>
        <Link to={paths.HOME_PAGE} className='text-rose-500 hover:text-stone-50 transition self-start focus:outline-none focus:text-rose-700'>Back to Home</Link>
      </div>
      <PageTitle title={title}/>
      <PageDescription description={description}/>
      <img className='h-full object-cover w-full sm:w-9/12 lg:w-6/12 mb-6' src={image} alt={title} />
      <div className='w-full sm:w-9/12 lg:w-6/12 flex items-center justify-between mb-6'>
        <span className='text-green-400'>{`Balance ${CURRENCY}${balance}`}</span>
        <ButtonBet title={`${CURRENCY}1`} onClick={() => setBet(1) } />
        <ButtonBet title={`${CURRENCY}3`} onClick={() => setBet(3) }/>
        <ButtonBet title={`${CURRENCY}5`} onClick={() => setBet(5) }/>
        <ButtonBet title={`${CURRENCY}10`} onClick={() => setBet(10) }/>
      </div>
    </div>
  )
}

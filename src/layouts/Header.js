import React, { Fragment, useContext } from 'react';
import { AuthenticationContext } from 'context/AuthenticationProvider';
// components
import ButtonPrimary from 'components/ButtonPrimary';
import ButtonSecondary from 'components/ButtonSecondary';
// constnts
import { CURRENCY } from 'data/currency';
// assets
import logo from 'assets/icons/logo.svg'

export default function Header() {
  const {user, loggedIn, logOut, logIn, signUp} = useContext(AuthenticationContext);
  const open = () => {
    // ToDo: open auth popup
  }

  console.log(loggedIn);
  console.log(user);

  return (
    <div className='container flex justify-between mx-auto py-6 px-4 sm:px-0 items-center'>
      <div className='flex items-center'>
        <img className='h-8 mr-2' src={logo} alt="Logo" />
        <span className='text-rose-500 font-bold text-xl'>SiX</span>
      </div>
      <div className='flex space-x-2 items-center'>
        {loggedIn && user ? (
          <Fragment>
            <div className='text-green-400 font-semibold'>{`${CURRENCY}${user.balance}`}</div>
            <div className='text-stone-50 font-semibold'>{`Hi, ${user.username}`}</div>
            <ButtonPrimary title="Log out" onClick={logOut}/>
          </Fragment>
        ): (
          <Fragment>
            <ButtonPrimary title="Log In" onClick={logIn} />
            <ButtonSecondary title="Register" onClick={signUp} />
          </Fragment>
        )}
      </div>
    </div>
  )
}


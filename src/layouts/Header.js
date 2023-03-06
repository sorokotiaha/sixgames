import React, { Fragment, useContext } from 'react';
import { AuthenticationContext } from 'context/AuthenticationProvider';
import ButtonPrimary from 'components/ButtonPrimary';
import ButtonSecondary from 'components/ButtonSecondary';

import logo from 'assets/icons/logo.svg'

export default function Header() {
  const {user, loggedIn} = useContext(AuthenticationContext);
  const open = () => {
    console.log('open popup');
  }

  const logout = () => {

  }

  console.log(loggedIn);
  console.log(user);

  return (
    <div className='container flex justify-between mx-auto py-6 px-4 sm:px-0 items-center'>
      <div className='flex items-center'>
        <img className='h-8 mr-2' src={logo} alt="Logo" />
        <span className='text-rose-500 font-bold text-xl'>SiX</span>
      </div>
      <div className='space-x-2'>
        {loggedIn && user ? (
          <Fragment>
            <div>{user.balance}</div>
            <div>{user.username}</div>
            <ButtonSecondary title="Log out" onClick={logout}/>
          </Fragment>
        ): (
          <Fragment>
            <ButtonPrimary title="Log In" onClick={open} />
            <ButtonSecondary title="Register" onClick={open} />
          </Fragment>
        )}
      </div>
    </div>
  )
}


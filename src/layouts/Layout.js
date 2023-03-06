import React from 'react';
import Header from './Header';
import Footer from './Footer';

import mainBg from 'assets/images/main.jpg';

export default function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: `url(${mainBg})`}}
      className='w-full h-full min-h-screen relative bg-cover bg-no-repeat bg-center flex flex-col justify-between'>
      <Header />
        <div className='mb-auto pb-1'>{children}</div>
      <Footer />
    </div>
  )
}

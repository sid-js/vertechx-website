import React from 'react';
import Navbar from './Navbar';

function MainLayout({ children }) {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;

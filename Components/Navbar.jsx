import React from 'react';
import Link from 'next/link';
import react, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className='fixed top-0 flex flex-wrap w-full  z-50 px-5 py-2 bg-white bg-opacity-0  items-center backdrop-blur-sm border border-none rounded-lg'>
      <div className='w-full flex flex-wrap items-center justify-between p-5'>
        <Link href='/' className='flex items-center'>
          <img
            src='/logo.svg'
            className='h-10 w-200 m-200px border-transparent'
            alt='Technical glitch'
            aria-current='page'
          />
        </Link>
        <div className='block md:hidden'>
          <button className='block md:hiddem' onClick={toggleMenu}>
            <svg className='w-10 h-12 ' viewBox='0 0 24 24'>
              <path fill="white"d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z' />
            </svg>
          </button>
        </div>
        <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
          <ul
            className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent 
            dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'
          >
            <li>
              <Link
                href='/'
                className='block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/events'
                className='block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href='/geekathon'
                className='block py-2 pl-5 pr-4 text-xl font-space  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                GEEKathon
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block py-2 pl-5 pr-4 text-xl font-space  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      {showMenu ? (
        <div className='md:hidden flex flex-col'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              href='/'
              className='block px-3 py-2 text-base font-medium text-white  hover:text-purple-500 hover:bg-transparent'
              aria-current='page'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='block px-3 py-2 text-base font-medium text-white  hover:text-purple-500 hover:bg-transparent'
            >
              About
            </Link>
            <Link
              href='/events'
              className='block px-3 py-2 text-base font-medium text-white  hover:text-purple-500 hover:bg-transparent'
            >
              Events
            </Link>
            <Link
              href='/geekathon'
              className='block px-3 py-2 text-base font-medium text-white  hover:text-purple-500 hover:bg-transparent'
            >
              GEEKathon
            </Link>
            <Link
              href='/contact'
              className='block px-3 py-2 text-base font-medium text-white  hover:text-purple-500 hover:bg-transparent'
            >
              Contact
            </Link>
            
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;

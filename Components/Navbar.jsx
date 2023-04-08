import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-transparent-150 bg-none bg-opacity-20 z-50 px-14 py-2">
      <div className="max-w-screen-3xl flex items-center justify-between mx-auto p-5">
        <Link href="#" className="flex items-center">
          <img src="logo.svg" className="h-10 w-200 m-200px border-transparent" alt="Technical glitch" aria-current="page" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="#" className="block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/About" className="block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
              <Link href="/Events" className="block py-2 pl-5 pr-4 text-xl font-space text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</Link>
            </li>
            <li>
              <Link href="/Contacts" className="block py-2 pl-5 pr-4 text-xl font-space  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

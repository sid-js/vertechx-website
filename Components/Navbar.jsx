import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className=" border-transparent-150 bg-none bg-opacity-20  z-50 sticky top-0 px-14 py-2  ">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link href="#" className="flex items-center">
          <img src="logo.svg" className="h-10 w-200 m-200px" alt="Technical glitch" aria-current="page" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent 
            dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="/Home" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black" aria-current="page"></span>
                <span class="relative text-black group-hover:text-white">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/About" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link href="/Events" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">Events</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">Contact</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

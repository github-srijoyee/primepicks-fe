import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-violet-950 ">
        <div className='container ps-8 pe-8'>
          <div className="grid grid-cols-3">
            <div>
              <h1>
                <Link to="/" className='font-serif text-2xl text-white mt-6'>PrimePicks.</Link>
              </h1>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="relative w-full sm:max-w-lg sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-full relative p-1">
                  <form role="form" className="relative flex z-50 bg-white rounded-full">
                    <input type="text" placeholder="Search product here" className="rounded-full flex-1 px-6 text-gray-700 focus:outline-none" />
                    <button className="bg-orange-200 text-gray-900 rounded-full font-semibold px-8 py-2 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none">
                      <BsSearch className='text-lg' />
                    </button>
                  </form>
                  <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
                  <div className="glow glow-2 z-20 bg-red-400 absolute"></div>
                  <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                  <div className="glow glow-4 z-40 bg-orange-400 absolute"></div>
                </div>
              </div>
            </div>
            <div className='links flex justify-center items-center p-4'>
              <div className='flex pr-4'>
                <img src='compare.png' alt='compare' className='h-6 w-6 mr-1' />
                <Link to="/compare-product" className="text-xs text-white pt-1 tracking-wide">Compare</Link>
              </div>
              <div className='flex pr-4'>
                <img src='wishlist.png' alt='wishlist' className='h-6 w-6 mr-1' />
                <Link to="/wishlist" className="text-xs text-white pt-1 tracking-wide">Wishlist</Link>
              </div>
              <div className='flex pr-4'>
                <img src='user.png' alt='user' className='h-6 w-6 mr-1' />
                <Link to="/login" className="text-xs text-white pt-1 tracking-wide">Log In</Link>
              </div>
              <div className='flex '>
                <img src='cart.png' alt='cart' className='h-7 w-7 mt-2 mr-1' />
                <Link to="/cart" className="flex flex-col mt-1 mb-0">
                  <span className='badge bg-orange-200 text-[0.70rem] rounded-md p-[0.10rem] '>1</span>
                  <p className='text-[0.70rem] pt-1 text-white'>Rs.0</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <header className='bg-violet-800 p-1'>
        <div className="max-w-2xl mx-auto">
          <nav className="border-gray-200">
            <div className="container mx-auto flex flex-wrap items-center justify-between relative">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white bg-transparent hover:bg-violet-500  focus:outline-none active:bg-violet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  <img src='categories.png' alt='categories' className='w-5 h-5 mr-2'/>
                  Shop Categories
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {dropdownVisible && (
                  <div className="absolute left-0 top-full mt-2 bg-violet-300 divide-y divide-gray-100 rounded-lg shadow w-[12.4rem] z-10">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <Link to="" className="block px-4 py-2 hover:bg-violet-400">Action</Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-2 hover:bg-violet-400">Action</Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-2 hover:bg-violet-400">Action</Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-2 hover:bg-violet-400">Action</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="hidden md:block w-full md:w-auto">
                <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? 'text-orange-300 text-xs uppercase tracking-wide' : 'text-white text-xs uppercase tracking-wide hover:text-orange-400')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product"
                      className={({ isActive }) => (isActive ? 'text-orange-300 text-xs  uppercase tracking-wide' : 'text-white text-xs uppercase tracking-wide hover:text-orange-400')}
                    >
                      Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) => (isActive ? 'text-orange-300 text-xs uppercase tracking-wide' : 'text-white text-xs uppercase tracking-wide hover:text-orange-400')}
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? 'text-orange-300 text-xs uppercase tracking-wide' : 'text-white text-xs uppercase tracking-wide hover:text-orange-400')}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;


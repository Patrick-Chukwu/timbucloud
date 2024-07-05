import React, { useState } from 'react';

import logo from '/logo.svg';

import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <nav className="bg-primary fixed top-0 w-full z-30 px-2 py-3">
      <div className="flex-1 flex-wrap w-full flex justify-between items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-2">
          <div className="flex justify-between items-center  w-full">
            <div className="flex-shrink-0">
            <Link to='/'><img className='h-6 w-[284.9px] bg-primary hover:bg-background' src={logo} alt="Timbucloud logo" /></Link>
          

            </div>
            <div className="hidden text-[16px] font-semibold t  md:ml-6 lg:flex md:space-x-8 lg:justify-center lg:items-center lg:gap-2 flex-shrink-1">
            <Link to='/' className='hover:text-background'>Mac </Link>
        <Link to='/' className='hover:text-background'>Laptops</Link>
          <Link to='/' className='hover:text-background'>Ipads & Tablets</Link>
         <Link to='/' className='hover:text-background'>Desktops & Workstations</Link>
         <Link to='/' className='hover:text-background'>Accessories</Link>

            </div>
            <ul className="text-xl font-semibold hidden nav-links lg:flex lg:justify-center  lg:items-center lg:gap-4">

       <div className='text-black relative'> <Search className='size-4'/></div>
       {/* <input type="search" name="search" className='bg-white  w-16  relative ' id="" />  */}
       <Link to='/checkout' className='text-foreground hover:text-background'><ShoppingCart className='size-6'/></Link>
     </ul>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-background focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="h-screen px-5 pt-2 mt--6 pb-60 space-y-1 flex flex-col gap-2 text-[16px] font-semibold text-foreground">
        <Link to='/' onClick={closeMenu} className='hover:text-background'>Mac </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background'>Laptops </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background'>Ipads & Tablets </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background'>Desktops & Workstations </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background'>Accessories </Link>
        <ul className="text-xl font-semibold  nav-links lg:flex lg:justify-center  lg:items-center lg:gap-4">
       <Link to='/' className='text-black size-8 hover:text-background'> <Search/></Link>
       <Link to='/checkout' className='text-foreground size-8 hover:text-background'><ShoppingCart/></Link>
     </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

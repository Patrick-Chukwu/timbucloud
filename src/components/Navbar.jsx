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
    <nav className="bg-primary  w-full px-2 py-3">
      <div className="flex-1 flex-wrap w-full flex justify-between items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-2">
          <div className="flex justify-between items-center  w-full">
            <div className="flex-shrink-0">
            <Link to='/'><img className='h-6 w-[284.9px] bg-primary hover:bg-background' src={logo} alt="Timbucloud logo" /></Link>
          

            </div>
            <div className="hidden text-[16px] font-semibold t  md:ml-6 lg:flex md:space-x-8 lg:justify-center lg:items-center lg:gap-2 flex-shrink-1">
            <Link to='/' className='hover:text-background hover:bg-foreground px-2 rounded-sm'>Mac </Link>
        <Link to='/' className='hover:text-background hover:bg-foreground px-2 rounded-sm'>Laptops</Link>
          <Link to='/' className='hover:text-background hover:bg-foreground px-2 rounded-sm'>Ipads & Tablets</Link>
         <Link to='/' className='hover:text-background hover:bg-foreground px-2 rounded-sm'>Desktops & Workstations</Link>
         <Link to='/' className='hover:text-background hover:bg-foreground px-2 rounded-sm'>Accessories</Link>

            </div>
            <ul className="text-xl font-semibold hidden nav-links lg:flex lg:justify-center  lg:items-center lg:gap-4">

       <div className='text-black relative size-6 text-center'> <Search className='size-4'/></div>
       {/* <input type="search" name="search" className='bg-white  w-16  relative ' id="" />  */}
       <Link to='/cart' className='text-foreground hover:text-background size-8 hover:bg-foreground place-items-center'><ShoppingCart className='size-6'/></Link>
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
        <div className="h-screen px-5 pt-12 mt--6 pb-60 space-y-1 flex flex-col justify-start gap-2 text-[16px] font-semibold text-foreground">
        <Link to='/' onClick={closeMenu} className='hover:text-background active:bg-foreground hover:bg-foreground px-2 '>Home </Link>
        <Link to='/' onClick={closeMenu} className='active:bg-foreground hover:text-background  hover:bg-foreground px-2'>Mac </Link>
        <Link to='/' onClick={closeMenu} className='active:bg-foreground hover:text-background  hover:bg-foreground px-2'>Laptops </Link>
        <Link to='/' onClick={closeMenu} className='active:bg-foreground hover:text-background  hover:bg-foreground px-2'>Ipads & Tablets </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background  hover:bg-foreground active:bg-foreground px-2'>Desktops & Workstations </Link>
        <Link to='/' onClick={closeMenu} className='hover:text-background  hover:bg-foreground active:bg-foreground px-2'>Accessories </Link>
        <ul className="font-semibold  nav-links flex  justify-start  items-start text-[16px] gap-4 p-2 mt-4 border-t">
       <Link to='/' className='text-black hover:text-background size-6 text-left'> <Search className='size-4'/></Link>
       <Link to='/cart' className='text-foreground hover:text-background size-8 text-center'><ShoppingCart className='size-6'/></Link>
     </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

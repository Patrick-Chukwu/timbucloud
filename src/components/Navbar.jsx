import React, { useState } from 'react';

import logo from '/logo.svg';
import cart from '../assets/cart.svg';

import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ShoppingCartIcon } from 'lucide-react';

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
      <div className="flex-1 flex-wrap max-w-full flex justify-between items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-2">
          <div className="flex justify-between items-center  w-full flex-1">
            <div className="">
            <Link to='/'><img className='h-4 w-[189.3px] bg-primary hover:bg-background' src={logo} alt="Timbucloud logo" /></Link>

          

            </div>
          

    
       <Link to='/cart' className='text-[16px] font-semibold flex justify-center  items-center gap-2 w-fit text-foreground size-8 place-items-center'><img src={cart} alt="cart icon" className='hover:bg-background hover:p-2  hover:rounded-full' />
       <p>Cart(0)</p>

       </Link>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

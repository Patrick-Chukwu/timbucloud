import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Ari.png';
import cart from '../assets/cart.svg';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-primary w-full px-2 py-3 fixed top-0 z-10">
      <div className="flex-1 flex-wrap max-w-full flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-2">
          <div className="flex justify-between items-center w-full flex-1">
            <div className="">
              <Link to='/'><img className='size-12 bg-primary hover:bg-background' src={logo} alt="Timbucloud logo" /></Link>
            </div>
            <Link to='/cart' className='text-[16px] font-semibold flex justify-center items-center hover:underline gap-2 w-fit text-foreground size-8 place-items-center'>
              <img src={cart} alt="cart icon" className='' />
              <p>Cart({cartItems.length})</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

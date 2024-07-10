import React from 'react';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = ({ cartItems, handleQuantityChange, handleRemoveItem, calculateTotal }) => {
  const navigate = useNavigate();

  return (
    <div className=" mt-[80px]">
      <div className="w-full mx-auto px-4 flex flex-col items-start justify-start">
        <h1 className="text-2xl font-bold my-4 mx-4">My Cart</h1>
        <p className='mb-4 mx-4 text-xl font-semibold'>Total Items ({cartItems.length})</p>
        {cartItems.length === 0 ? (
          <div className="flex flex-col gap-8 items-between justify-center lg:flex-row w-full my-4">
            <div className="flex flex-col items-center justify-center gap-4 py-20 w-[95%] mx-auto max-h-[118px] lg:h-[325px] max-w-[840px]">
              <p className="text-xl text-center font-semibold">Your cart is empty. Start shopping.</p>
              <NavLink to={`/#store`}>
                <Button className="bg-primary text-xl font-bold rounded-3xl hover:text-background hover:bg-destructive">Buy Now</Button>
              </NavLink>
            </div>
            <OrderSummary total={calculateTotal()} cta="Proceed To Payment" onButtonClick={() => navigate('/checkout')} />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row w-full">
              <div className="flex flex-col gap-2 my-4 w-[400px] mx-auto max-w-full">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
              <OrderSummary total={calculateTotal()} cta="Proceed To Payment" onButtonClick={() => navigate('/checkout')} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

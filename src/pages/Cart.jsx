// Cart.jsx
import React from 'react';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import one from '../assets/products/desktop.webp';
import two from '../assets/products/desktop2.webp';
import three from '../assets/products/desktop3.webp';
import four from '../assets/products/desktop4.webp';
import five from '../assets/products/desktop5.webp';
import six from '../assets/products/desktop6.webp';
import one1 from '../assets/products/desktop10.webp';
import one2 from '../assets/products/desktop9.webp';

const Cart = ({ cartItems, handleQuantityChange, handleRemoveItem, calculateTotal }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image1: one,
      image2: one1,
      image3: one2,
      name: 'Dell UltraSharp 39.7" 2160p HDR 120 Hz Curved Thunderbolt Hub Monitor',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 1829.99,
    },
    {
      id: 2,
      image1: two,
      image2: one1,
      image3: one2,
      name: 'Dell UltraSharp 38" 1600p Curved Monitor',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 1041.73,
    },
    {
      id: 3,
      image1: three,
      image2: one1,
      image3: one2,
      name: 'Apple 24" iMac with M3 Chip (Silver)',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 2299.00,
    },
    {
      id: 4,
      image1: four,
      image2: one1,
      image3: one2,
      name: 'Apple Mac mini (M2 Pro)',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 1499.00,
    },
    {
      id: 5,
      image1: five,
      image2: one1,
      image3: one2,
      name: 'SanDisk 4TB Extreme Portable SSD V2 (Black)',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 299.99,
    },
    {
      id: 6,
      image1: six,
      image2: one1,
      image3: one2,
      name: 'Apple 16" MacBook Pro (M3 Pro, Space Black)',
      description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip...',
      tag: '#DEU3824DW • MFR #U3824DW',
      price: 2499.00,
    },
  ];

  return (
    <div className="min-h-screen mt-16">
      <div className="w-full mx-auto px-4 flex flex-col items-start justify-start">
        <h1 className="text-2xl font-bold my-4 mx-4">My Cart</h1>
        <p className='mb-4 mx-4 text-xl font-semibold'>Total Items ({cartItems.length})</p>
        {cartItems.length === 0 ? (
          <div className="flex flex-col gap-8 items-center justify-center lg:flex-row w-full my-4">
            <div className="flex flex-col items-center justify-center gap-4 py-20 w-[95%] mx-auto max-h-[118px] lg:h-[325px] max-w-[840px]">
              <p className="text-xl text-center font-semibold">Your cart is empty. Start shopping.</p>
              <NavLink to={`/#store`}>
                <Button className="bg-primary text-xl font-bold rounded-3xl hover:text-background hover:bg-destructive">Buy Now</Button>
              </NavLink>
            </div>
            <OrderSummary total={calculateTotal()} cta="Proceed To Payment" onButtonClick={() => navigate('/checkout')} />
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-start lg:flex-row w-full">
            <div className="flex flex-col gap-2 my-4 mx-auto max-w-full">
              {cartItems.map((product) => (
                <CartItem
                  key={product.id}
                  item={product}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
            <OrderSummary total={calculateTotal()} cta="Proceed To Payment" onButtonClick={() => navigate('/checkout')} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

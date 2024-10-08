import React from 'react';
import { useNavigate } from 'react-router-dom';


const OrderSummary = ({ total, cta, onButtonClick }) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/checkout`)
  // }
  return (
    <div className="w-[400px] max-w-[98%] mx-auto p-4 my-4  rounded-3xl shadow-lg text-foreground  text-lg">
      <h2 className="text-[28px] font-bold mb-4">Order Summary</h2>
      <p className="flex justify-between"><span>Subtotal:</span><span className='font-semibold'>${total.toFixed(2)}</span></p>
      <p className="flex justify-between"><span>Duties & Taxes:</span><span className='font-semibold'>Due Upon Delivery</span></p>
      <p className="flex justify-between text-2xl  mt-4"><span>Total:</span><span className='font-bold'>${total.toFixed(2)}</span></p>
      <button className="text-xl font-bold bg-primary w-[360px] mx-auto py-2 text-center rounded-[60px] max-w-[95%] mt-4" onClick={onButtonClick}>{cta}</button>
    </div>
  );
};

export default OrderSummary;

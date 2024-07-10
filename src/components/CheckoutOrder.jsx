import React, { useState, useEffect } from 'react';

const CheckoutOrder = ({ total, cta, onButtonClick }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiration: '',
    cardSecurityCode: '',
    termsAccepted: false,
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const calculatedTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if (typeof total !== 'function') {
      console.warn("Expected 'total' to be a function");
    } else {
      total(calculatedTotal);
    }
  }, [total]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="bg-white max-w-[400px] w-full mx-auto p-4 my-4 md:min-w-[664px] rounded-3xl shadow-lg text-foreground text-[16px]">
      <h2 className="text-[28px] font-bold mb-4">Order Summary</h2>
      <p className="flex justify-between pb-4"><span>Subtotal:</span><span className='font-semibold'>${total.toFixed(2)}</span></p>
      <p className="flex justify-between border-b pb-4 border-[#D9D9D9]"><span>Duties & Taxes:</span><span className='font-semibold'>Due Upon Delivery</span></p>
      <p className="flex justify-between text-2xl border-b pb-4 border-[#D9D9D9] mt-4"><span>Total:</span><span className='font-bold'>${total.toFixed(2)}</span></p>

      <form onSubmit={handleSubmit}>
        <div className="p-4 mb-4 rounded w-full">
          <h2 className="text-xl font-bold mb-4">Your Card Details</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 items-start justify-center">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="p-2 border rounded mb-4 w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <label htmlFor="cardExpiration">Expiration (MM/YY)</label>
              <input
                type="text"
                name="cardExpiration"
                id="cardExpiration"
                value={formData.cardExpiration}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <label htmlFor="cardSecurityCode">Card Security Code</label>
              <input
                type="text"
                name="cardSecurityCode"
                id="cardSecurityCode"
                value={formData.cardSecurityCode}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-2 w-full">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className='text-[12px] font-semibold'>
              You agree to <a href="#" className="text-blue-500 underline">terms & conditions</a> and <a href="#" className="text-blue-500 underline">privacy policy</a>
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-xl font-bold bg-primary w-[360px] py-2 text-center rounded-[60px] max-w-[95%] mt-4" onClick={onButtonClick}>{cta}</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutOrder;

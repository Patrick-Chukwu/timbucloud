import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OrderSummary from '@/components/OrderSummary';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    streetAddress: '',
    city: '',
    postcode: '',
    cardNumber: '',
    cardExpiration: '',
    cardSecurityCode: '',
    termsAccepted: false,
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const calculatedTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, []);

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
    <div className="">
      <Navbar />
      <div className="w-[98%] mx-auto p-4">
        <h1 className="text-5xl font-bold mb-4">Checkout</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center lg:flex-row w-full lg:items-start lg:justify-between">
          <div className="bg-white p-4 mb-4 rounded shadow-lg w-full  lg:w-[840px]  lg:h-[730px]">
            <div className="grid grid-cols-1 gap-2 text-[16px] cursor-pointer font-normal">

            <h2 className="text-[28px] font-bold py-4">Personal Details</h2>

              <div className="flex w-full justify-between items-center gap-2 flex-col md:flex-row">
                
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label htmlFor="firstName">First Name</label>
                  <input
                  type="text"
                  name="firstName"
                  id='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-2 border rounded w-full"
                  required
                />
                </div>
             
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                  type="text"
                  name="lastName"
                  id='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-2 border rounded w-full"
                  required
                />
                </div>
          
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>
              <input
                type="tel"
                name="phoneNumber"
                id='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <label htmlFor="email">Email Address</label>
                  <input
                type="email"
                name="email"
                id='email'
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
                </div>
          
              <div className="flex flex-col gap-2 items-start justify-center">
                  <label htmlFor="companyName">Company Name (Optional)</label>
                  <input
                type="text"
                name="companyName"
                id='companyName'
                value={formData.companyName}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
                </div>
             
              <div className="flex flex-col gap-2 items-start justify-center">
                  <label htmlFor="streetAddress">Street Address</label>
                </div>
              <input
                type="text"
                name="streetAddress"
                id='streetAddress'
                value={formData.streetAddress}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
              <div className="flex flex-col gap-2 items-start justify-center">
                  <label htmlFor="city">Town / City</label>
                  <input
                type="text"
                name="city"
                id='city'
                value={formData.city}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
                </div>
            
              <div className="flex flex-col gap-2 items-start justify-center">
                  <label htmlFor="postcode">Postcode / Zip</label>
                  <input
                type="text"
                name="postcode"
                id='postcode'
                value={formData.postcode}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
                </div>
         
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center max-w-full self-start">
          <OrderSummary
            total={total}
            cta="Place Order"
            onButtonClick={handleSubmit}
          />

          <div className="bg-white p-4 mb-4 rounded shadow w-full">
            <h2 className="text-xl font-bold mb-4">Your Card Details</h2>
        
            <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 items-start justify-center">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
              type="text"
              name="cardNumber"
              id='cardNumber'
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
                id='cardExpiration'
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
                id='cardSecurityCode'
                value={formData.cardSecurityCode}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
                </div>
             
            </div>
            <div className="flex justify-center items-center  my-2 w-full">
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
          </div>
         
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

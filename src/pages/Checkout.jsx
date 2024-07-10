import React, { useState, useEffect } from 'react';
import CheckoutOrder from '@/components/CheckoutOrder';

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

  const handleButtonClick = () => {
    alert('Proceeding with payment!');
  };

  return (
    <div className="mt-16">
      <div className="w-[98%] mx-auto p-4">
        <h1 className="text-5xl font-bold mb-4">Checkout</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center lg:flex-row max-w-full lg:items-start lg:justify-between  gap-8 ">
          <div className="bg-white p-4 mb-4 rounded shadow-lg w-full lg:h-[730px]  lg:min-w-[840px]">
            <div className="grid grid-cols-1 gap-2 text-[16px] cursor-pointer font-normal">
              <h2 className="text-[28px] font-bold py-4">Personal Details</h2>

              <div className="flex w-full justify-between items-center gap-2 flex-col md:flex-row">
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-2 border rounded w-full border-[#D9D9D9]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-2 border rounded w-full border-[#D9D9D9]"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <label htmlFor="companyName">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <label htmlFor="city">Town / City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <label htmlFor="postcode">Postcode / Zip</label>
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="p-2 border rounded w-full border-[#D9D9D9]"
                  required
                />
              </div>
            </div>
          </div>
            <CheckoutOrder total={total} cta="Place Order" onButtonClick={handleButtonClick} />
        </form>
      </div>
    </div>
  );
};

export default Checkout;

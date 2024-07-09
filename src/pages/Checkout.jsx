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
    // Implement order submission logic here
    alert('Order placed successfully!');
  };

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form onSubmit={handleSubmit} className="max-w-[840px] w-full">
          <div className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex w-full justify-between items-center gap-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-2 border rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-2 border rounded w-full"
                  required
                />
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name (Optional)"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="Street Address"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Town / City"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode / Zip"
                className="p-2 border rounded"
                required
              />
            </div>
          </div>

          <OrderSummary
            total={total}
            cta="Place Order"
            onButtonClick={handleSubmit}
          />

          <div className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Your Card Details</h2>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="p-2 border rounded mb-4"
              required
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="cardExpiration"
                value={formData.cardExpiration}
                onChange={handleChange}
                placeholder="Expiration (MM/YY)"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="cardSecurityCode"
                value={formData.cardSecurityCode}
                onChange={handleChange}
                placeholder="Card Security Code"
                className="p-2 border rounded"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span>
                You agree to <a href="#" className="text-blue-500">terms & conditions</a> and <a href="#" className="text-blue-500">privacy policy</a>
              </span>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

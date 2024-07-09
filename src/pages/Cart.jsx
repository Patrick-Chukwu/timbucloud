import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const initialCartItems = [
  {
    id: 1,
    name: "Dell UltraSharp 38\" 1600p Curved Monitor",
    image: "/images/monitor1.jpg",
    price: 1041.73,
    quantity: 1,
    code: "#DEU3824DW",
    mfr: "MFR #U3824DW"
  },
  {
    id: 2,
    name: "Dell UltraSharp 39.7\" 2160p HDR 120 Hz Curved Thunderbolt Hub Monitor",
    image: "/images/monitor2.jpg",
    price: 1200.00,
    quantity: 1,
    code: "#DEU3824DW",
    mfr: "MFR #U3824DW"
  },
  {
    id: 3,
    name: "Apple 24\" iMac With M3 Chip (Silver)",
    image: "/images/imac.jpg",
    price: 2299.00,
    quantity: 1,
    code: "#DEU3824DW",
    mfr: "MFR #U3824DW"
  },
  {
    id: 4,
    name: "Apple 16\" MacBook Pro (M3 Pro, Space Black)",
    image: "/images/macbook.jpg",
    price: 2499.00,
    quantity: 1,
    code: "#DEU3824DW",
    mfr: "MFR #U3824DW"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const navigate = useNavigate();

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };





  return (
    <div className="">
      <Navbar/>
      <div className="w-full mx-auto px-4 flex flex-col items-start justify-start">
      <h1 className="text-2xl font-bold my-4 mx-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <div className="min-h-full py-24">
           <p className="text-2xl text-center font-bold ">You don't have any item in your cart at the moment.</p>
        </div>
       
      ) : (
        <>  
        <p className="mb-4">Total Items ({cartItems.length})</p>
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
  
      <OrderSummary total={calculateTotal()}
      cta="Proceed To Payment" 
      onButtonClick={() => navigate('/checkout')}/>
      </div>
        </>
      )

      }
      
      </div>
   
   
      <Footer/>
    </div>
  );
};

export default Cart;

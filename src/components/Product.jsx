import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Add To Cart');
  const [cartItemCount, setCartItemCount] = useState(0); // State to track cart items count
  // <p className="text-sm font-bold text-foreground">Items in Cart: {cartItemCount}</p>
  useEffect(() => {
    // Update cart items count when component mounts or cartItems change
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItemCount(savedCartItems.length);
  }, []);

  const handleAddToCart = () => {
    setButtonText('Added to Cart'); // Update button text
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = savedCartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = savedCartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([...savedCartItems, { ...product, quantity: 1 }]));
    }

    setCartItemCount(savedCartItems.length + 1); // Update cart items count
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <motion.div
      className="cursor-pointer flex flex-col gap-2 items-start justify-center bg-background shadow-lg rounded-[14px] lg:rounded-[20px] px-4 py-8 h-[480px] md:w-[335px] lg:min-w-[400px] hover:shadow-xl"
    >
      <img
        src={product.image1}
        alt={product.name}
        onClick={handleClick}
        className="w-[311px] md:w-[288px] xl:w-[376px] h-[250px] object-contain rounded-3xl"
      />
      <h2
        className="text-xl font-bold text-foreground w-full text-left"
        onClick={handleClick}
      >
        {product.name}
      </h2>
      <p className="text-sm font-extrabold text-destructive">{product.tag}</p>
      <div className="flex gap-2 justify-between items-center w-full">
        <p className="text-foreground text-2xl font-bold">{product.price}</p>
        <Button
          className="text-xl bg-primary font-bold rounded-3xl hover:text-background hover:bg-destructive"
          onClick={handleAddToCart}
        >
          {buttonText}
        </Button>
      </div>
    
    </motion.div>
  );
};

export default Product;

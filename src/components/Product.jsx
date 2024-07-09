import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion'


const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("a new item has been added to cart")
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
    navigate('/cart');
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  const handleCart = () => {
    navigate('/cart')
  }
  return (
    <motion.div whileHover={{scale: .9}} className="cursor-pointer flex flex-col gap-2 items-start justify-center bg-background shadow-lg rounded-[14px] xl:rounded-[20px] px-4 py-8  h-[450px] w-[335px] md:w-[312px] xl:w-[400px]  hover:shadow-xl" >
      <img src={product.image1} alt={product.name} onClick={handleClick} className="w-[311px] md:w-[288px] xl:w-[376px] h-[250px] object-contain rounded-3xl" />
      <h2 className="text-xl font-bold text-foreground w-full py-0" onClick={handleClick}>{product.name}</h2>
      <p className="text-sm font-extrabold">{product.tag}</p>
      <div className="flex gap-2 justify-between items-center w-full">
        <p className='text-foreground text-2xl font-bold'>{product.price}</p>
        <Button className='text-xl bg-primary font-bold rounded-3xl hover:text-background hover:bg-destructive' onClick={handleAddToCart}>Add To Cart</Button>
      </div>
    </motion.div>
  );
};

export default Product;

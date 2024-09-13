import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = ({ product, addToCart }) => {
  const navigate = useNavigate();
  
  const [buttonText, setButtonText] = useState('View Details');

  const handleAddToCart = () => {
    // setButtonText('Added to Cart');
    // addToCart(product);
    navigate(`/product/${product.id}`);

  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      className="cursor-pointer flex flex-col gap-2 max-w-[] items-center justify-center bg-background shadow-lg rounded-[14px] lg:rounded-[20px] px-4 py-8 h-[450px] md:min-w-[312px] md:w-[45%] lg:w-[32%] w-[400px] hover:shadow-xl"
    >
      <img
        src={product.image1}
        alt={product.name}
        onClick={handleClick}
        className="w-[311px] md:w-[288px] xl:w-[376px] h-[250px] object-contain rounded-3xl"
      />
      <div className="flex-col flex gap-1 justify-between  h-40">
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
      </div>
     
    </motion.div>
  );
};

export default Product;

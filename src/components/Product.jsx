import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  const handleCart = () => {
    navigate('/cart')
  }
  return (
    <div className="flex flex-col gap-2 items-start justify-center bg-background shadow-lg rounded-[14px] xl:rounded-[20px] px-4 py-8  h-[450px] w-[335px] md:w-[312px] xl:w-[400px]" >
      <img src={product.image1} alt={product.name} onClick={handleClick} className="w-[311px] md:w-[288px] xl:w-[376px] h-[250px] object-contain rounded-3xl" />
      <h2 className="text-xl font-bold text-foreground w-full py-0" onClick={handleClick}>{product.name}</h2>
      <p className="text-sm font-extrabold">{product.tag}</p>
      <div className="flex gap-2 justify-between items-center w-full">
        <p className='text-foreground text-2xl font-bold'>{product.price}</p>
        <Button className='text-xl bg-primary font-bold rounded-3xl hover:text-background hover:bg-destructive' onClick={handleCart}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Product;

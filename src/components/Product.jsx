import React from 'react';
import { Button } from './ui/button';

const Product = ({ product, onClick }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center bg-background shadow rounded-3xl p-4 h-[428px]" onClick={() => onClick(product)}>
      <img src={product.image1} alt={product.name} className="w-[311px] xl:w-[376px] h-[250px] object-fill rounded-3xl" />
      <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
      <p className="text-sm font-extrabold">{product.tag}</p>
      <div className="flex gap-2 justify-between items-center w-full">
        <p className='text-foreground text-2xl font-bold'>{product.price}</p>
        <Button className='text-foreground text-lg bg-primary font-bold'>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Product;

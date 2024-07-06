import React from 'react';
import { Button } from './ui/button';

const Product = ({ product, onClick }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center bg-background shadow-lg rounded-[14px] xl:rounded-[20px] p-4 h-[428px] w-[335px] md:w-[312px] xl:w-[400px]" onClick={() => onClick(product)}>
      <img src={product.image1} alt={product.name} className="w-[311px] md:w-[288px] xl:w-[376px] h-[250px] object-contain rounded-3xl" />
      <h2 className="text-xl font-bold text-foreground w-full">{product.name}</h2>
      <p className="text-sm font-extrabold">{product.tag}</p>
      <div className="flex gap-2 justify-between items-center w-full">
        <p className='text-foreground text-2xl font-bold'>{product.price}</p>
        <Button className='text-foreground text-lg bg-primary font-bold'>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Product;

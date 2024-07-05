import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Please select a product.</div>;
  }

  return (
    <div className="">
      <img src={product.image1} alt={product.name} className="" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700">{product.price}</p>
      <p className="text-gray-500">{product.description}</p>

    </div>
  );
};

export default ProductDetails;

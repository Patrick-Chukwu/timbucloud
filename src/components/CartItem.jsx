import React from 'react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-start  md:items-center justify-between px-4 py-4 rounded-[20px] w-[335px] md:w-[584px] lg:[820px] shadow-lg">
      <img src={item.image} alt={item.name} className="w-72 h-32 object-cover rounded" />
      <div className="flex-1 ml-4">
        <div className="flex gap-2 justify-between items-start">        <h2 className="text-xl font-bold">{item.name}</h2>
        <button onClick={() => onRemove(item.id)} className="text-red-500 text-sm font-bold w-fit">Remove</button>

        </div>
        <p className="text-gray-500">{item.code} • {item.mfr}</p>
        <div className="flex items-center justify-between gap-2 px-4 mt-2 bg-gray-200 max-w-[184px] rounded-3xl">
          <button onClick={() => onQuantityChange(item.id, -1)}
          disabled={item.quantity === 1}
          className=" p-2 rounded">-</button>
          <span className="mx-2">{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, 1)} className=" p-2 rounded">+</button>
        </div>
        <p className="text-lg font-bold">${item.price.toFixed(2)}</p>

      </div>

    </div>
  );
};

export default CartItem;

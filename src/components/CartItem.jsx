import React from 'react';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white lg:w-[800px] min-w-[60%]">
        <img src={item.image1} alt={item.name} className="w-[250px] h-40 object-contain rounded-lg" />
      <div className="flex items-start flex-col">
        
      <div className="flex gap-2 items-center justify-center">
          <h4 className="text-xl font-bold max-w-[455px]">{item.name}</h4>
          <button onClick={() => onRemove(item.id)} className="text-red-500 ml-4">Remove</button>
          </div>
          <p className="text-[16px] font-normal">{item.tag}</p>
        <div className="flex items-center gap-4">
        <div className="flex text-[16px] font-bold items-center bg-[#EEEEEE] rounded-lg">
        <button onClick={() => onDecrease(item.id)} className=" px-2 py-1 rounded hover:bg-[#D9D9D9] cursor-pointer">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} className=" px-2 py-1 rounded hover:bg-[#D9D9D9] cursor-pointer">+</button>
   
      </div>
      <p className="text-lg font-bold mt-2">${item.price}</p>
         
        </div>
      </div>
    

    </div>
  );
};

export default CartItem;

import React from 'react';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-[20px] shadow-lg items-center justify-center md:justify-start bg-white lg:w-[800px] py-6 px-4 min-w-[60%] gap-4">
        <img src={item.image1} alt={item.name} className=" w-[250px] h-40 object-contain rounded-lg" />
      <div className="flex items-start flex-col gap-4">
        
      <div className="flex gap-2 items-center justify-center">
          <h4 className="text-xl font-bold max-w-[455px]">{item.name}</h4>
          <button onClick={() => onRemove(item.id)} className="text-[#FA1C1C] font-bold ml-4 text-xs">Remove</button>
          </div>
          <p className="text-[16px] font-normal">{item.tag}</p>
        <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex text-[16px] font-bold items-center justify-center bg-[#EEEEEE] rounded-[20px] lg:w-[184px]">
        <button onClick={() => onDecrease(item.id)} className=" px-4 py-1 rounded hover:bg-[#D9D9D9] cursor-pointer">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} className=" px-4 py-1 rounded hover:bg-[#D9D9D9] cursor-pointer">+</button>
   
      </div>
      <p className="text-lg font-bold mt-2">{item.price}</p>
         
        </div>
      </div>
    

    </div>
  );
};

export default CartItem;

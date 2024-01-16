import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/store/cartSlice";

function CartCard({ data }) {

    const dispach = useDispatch();



    const handleAdd = ()=>{
        dispach(addItemToCart(data))
    }

    const handleRemove = ()=>{

    }

  return (
    <div className="flex gap-4 w-[100%] shadow-xl rounded-md border-[1px] justify-evenly border-gray-300 p-5">
      <div className="w-[30%]">
        <img className="h-[200px] object-cover" src={data.image} />
      </div>
      <div className="flex flex-col justify-center gap-5 w-[40%]">
        <p className="text-xl font-semibold">{data.name}</p>
        <p  className="font-semibold">Rs. {data.quantity*data.price}</p>
        {data.type == "veg" ? <p className="">🟢 veg</p> : <p>🔴 nonveg</p>}
      </div>
      <div className="flex items-center justify-center w-[40%]">
        <div className="flex gap-3 items-center justify-center">
        <button onClick={handleRemove} className="bg-gray-400 p-1 px-[10px] rounded-lg">-</button>
        <p>{data.quantity}</p>
        <button onClick={handleAdd} className="bg-gray-400 p-1 px-[8px] rounded-lg">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

import React from "react";
import { useDispatch } from "react-redux";
import {addItemToCart} from '../utils/store/cartSlice';

function PizzaCard({ data }) {

  const dispach = useDispatch();

  const handleCart = ()=>{
   data = {...data,quantity: 1}
    console.log(data);
    dispach(addItemToCart(data))
  }

  return (
    <div className="flex gap-4 w-[100%] shadow-xl rounded-md border-[1px] border-gray-300 p-5">
      <div className="flex flex-col gap-3 justify-center">
        <p className="font-semibold">{data.name}</p>
        <p
          className={`${
            data.type === "veg" ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.type}
        </p>
        <p className="font-semibold">Rs.{data.price}.00</p>
      </div>
      <div className="flex flex-col gap-2 items-start justify-center">
        <p className="text-sm italic">{data.description}</p>
        <div className="">
          <p className="font-semibold">Ingredients:</p>
          <div className="flex flex-wrap text-sm italic">
          {data.ingredients.map((val) => {
            return <p>{val},</p>;
          })}
          </div>
        </div>
        <div>
            <p className="font-semibold">Toppings:</p>
          <div className="flex flex-wrap text-sm italic">
          {data.topping.map((val) => {
            return <p>{val},</p>;
          })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="w-[150px] h-[150px]">
          <img className="object-cover" src={data.image}></img>
        </div>
        <div className="flex justify-center">
          <button onClick={handleCart} className="shadow-md rounded-md border-[1px] bg-orange-400 p-1">
            <p className="font-semibold">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
